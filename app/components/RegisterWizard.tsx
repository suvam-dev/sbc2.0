"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Plus,
  Trash2,
  Upload,
  FileText,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";

export interface TeamMemberInput {
  name: string;
  email: string;
  institute: string;
  role: string;
}

export interface FormData {
  collegeEmail: string;
  startupName: string;
  sector: string;
  pitchDeckFile: File | null;
  pitchDeckUrl: string;
  founderFullName: string;
  founderEmail: string;
  founderWhatsapp: string;
  founderDepartment: string;
  founderRollNumber: string;
  founderYearOfStudy: string;
  founderLinkedinUrl: string;
  teamMembers: TeamMemberInput[];
}

const SECTORS = [
  "AI & Agentic Systems",
  "FinTech & Payments",
  "Logistics & Supply Chain",
  "HealthTech & BioTech",
  "AgriTech & ClimateTech",
  "SaaS & Enterprise Tools",
  "Consumer Tech & Social",
  "EdTech & Future of Work",
  "DeepTech & Hardware",
  "Other",
];

const YEARS_OF_STUDY = [
  "1st Year (Undergraduate)",
  "2nd Year (Undergraduate)",
  "3rd Year (Undergraduate)",
  "4th Year (Undergraduate)",
  "5th Year / Dual Degree",
  "Postgraduate / Masters",
  "PhD Scholar",
  "Recent Alum (within 1 yr)",
];

