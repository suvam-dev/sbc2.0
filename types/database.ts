export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      registrations: {
        Row: {
          id: string;
          startup_name: string;
          sector: string;
          pitch_deck_url: string | null;
          founder_full_name: string;
          founder_email: string;
          founder_whatsapp: string;
          founder_department: string | null;
          founder_roll_number: string | null;
          founder_year_of_study: string | null;
          founder_linkedin_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          startup_name: string;
          sector: string;
          pitch_deck_url?: string | null;
          founder_full_name: string;
          founder_email: string;
          founder_whatsapp: string;
          founder_department?: string | null;
          founder_roll_number?: string | null;
          founder_year_of_study?: string | null;
          founder_linkedin_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          startup_name?: string;
          sector?: string;
          pitch_deck_url?: string | null;
          founder_full_name?: string;
          founder_email?: string;
          founder_whatsapp?: string;
          founder_department?: string | null;
          founder_roll_number?: string | null;
          founder_year_of_study?: string | null;
          founder_linkedin_url?: string | null;
          created_at?: string;
        };
      };
      team_members: {
        Row: {
          id: string;
          registration_id: string;
          name: string;
          email: string;
          institute: string;
          role: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          registration_id: string;
          name: string;
          email: string;
          institute: string;
          role: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          registration_id?: string;
          name?: string;
          email?: string;
          institute?: string;
          role?: string;
          created_at?: string;
        };
      };
    };
  };
}

export type RegistrationRow = Database["public"]["Tables"]["registrations"]["Row"];
export type RegistrationInsert = Database["public"]["Tables"]["registrations"]["Insert"];

export type TeamMemberRow = Database["public"]["Tables"]["team_members"]["Row"];
export type TeamMemberInsert = Database["public"]["Tables"]["team_members"]["Insert"];
