import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export interface MentorApplyRequestBody {
  name: string;
  email: string;
  phone?: string;
  organization: string;
  role: string;
  linkedin: string;
  expertise?: string[];
  note?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: MentorApplyRequestBody = await req.json();

    // Validation
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Full name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: "Valid email address is required." },
        { status: 400 }
      );
    }

    if (!body.linkedin || body.linkedin.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: "LinkedIn profile URL is required." },
        { status: 400 }
      );
    }

    const applicationId = "MENTOR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const sheetDbUrl = process.env.SHEETDB_API_URL;

    const cleanPhone = body.phone ? body.phone.trim().replace(/^\+/, "") : "";

    const mentorRecord = {
      timestamp: timestamp,
      Timestamp: timestamp,
      application_id: applicationId,
      "Application ID": applicationId,
      "Registration ID": applicationId,
      name: body.name.trim(),
      Name: body.name.trim(),
      "Founder Name": body.name.trim(),
      email: body.email.trim().toLowerCase(),
      Email: body.email.trim().toLowerCase(),
      "Founder Email": body.email.trim().toLowerCase(),
      phone: cleanPhone,
      Phone: cleanPhone,
      "Founder WhatsApp": cleanPhone,
      organization: body.organization?.trim() || "",
      Organization: body.organization?.trim() || "",
      role: body.role?.trim() || "",
      Role: body.role?.trim() || "",
      linkedin: body.linkedin.trim(),
      LinkedIn: body.linkedin.trim(),
      "LinkedIn Profile": body.linkedin.trim(),
      "Founder LinkedIn": body.linkedin.trim(),
      "Startup Name": `[MENTOR] ${body.name.trim()}`,
      Sector: `${body.role?.trim() || "Mentor"}${body.organization ? ` @ ${body.organization.trim()}` : ""}`,
      expertise: body.expertise?.join(", ") || "",
      Expertise: body.expertise?.join(", ") || "",
      note: body.note?.trim() || "",
      Note: body.note?.trim() || "",
      "Team Members": `Expertise: ${body.expertise?.join(", ") || "General"}${body.note ? ` | Note: ${body.note.trim()}` : ""}`,
    };

    // 1. Submit to SheetDB (Try "Mentors" tab first, then fallback to default Sheet1)
    if (sheetDbUrl) {
      try {
        const mentorSheetRes = await fetch(`${sheetDbUrl}?sheet=Mentors`, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: [mentorRecord] }),
        });

        if (!mentorSheetRes.ok) {
          // Fallback to default sheet if "Mentors" tab does not exist
          await fetch(sheetDbUrl, {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: [mentorRecord] }),
          });
        }
      } catch (sheetErr) {
        console.warn("SheetDB mentor submission notice:", sheetErr);
      }
    }

    // 2. Insert into Supabase if available
    try {
      const { data, error } = await supabase
        .from("mentor_applications")
        .insert({
          name: body.name.trim(),
          email: body.email.trim().toLowerCase(),
          phone: body.phone?.trim() || null,
          organization: body.organization?.trim() || null,
          role: body.role?.trim() || null,
          linkedin_url: body.linkedin.trim(),
          expertise: body.expertise || [],
          note: body.note?.trim() || null,
        })
        .select()
        .single();

      if (error) {
        console.warn("Supabase mentor application note (fallback):", error.message);
      }

      return NextResponse.json({
        success: true,
        message: "Mentor application submitted successfully!",
        application_id: data?.id || applicationId,
      });
    } catch (dbErr: any) {
      console.warn("Database execution note:", dbErr?.message || dbErr);
      return NextResponse.json({
        success: true,
        message: "Mentor application submitted successfully!",
        application_id: applicationId,
      });
    }
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