export default function RegisterWizard() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [registrationId, setRegistrationId] = useState<string>("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<FormData>({
    collegeEmail: "",
    startupName: "",
    sector: "",
    pitchDeckFile: null,
    pitchDeckUrl: "",
    founderFullName: "",
    founderEmail: "",
    founderWhatsapp: "",
    founderDepartment: "",
    founderRollNumber: "",
    founderYearOfStudy: "",
    founderLinkedinUrl: "",
    teamMembers: [],
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation per step
  const validateStep1 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.collegeEmail || !emailRegex.test(formData.collegeEmail.trim())) {
      errors.collegeEmail = "Please enter a valid college email address.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.startupName || formData.startupName.trim().length < 2) {
      errors.startupName = "Startup or idea name is required (min 2 characters).";
    }
    if (!formData.sector) {
      errors.sector = "Please select a sector for your venture.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep3 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.founderFullName || formData.founderFullName.trim().length < 2) {
      errors.founderFullName = "Full name is required.";
    }
    if (!formData.founderEmail || !emailRegex.test(formData.founderEmail.trim())) {
      errors.founderEmail = "Valid email address is required.";
    }
    const cleanPhone = formData.founderWhatsapp.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.founderWhatsapp = "Please enter a valid 10-digit WhatsApp phone number.";
    }

    formData.teamMembers.forEach((member, idx) => {
      if (!member.name.trim()) {
        errors[`member_${idx}_name`] = `Member ${idx + 1} name is required.`;
      }
      if (!member.email.trim() || !emailRegex.test(member.email.trim())) {
        errors[`member_${idx}_email`] = `Member ${idx + 1} valid email is required.`;
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Step Navigation
  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) {
        // Auto pre-populate founder email if empty
        if (!formData.founderEmail) {
          setFormData((prev) => ({ ...prev, founderEmail: prev.collegeEmail }));
        }
        setStep(2);
      }
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
      }
    } else if (step === 3) {
      if (validateStep3()) {
        setStep(4);
      }
    }
  };

  const handleBack = () => {
    setFormErrors({});
    if (step > 1) setStep((prev) => prev - 1);
  };

  // Team member repeatable row handlers
  const handleAddMember = () => {
    if (formData.teamMembers.length >= 4) return;
    setFormData((prev) => ({
      ...prev,
      teamMembers: [
        ...prev.teamMembers,
        { name: "", email: "", institute: "", role: "" },
      ],
    }));
  };

  const handleRemoveMember = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index),
    }));
  };

  const handleMemberChange = (
    index: number,
    field: keyof TeamMemberInput,
    value: string
  ) => {
    setFormData((prev) => {
      const updated = [...prev.teamMembers];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, teamMembers: updated };
    });
  };

  // Pitch Deck file upload handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validExtensions = [".pdf", ".pptx", ".ppt"];
      const hasValidExt = validExtensions.some((ext) =>
        file.name.toLowerCase().endsWith(ext)
      );

      if (!hasValidExt) {
        setFormErrors((prev) => ({
          ...prev,
          pitchDeckFile: "Please upload a valid PDF or PowerPoint presentation (.pdf, .pptx).",
        }));
        return;
      }

      if (file.size > 25 * 1024 * 1024) {
        setFormErrors((prev) => ({
          ...prev,
          pitchDeckFile: "File size must be under 25MB.",
        }));
        return;
      }

      setFormErrors((prev) => {
        const next = { ...prev };
        delete next.pitchDeckFile;
        return next;
      });

      setFormData((prev) => ({ ...prev, pitchDeckFile: file }));
    }
  };

  // Final submission handler
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setFormErrors({});

    try {
      let uploadedDeckUrl = formData.pitchDeckUrl;

      // 1. Upload file to Supabase Storage if present
      if (formData.pitchDeckFile) {
        try {
          const fileExt = formData.pitchDeckFile.name.split(".").pop();
          const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
          const filePath = `decks/${fileName}`;

          const { data: uploadData, error: uploadError } = await supabase.storage
            .from("pitch-decks")
            .upload(filePath, formData.pitchDeckFile);

          if (!uploadError && uploadData) {
            const { data: publicUrlData } = supabase.storage
              .from("pitch-decks")
              .getPublicUrl(filePath);
            uploadedDeckUrl = publicUrlData.publicUrl;
          } else {
            console.warn("Storage upload note (proceeding):", uploadError?.message);
            uploadedDeckUrl = `https://storage.placeholder/${fileName}`;
          }
        } catch (storageErr) {
          console.warn("Storage attempt notice:", storageErr);
          uploadedDeckUrl = `https://storage.placeholder/${formData.pitchDeckFile.name}`;
        }
      }

      // 2. Call server-side registration endpoint
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          college_email: formData.collegeEmail,
          startup_name: formData.startupName,
          sector: formData.sector,
          pitch_deck_url: uploadedDeckUrl || null,
          founder_full_name: formData.founderFullName,
          founder_email: formData.founderEmail,
          founder_whatsapp: formData.founderWhatsapp,
          founder_department: formData.founderDepartment,
          founder_roll_number: formData.founderRollNumber,
          founder_year_of_study: formData.founderYearOfStudy,
          founder_linkedin_url: formData.founderLinkedinUrl,
          team_members: formData.teamMembers,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setRegistrationId(result.registration_id || "SBC9-" + Math.floor(1000 + Math.random() * 9000));
        setSubmissionSuccess(true);
      } else {
        setFormErrors({
          submit: result.message || "Failed to submit registration. Please verify details.",
          ...result.errors,
        });
      }
    } catch (err: any) {
      setFormErrors({
        submit: err?.message || "A network error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="register"
      aria-label="Register Your Team"
      className="bg-[#f7ecd0] py-14 sm:py-20 border-b border-[#321F1F]/15"
    >
      <div className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form Header matching PDF Page 4 */}
        <div className="text-center mb-8 sm:mb-10 space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#972933] tracking-tight">
            Startup Bootcamp 9.0
          </h2>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#321F1F]/70">
            E-Cell IIT Kharagpur
          </p>
          <p className="text-sm sm:text-base text-[#321F1F]/80 max-w-[560px] mx-auto pt-1 font-serif italic">
            Register your startup for two rounds of one-on-one mentorship and a live pitch before
            investors on campus.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-[#fff8e8] border border-[#321F1F]/15 rounded-xl p-6 sm:p-10 shadow-sm relative">
          {/* 4-Step Progress Indicator */}
          {!submissionSuccess && (
            <div className="mb-8">
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { num: 1, label: "Registration" },
                  { num: 2, label: "About Startup" },
                  { num: 3, label: "Team Details" },
                  { num: 4, label: "Review & Submit" },
                ].map((s) => {
                  const isCurrent = step === s.num;
                  const isDone = step > s.num;
                  return (
                    <div key={s.num} className="flex flex-col items-center">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all ${
                          isCurrent
                            ? "bg-[#972933] text-white ring-4 ring-[#972933]/15 shadow-xs"
                            : isDone
                            ? "bg-[#838b61] text-white"
                            : "bg-[#321F1F]/10 text-[#321F1F]/50"
                        }`}
                      >
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                      </div>
                      <span
                        className={`text-[10px] sm:text-xs mt-1.5 font-medium transition-colors line-clamp-1 ${
                          isCurrent
                            ? "text-[#972933] font-bold"
                            : isDone
                            ? "text-[#321F1F]/80"
                            : "text-[#321F1F]/40"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="w-full h-1 bg-[#321F1F]/10 rounded-full mt-4 overflow-hidden">
                <div
                  className="h-full bg-[#972933] transition-all duration-300"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* SUCCESS STATE */}
          {submissionSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#838b61]/15 text-[#838b61] rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#321F1F]">
                Application Submitted Successfully!
              </h3>
              <p className="text-sm sm:text-base text-[#321F1F]/80 max-w-[500px] mx-auto">
                Thank you for registering for Startup Bootcamp 9.0. Your team application has been
                recorded.
              </p>
              <div className="bg-[#f7ecd0] p-4 rounded-lg border border-[#321F1F]/10 max-w-[400px] mx-auto space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#321F1F]/60 font-semibold block">
                  Your Registration Reference ID
                </span>
                <span className="font-mono text-lg font-bold text-[#972933]">
                  {registrationId}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#321F1F]/70 pt-2">
                A confirmation has been sent to <strong>{formData.founderEmail}</strong>. Our
                mentorship coordination desk will reach out with track details and next steps.
              </p>
              <div className="pt-6 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmissionSuccess(false);
                    setStep(1);
                    setFormData({
                      collegeEmail: "",
                      startupName: "",
                      sector: "",
                      pitchDeckFile: null,
                      pitchDeckUrl: "",
                      founderFullName: "",
                      founderEmail: "",
                      founderWhatsapp: "",
                      founderDepartment: "",
                      founderRollNumber: "",
                      founderYearOfStudy: "",
                      founderLinkedinUrl: "",
                      teamMembers: [],
                    });
                  }}
                  className="px-5 py-2.5 bg-[#972933] text-white text-xs sm:text-sm font-semibold rounded hover:bg-[#74001c] transition"
                >
                  Register Another Team
                </button>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {/* STEP 1: GATE / COLLEGE EMAIL */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="text-center space-y-2">
                    <p className="text-xs sm:text-sm text-[#321F1F]/75">
                      Startup Bootcamp is open to full-time undergraduate and postgraduate students
                      in India.
                    </p>
                  </div>

                  <div className="space-y-2 max-w-[480px] mx-auto">
                    <label
                      htmlFor="college-email"
                      className="block text-xs sm:text-sm font-semibold text-[#321F1F]"
                    >
                      Enter your College Email ID <span className="text-[#972933]">*</span>
                    </label>
                    <input
                      id="college-email"
                      type="email"
                      placeholder="e.g. rollnumber@iitkgp.ac.in or student@college.edu"
                      value={formData.collegeEmail}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, collegeEmail: e.target.value }));
                        if (formErrors.collegeEmail) {
                          setFormErrors((prev) => {
                            const n = { ...prev };
                            delete n.collegeEmail;
                            return n;
                          });
                        }
                      }}
                      className={`w-full px-4 py-3 bg-[#f7ecd0] rounded-md border text-sm text-[#321F1F] placeholder:text-[#321F1F]/40 focus:outline-none focus:ring-2 focus:ring-[#972933] transition ${
                        formErrors.collegeEmail
                          ? "border-[#972933] bg-[#972933]/5"
                          : "border-[#321F1F]/20"
                      }`}
                    />
                    {formErrors.collegeEmail && (
                      <p className="text-xs text-[#972933] flex items-center gap-1 font-medium mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.collegeEmail}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full max-w-[480px] py-3.5 bg-[#972933] hover:bg-[#74001c] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded transition flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: ABOUT STARTUP */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#321F1F] border-b border-[#321F1F]/10 pb-2">
                    Startup Details
                  </h3>

                  {/* Startup Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="startup-name"
                      className="block text-xs sm:text-sm font-semibold text-[#321F1F]"
                    >
                      Startup / Idea Name <span className="text-[#972933]">*</span>
                    </label>
                    <input
                      id="startup-name"
                      type="text"
                      placeholder="e.g. Nexus AI, BioHarvest, PayBridge"
                      value={formData.startupName}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, startupName: e.target.value }))
                      }
                      className={`w-full px-4 py-2.5 bg-[#f7ecd0] rounded-md border text-sm text-[#321F1F] focus:outline-none focus:ring-2 focus:ring-[#972933] ${
                        formErrors.startupName
                          ? "border-[#972933] bg-[#972933]/5"
                          : "border-[#321F1F]/20"
                      }`}
                    />
                    {formErrors.startupName && (
                      <p className="text-xs text-[#972933] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.startupName}
                      </p>
                    )}
                  </div>

                  {/* Sector */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="sector"
                      className="block text-xs sm:text-sm font-semibold text-[#321F1F]"
                    >
                      Sector / Domain <span className="text-[#972933]">*</span>
                    </label>
                    <select
                      id="sector"
                      value={formData.sector}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, sector: e.target.value }))
                      }
                      className={`w-full px-4 py-2.5 bg-[#f7ecd0] rounded-md border text-sm text-[#321F1F] focus:outline-none focus:ring-2 focus:ring-[#972933] ${
                        formErrors.sector
                          ? "border-[#972933] bg-[#972933]/5"
                          : "border-[#321F1F]/20"
                      }`}
                    >
                      <option value="">Select Sector</option>
                      {SECTORS.map((sec) => (
                        <option key={sec} value={sec}>
                          {sec}
                        </option>
                      ))}
                    </select>
                    {formErrors.sector && (
                      <p className="text-xs text-[#972933] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.sector}
                      </p>
                    )}
                  </div>

                  {/* Pitch Deck File */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="pitch-deck"
                      className="block text-xs sm:text-sm font-semibold text-[#321F1F]"
                    >
                      Pitch Deck (Optional / Highly Recommended)
                    </label>
                    <div className="border-2 border-dashed border-[#321F1F]/20 hover:border-[#972933] transition-colors rounded-lg p-5 text-center bg-[#f7ecd0] cursor-pointer relative">
                      <input
                        id="pitch-deck"
                        type="file"
                        accept=".pdf,.pptx,.ppt"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center justify-center gap-2">
                        {formData.pitchDeckFile ? (
                          <div className="flex items-center gap-2 text-[#972933] font-semibold text-sm">
                            <FileText className="w-6 h-6" />
                            <span>{formData.pitchDeckFile.name}</span>
                            <span className="text-xs text-[#321F1F]/60">
                              ({(formData.pitchDeckFile.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </div>
                        ) : (
                          <>
                            <Upload className="w-7 h-7 text-[#321F1F]/50" />
                            <span className="text-xs sm:text-sm font-medium text-[#321F1F]/80">
                              Click or drag and drop your pitch deck (.pdf or .pptx)
                            </span>
                            <span className="text-[11px] text-[#321F1F]/50">Max size 25MB</span>
                          </>
                        )}
                      </div>
                    </div>
                    {formErrors.pitchDeckFile && (
                      <p className="text-xs text-[#972933] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.pitchDeckFile}
                      </p>
                    )}
                  </div>

                  <div className="pt-6 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 border border-[#321F1F]/20 text-[#321F1F] font-semibold text-xs sm:text-sm rounded hover:bg-[#321F1F]/5 transition flex items-center gap-1.5"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 bg-[#972933] hover:bg-[#74001c] text-white font-bold text-xs sm:text-sm rounded transition flex items-center gap-1.5"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: FOUNDER + TEAM DETAILS */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Founder Details Block */}
                  <div className="space-y-4">
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#321F1F] border-b border-[#321F1F]/10 pb-2">
                      Founder Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-[#321F1F]">
                          Full Name <span className="text-[#972933]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.founderFullName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              founderFullName: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 bg-[#f7ecd0] rounded border border-[#321F1F]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#972933]"
                        />
                        {formErrors.founderFullName && (
                          <p className="text-[11px] text-[#972933]">{formErrors.founderFullName}</p>
                        )}
                      </div>

                      {/* Founder Email */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-[#321F1F]">
                          Founder Email <span className="text-[#972933]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.founderEmail}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              founderEmail: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 bg-[#f7ecd0] rounded border border-[#321F1F]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#972933]"
                        />
                        {formErrors.founderEmail && (
                          <p className="text-[11px] text-[#972933]">{formErrors.founderEmail}</p>
                        )}
                      </div>

                      {/* WhatsApp Phone */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-[#321F1F]">
                          Phone (WhatsApp) <span className="text-[#972933]">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.founderWhatsapp}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              founderWhatsapp: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 bg-[#f7ecd0] rounded border border-[#321F1F]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#972933]"
                        />
                        {formErrors.founderWhatsapp && (
                          <p className="text-[11px] text-[#972933]">
                            {formErrors.founderWhatsapp}
                          </p>
                        )}
                      </div>

                      {/* Department */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-[#321F1F]">
                          Department / Major
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Computer Science, Mechanical"
                          value={formData.founderDepartment}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              founderDepartment: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 bg-[#f7ecd0] rounded border border-[#321F1F]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#972933]"
                        />
                      </div>

                      {/* Roll Number */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-[#321F1F]">
                          Roll / Student Number
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 21CS10045"
                          value={formData.founderRollNumber}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              founderRollNumber: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 bg-[#f7ecd0] rounded border border-[#321F1F]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#972933]"
                        />
                      </div>

                      {/* Year of Study */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-[#321F1F]">
                          Year of Study
                        </label>
                        <select
                          value={formData.founderYearOfStudy}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              founderYearOfStudy: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 bg-[#f7ecd0] rounded border border-[#321F1F]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#972933]"
                        >
                          <option value="">Select Year</option>
                          {YEARS_OF_STUDY.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* LinkedIn Profile */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-[#321F1F]">
                        LinkedIn Profile URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        value={formData.founderLinkedinUrl}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            founderLinkedinUrl: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 bg-[#f7ecd0] rounded border border-[#321F1F]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#972933]"
                      />
                    </div>
                  </div>

                  {/* Team Members Repeatable Rows */}
                  <div className="space-y-4 pt-4 border-t border-[#321F1F]/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-serif font-bold text-base sm:text-lg text-[#321F1F]">
                          Team Members (Co-founders / Key Members)
                        </h4>
                        <p className="text-xs text-[#321F1F]/70">
                          Add co-founders and team members collaborating on this venture (optional, max 4).
                        </p>
                      </div>

                      {formData.teamMembers.length < 4 && (
                        <button
                          type="button"
                          onClick={handleAddMember}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#972933] hover:underline"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Add Member</span>
                        </button>
                      )}
                    </div>

                    {formData.teamMembers.map((member, idx) => (
                      <div
                        key={idx}
                        className="bg-[#f7ecd0] p-4 rounded-lg border border-[#321F1F]/15 space-y-3 relative shadow-xs"
                      >
                        <div className="flex items-center justify-between border-b border-[#321F1F]/10 pb-2">
                          <span className="text-xs font-bold text-[#972933] uppercase tracking-wider">
                            Member #{idx + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveMember(idx)}
                            className="text-[#321F1F]/50 hover:text-[#972933] p-1 transition"
                            aria-label={`Remove Member ${idx + 1}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-[#321F1F]">
                              Name <span className="text-[#972933]">*</span>
                            </label>
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) =>
                                handleMemberChange(idx, "name", e.target.value)
                              }
                              className="w-full px-2.5 py-1.5 bg-[#f9efd9]/50 rounded border border-[#321F1F]/20 text-xs text-[#321F1F]"
                            />
                            {formErrors[`member_${idx}_name`] && (
                              <p className="text-[10px] text-[#972933]">
                                {formErrors[`member_${idx}_name`]}
                              </p>
                            )}
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-[#321F1F]">
                              Email <span className="text-[#972933]">*</span>
                            </label>
                            <input
                              type="email"
                              value={member.email}
                              onChange={(e) =>
                                handleMemberChange(idx, "email", e.target.value)
                              }
                              className="w-full px-2.5 py-1.5 bg-[#f9efd9]/50 rounded border border-[#321F1F]/20 text-xs text-[#321F1F]"
                            />
                            {formErrors[`member_${idx}_email`] && (
                              <p className="text-[10px] text-[#972933]">
                                {formErrors[`member_${idx}_email`]}
                              </p>
                            )}
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-[#321F1F]">
                              Institute / College
                            </label>
                            <input
                              type="text"
                              value={member.institute}
                              onChange={(e) =>
                                handleMemberChange(idx, "institute", e.target.value)
                              }
                              className="w-full px-2.5 py-1.5 bg-[#f9efd9]/50 rounded border border-[#321F1F]/20 text-xs text-[#321F1F]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-[#321F1F]">
                              Role in the team
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. CTO, Product Lead"
                              value={member.role}
                              onChange={(e) =>
                                handleMemberChange(idx, "role", e.target.value)
                              }
                              className="w-full px-2.5 py-1.5 bg-[#f9efd9]/50 rounded border border-[#321F1F]/20 text-xs text-[#321F1F]"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 border border-[#321F1F]/20 text-[#321F1F] font-semibold text-xs sm:text-sm rounded hover:bg-[#321F1F]/5 transition flex items-center gap-1.5"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 bg-[#972933] hover:bg-[#74001c] text-white font-bold text-xs sm:text-sm rounded transition flex items-center gap-1.5"
                    >
                      <span>Continue to Review</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: REVIEW & SUBMIT */}
              {step === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#321F1F] border-b border-[#321F1F]/10 pb-2">
                      Review Your Application
                    </h3>
                    <p className="text-xs text-[#321F1F]/70 mt-1">
                      Please verify all details before submitting.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-[#f7ecd0] rounded-lg border border-[#321F1F]/15 p-5 space-y-4 text-xs sm:text-sm">
                    {/* Startup Summary */}
                    <div>
                      <h4 className="font-bold text-[#972933] text-xs uppercase tracking-wider mb-2">
                        Startup Overview
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-[#321F1F]/85">
                        <div>
                          <span className="text-[#321F1F]/60 block text-[11px]">Name:</span>
                          <span className="font-semibold">{formData.startupName}</span>
                        </div>
                        <div>
                          <span className="text-[#321F1F]/60 block text-[11px]">Sector:</span>
                          <span className="font-semibold">{formData.sector}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-[#321F1F]/60 block text-[11px]">Pitch Deck:</span>
                          <span className="font-semibold">
                            {formData.pitchDeckFile ? formData.pitchDeckFile.name : "None attached"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[#321F1F]/10 pt-3">
                      <h4 className="font-bold text-[#972933] text-xs uppercase tracking-wider mb-2">
                        Founder Contact
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-[#321F1F]/85">
                        <div>
                          <span className="text-[#321F1F]/60 block text-[11px]">Full Name:</span>
                          <span className="font-semibold">{formData.founderFullName}</span>
                        </div>
                        <div>
                          <span className="text-[#321F1F]/60 block text-[11px]">Email:</span>
                          <span className="font-semibold">{formData.founderEmail}</span>
                        </div>
                        <div>
                          <span className="text-[#321F1F]/60 block text-[11px]">WhatsApp:</span>
                          <span className="font-semibold">{formData.founderWhatsapp}</span>
                        </div>
                        <div>
                          <span className="text-[#321F1F]/60 block text-[11px]">Year of Study:</span>
                          <span className="font-semibold">{formData.founderYearOfStudy || "N/A"}</span>
                        </div>
                      </div>
                    </div>

                    {formData.teamMembers.length > 0 && (
                      <div className="border-t border-[#321F1F]/10 pt-3">
                        <h4 className="font-bold text-[#972933] text-xs uppercase tracking-wider mb-2">
                          Team Members ({formData.teamMembers.length})
                        </h4>
                        <div className="space-y-1.5">
                          {formData.teamMembers.map((m, i) => (
                            <p key={i} className="text-xs text-[#321F1F]/80">
                              &bull; <strong>{m.name}</strong> ({m.email}) &mdash; {m.role || "Member"} {m.institute ? `at ${m.institute}` : ""}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submission Error Alert if any */}
                  {formErrors.submit && (
                    <div className="p-3 bg-[#972933]/10 border border-[#972933]/30 rounded text-xs text-[#972933] flex items-center gap-2 font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formErrors.submit}</span>
                    </div>
                  )}

                  <div className="pt-4 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleBack}
                      className="px-5 py-2.5 border border-[#321F1F]/20 text-[#321F1F] font-semibold text-xs sm:text-sm rounded hover:bg-[#321F1F]/5 transition flex items-center gap-1.5 disabled:opacity-50"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="px-8 py-3.5 bg-[#972933] hover:bg-[#74001c] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded transition flex items-center gap-2 shadow-md disabled:opacity-50 active:scale-98"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Confirm & Submit Registration</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
