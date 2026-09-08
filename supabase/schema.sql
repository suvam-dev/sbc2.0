-- Startup Bootcamp 9.0 Database Schema
-- Run this script in the Supabase SQL Editor

CREATE TABLE IF NOT EXISTS public.registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    startup_name TEXT NOT NULL,
    sector TEXT NOT NULL,
    pitch_deck_url TEXT,
    founder_full_name TEXT NOT NULL,
    founder_email TEXT NOT NULL,
    founder_whatsapp TEXT NOT NULL,
    founder_department TEXT,
    founder_roll_number TEXT,
    founder_year_of_study TEXT,
    founder_linkedin_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS public.team_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    registration_id UUID NOT NULL REFERENCES public.registrations(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    institute TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_registrations_founder_email ON public.registrations(founder_email);
CREATE INDEX IF NOT EXISTS idx_team_members_registration_id ON public.team_members(registration_id);

ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on registrations" 
ON public.registrations 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

CREATE POLICY "Allow public insert on team_members" 
ON public.team_members 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

CREATE POLICY "Allow read access to authenticated users on registrations" 
ON public.registrations 
FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Allow read access to authenticated users on team_members" 
ON public.team_members 
FOR SELECT 
TO authenticated 
USING (true);

INSERT INTO storage.buckets (id, name, public) 
VALUES ('pitch-decks', 'pitch-decks', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Allow public uploads to pitch-decks"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'pitch-decks');

CREATE POLICY "Allow public read of pitch-decks"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'pitch-decks');
