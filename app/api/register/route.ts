import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export interface RegisterRequestBody {
  college_email: string;
  startup_name: string;
  sector: string;
  pitch_deck_url?: string | null;
  founder_full_name: string;
  founder_email: string;
  founder_whatsapp: string;
  founder_department?: string;
  founder_roll_number?: string;
  founder_year_of_study?: string;
  founder_linkedin_url?: string;
  team_members?: Array<{
    name: string;
    email: string;
    institute: string;
    role: string;
  }>;
}

export async function POST(req: NextRequest) {
  try {
    const body: RegisterRequestBody = await req.json();

    // Server-side validation
    const errors: Record<string, string> = {};

    if (!body.startup_name || body.startup_name.trim().length < 2) {
      errors.startup_name = "Startup / Idea name must be at least 2 characters.";
    }

    if (!body.sector || body.sector.trim().length === 0) {
      errors.sector = "Please select a sector for your venture.";
    }

    if (!body.founder_full_name || body.founder_full_name.trim().length < 2) {
      errors.founder_full_name = "Founder full name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.founder_email || !emailRegex.test(body.founder_email)) {
      errors.founder_email = "Please enter a valid founder email address.";
    }

    const phoneRegex = /^[0-9+\-\s]{10,15}$/;
    if (!body.founder_whatsapp || !phoneRegex.test(body.founder_whatsapp.replace(/\D/g, ""))) {
      errors.founder_whatsapp = "Please enter a valid 10-digit phone/WhatsApp number.";
    }

    // Validate team members if present
    if (body.team_members && body.team_members.length > 0) {
      body.team_members.forEach((member, index) => {
        if (!member.name || member.name.trim().length === 0) {
          errors[`team_member_${index}_name`] = `Member ${index + 1} name is required.`;
        }
        if (!member.email || !emailRegex.test(member.email)) {
          errors[`team_member_${index}_email`] = `Member ${index + 1} valid email is required.`;
        }
      });
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Validation failed" },
        { status: 400 }
      );
    }

    const registrationId = "SBC9-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    const sheetDbUrl = process.env.SHEETDB_API_URL;

    // Format team members as readable string and individual member slots
    const formattedTeam = body.team_members && body.team_members.length > 0
      ? body.team_members.map((m, i) => `[${i + 1}] ${m.name} (${m.email} / ${m.institute} / ${m.role})`).join("\n")
      : "Solo Founder";

    const m1 = body.team_members?.[0] || null;
    const m2 = body.team_members?.[1] || null;
    const m3 = body.team_members?.[2] || null;
    const m4 = body.team_members?.[3] || null;

    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const cleanPhone = body.founder_whatsapp.trim().replace(/^\+/, "");

    // 1. Submit to SheetDB (Google Sheet / Excel database)
    if (sheetDbUrl) {
      try {
        await fetch(sheetDbUrl, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
          data: [
            {
              timestamp: timestamp,
              Timestamp: timestamp,
              registration_id: registrationId,
              "Registration ID": registrationId,
              startup_name: body.startup_name.trim(),
              "Startup Name": body.startup_name.trim(),
              sector: body.sector.trim(),
              Sector: body.sector.trim(),
              pitch_deck_url: body.pitch_deck_url || "",
              "Pitch Deck URL": body.pitch_deck_url || "",
              founder_name: body.founder_full_name.trim(),
              "Founder Name": body.founder_full_name.trim(),
              founder_email: body.founder_email.trim().toLowerCase(),
              "Founder Email": body.founder_email.trim().toLowerCase(),
              founder_whatsapp: cleanPhone,
              "Founder WhatsApp": cleanPhone,
              department: body.founder_department?.trim() || "",
              Department: body.founder_department?.trim() || "",
              roll_number: body.founder_roll_number?.trim() || "",
              "Roll Number": body.founder_roll_number?.trim() || "",
              year_of_study: body.founder_year_of_study?.trim() || "",
              "Year of Study": body.founder_year_of_study?.trim() || "",
              founder_linkedin: body.founder_linkedin_url?.trim() || "",
              "Founder LinkedIn": body.founder_linkedin_url?.trim() || "",
              "Member 1 Name": m1?.name?.trim() || "",
              "Member 1 Email": m1?.email?.trim() || "",
              "Member 1 College": m1?.institute?.trim() || "",
              "Member 1 Role": m1?.role?.trim() || "",
              "Member 2 Name": m2?.name?.trim() || "",
              "Member 2 Email": m2?.email?.trim() || "",
              "Member 2 College": m2?.institute?.trim() || "",
              "Member 2 Role": m2?.role?.trim() || "",
              "Member 3 Name": m3?.name?.trim() || "",
              "Member 3 Email": m3?.email?.trim() || "",
              "Member 3 College": m3?.institute?.trim() || "",
              "Member 3 Role": m3?.role?.trim() || "",
              "Member 4 Name": m4?.name?.trim() || "",
              "Member 4 Email": m4?.email?.trim() || "",
              "Member 4 College": m4?.institute?.trim() || "",
              "Member 4 Role": m4?.role?.trim() || "",
              team_members: formattedTeam,
              "Team Members": formattedTeam,
            }
          ]
        }),
      });
    } catch (sheetErr) {
      console.warn("SheetDB submission notice:", sheetErr);
    }
  }

    // 2. Try inserting into Supabase if configured
    try {
      const { data: regData, error: regError } = await supabase
        .from("registrations")
        .insert({
          startup_name: body.startup_name.trim(),
          sector: body.sector.trim(),
          pitch_deck_url: body.pitch_deck_url || null,
          founder_full_name: body.founder_full_name.trim(),
          founder_email: body.founder_email.trim().toLowerCase(),
          founder_whatsapp: body.founder_whatsapp.trim(),
          founder_department: body.founder_department?.trim() || null,
          founder_roll_number: body.founder_roll_number?.trim() || null,
          founder_year_of_study: body.founder_year_of_study?.trim() || null,
          founder_linkedin_url: body.founder_linkedin_url?.trim() || null,
        })
        .select()
        .single();

      if (!regError && regData) {
        const dbRegistrationId = regData.id;

        if (body.team_members && body.team_members.length > 0) {
          const teamRows = body.team_members.map((m) => ({
            registration_id: dbRegistrationId,
            name: m.name.trim(),
            email: m.email.trim().toLowerCase(),
            institute: m.institute.trim(),
            role: m.role.trim(),
          }));

          await supabase.from("team_members").insert(teamRows);
        }
      }
    } catch (dbErr: any) {
      console.warn("Supabase database note:", dbErr?.message || dbErr);
    }

    return NextResponse.json({
      success: true,
      registration_id: registrationId,
      message: "Registration submitted successfully!",
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
