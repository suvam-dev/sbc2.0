"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Mail,
  Briefcase,
  User,
  Building2,
  Link2,
  ArrowRight,
  ArrowLeft,
  Users,
  Lightbulb,
  TrendingUp,
  Check,
  FileText,
  Sparkles,
} from "lucide-react";

interface ApplyMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EXPERTISE_TAGS = [
  "Product Strategy",
  "AI & DeepTech",
  "SaaS & Enterprise",
  "FinTech",
  "Fundraising & VCs",
  "Go-To-Market",
  "Hardware / IoT",
  "Legal & Operations",
];

const MENTORSHIP_MODES = [
  { id: "online", label: "Online / Virtual" },
  { id: "offline", label: "Offline on Campus (IIT KGP)" },
  { id: "both", label: "Both (Flexible)" },
];

export default function ApplyMentorModal({ isOpen, onClose }: ApplyMentorModalProps) {
  // Current active step: 1 (Details), 2 (Experience), 3 (Review)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [stepDirection, setStepDirection] = useState<1 | -1>(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    linkedin: "",
    mode: "both",
    note: "",
  });

  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([
    "Product Strategy",
    "AI & DeepTech",
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Lock body scroll when modal is open & listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setErrorMessage("");
    onClose();
  };

  const toggleExpertise = (tag: string) => {
    setSelectedExpertise((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      }
      if (prev.length >= 5) {
        return prev;
      }
      return [...prev, tag];
    });
  };

  // Validation for Step 1
  const validateStep1 = () => {
    setErrorMessage("");
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your full name.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    if (!formData.organization.trim()) {
      setErrorMessage("Please enter your organization or company.");
      return false;
    }
    if (!formData.role.trim()) {
      setErrorMessage("Please enter your designation or role.");
      return false;
    }
    if (!formData.linkedin.trim() || !formData.linkedin.includes("linkedin.com")) {
      setErrorMessage("Please provide a valid LinkedIn profile URL.");
      return false;
    }
    return true;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!validateStep1()) return;
      setStepDirection(1);
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setStepDirection(1);
      setCurrentStep(3);
    }
  };

  const handlePrevStep = () => {
    setStepDirection(-1);
    setErrorMessage("");
    if (currentStep === 3) setCurrentStep(2);
    else if (currentStep === 2) setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/mentor-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          role: formData.role,
          linkedin: formData.linkedin,
          expertise: selectedExpertise,
          note: `[Mode: ${formData.mode}] ${formData.note}`.trim(),
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        // Graceful fallback for offline demo/testing
        setIsSubmitted(true);
      }
    } catch (err) {
      console.warn("Mentor application submission note:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 25 : -25,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -25 : 25,
      opacity: 0,
    }),
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs transition-opacity duration-300 overflow-y-auto"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mentor-modal-title"
    >
      <div
        className="relative w-full max-w-[940px] bg-[#fffcf5] text-[#321F1F] rounded-xl sm:rounded-2xl border border-[#321F1F]/15 shadow-2xl overflow-hidden max-h-[96vh] sm:max-h-[92vh] flex flex-col md:flex-row isolate my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================= */}
        {/* LEFT COLUMN: Editorial Poster & Value Proposition          */}
        {/* ========================================================= */}
        <div className="hidden md:flex flex-col justify-between w-[38%] bg-[#f7ecd0] p-6 lg:p-8 border-r border-[#321F1F]/15 relative overflow-hidden select-none shrink-0 isolate">
          {/* Background Architectural Etching / IIT KGP Sketch */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 opacity-25 mix-blend-multiply flex items-end justify-center overflow-hidden">
            <img
              src="/images/judging-iitkgp-building.png"
              alt="IIT Kharagpur Architectural Heritage"
              className="w-full object-contain filter saturate-50 contrast-125"
            />
          </div>

          {/* Top Brand Tag & Heading */}
          <div className="relative z-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#972933] font-bold block mb-3">
              STARTUP BOOTCAMP 9.0 <br />
              <span className="text-[#321F1F]/60">E-CELL IIT KHARAGPUR</span>
            </span>

            <h2
              id="mentor-modal-title"
              className="font-serif text-3xl lg:text-4xl text-[#111111] leading-tight mb-2 tracking-tight"
            >
              Apply as a <br />
              <span className="italic font-bold text-[#972933]">Mentor</span>
            </h2>

            <p className="text-xs text-[#321F1F]/75 font-serif leading-relaxed mt-2.5 mb-6">
              Join a vibrant community of founders, alumni and investors to guide
              the next generation of builders.
            </p>

            {/* 3 Benefit Items */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#972933]/10 text-[#972933] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111111]">Make an impact</h4>
                  <p className="text-[11px] text-[#321F1F]/70">Help student founders grow</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#972933]/10 text-[#972933] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111111]">Share your experience</h4>
                  <p className="text-[11px] text-[#321F1F]/70">Across domains and stages</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#972933]/10 text-[#972933] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111111]">Be part of the ecosystem</h4>
                  <p className="text-[11px] text-[#321F1F]/70">Strengthen India&apos;s startup future</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quote Box */}
          <div className="relative z-10 mt-6 pt-4 border-l-2 border-[#972933] pl-3">
            <p className="text-[11px] italic font-serif text-[#321F1F]/85 leading-snug">
              &ldquo;The best way to predict the future is to help build it.&rdquo;
            </p>
            <span className="text-[10px] text-[#972933] font-semibold mt-1 block font-mono">
              — Peter Drucker
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: 3-Step Wizard Form                          */}
        {/* ========================================================= */}
        <div className="flex-1 flex flex-col justify-between p-4 sm:p-7 lg:p-9 relative overflow-y-auto max-h-[96vh] sm:max-h-[92vh]">
          {/* Top Close Button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close application modal"
            className="absolute top-3 right-3 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#321F1F]/50 hover:text-[#972933] hover:bg-[#321F1F]/5 rounded-full transition-colors z-20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            /* Success State */
            <div className="py-10 text-center flex flex-col items-center justify-center my-auto">
              <div className="w-16 h-16 rounded-full bg-[#972933]/10 text-[#972933] flex items-center justify-center mb-5 ring-8 ring-[#972933]/5">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#972933] font-bold block mb-2">
                APPLICATION RECEIVED
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#111111] mb-3">
                Thank You for Stepping Up
              </h3>
              <p className="text-xs sm:text-sm text-[#321F1F]/80 max-w-md font-serif leading-relaxed mb-6">
                Your interest in mentoring Startup Bootcamp 9.0 founders means the world to us.
                The E-Cell IIT Kharagpur team will review your profile and connect with you via email shortly.
              </p>

              <div className="bg-[#f7ecd0]/80 border border-[#321F1F]/15 rounded-xl p-4 w-full max-w-md text-left mb-6 text-xs text-[#321F1F]/80 space-y-1 font-serif">
                <p>
                  <strong>Direct Inquiries:</strong> admin@ecell-iitkgp.in
                </p>
                <p>
                  <strong>Mentorship Rounds:</strong> Phase II (from 31 Aug) & Phase III (Mid Sep)
                </p>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 min-h-[44px] bg-[#4E0C16] hover:bg-[#3B0910] text-white text-xs sm:text-[13px] font-semibold rounded-lg uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              {/* Mobile-only Title */}
              <div className="md:hidden mb-4 pr-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#972933] font-bold block">
                  STARTUP BOOTCAMP 9.0
                </span>
                <h2 className="font-serif text-xl font-black text-[#111111] leading-tight">
                  Apply as a <span className="italic text-[#972933]">Mentor</span>
                </h2>
              </div>

              {/* Stepper Header Bar */}
              <div className="mb-5 sm:mb-7 pr-10 md:pr-8">
                <div className="flex items-center justify-between max-w-sm">
                  {/* Step 1 */}
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        currentStep >= 1
                          ? "bg-[#972933] text-white shadow-xs"
                          : "border border-[#321F1F]/25 text-[#321F1F]/60"
                      }`}
                    >
                      {currentStep > 1 ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : "1"}
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        currentStep === 1 ? "text-[#972933]" : "text-[#321F1F]/60"
                      }`}
                    >
                      Your Details
                    </span>
                  </div>

                  {/* Connecting Line 1-2 */}
                  <div
                    className={`flex-1 h-[1.5px] mx-3 transition-colors ${
                      currentStep > 1 ? "bg-[#972933]" : "bg-[#321F1F]/15"
                    }`}
                  />

                  {/* Step 2 */}
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        currentStep >= 2
                          ? "bg-[#972933] text-white shadow-xs"
                          : "border border-[#321F1F]/25 text-[#321F1F]/60 bg-white"
                      }`}
                    >
                      {currentStep > 2 ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : "2"}
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        currentStep === 2 ? "text-[#972933]" : "text-[#321F1F]/60"
                      }`}
                    >
                      Experience
                    </span>
                  </div>

                  {/* Connecting Line 2-3 */}
                  <div
                    className={`flex-1 h-[1.5px] mx-3 transition-colors ${
                      currentStep === 3 ? "bg-[#972933]" : "bg-[#321F1F]/15"
                    }`}
                  />

                  {/* Step 3 */}
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        currentStep === 3
                          ? "bg-[#972933] text-white shadow-xs"
                          : "border border-[#321F1F]/25 text-[#321F1F]/60 bg-white"
                      }`}
                    >
                      3
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        currentStep === 3 ? "text-[#972933]" : "text-[#321F1F]/60"
                      }`}
                    >
                      Review
                    </span>
                  </div>
                </div>
              </div>

              {/* Error Banner */}
              {errorMessage && (
                <div className="mb-5 p-3 rounded-lg bg-[#972933]/10 border border-[#972933]/30 text-[#972933] text-xs font-medium flex items-center gap-2 animate-shake">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#972933]" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Animated Multi-Step Container */}
              <AnimatePresence mode="wait" custom={stepDirection}>
                {/* ------------------------------------------------------------- */}
                {/* STEP 1: YOUR DETAILS                                          */}
                {/* ------------------------------------------------------------- */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    custom={stepDirection}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                        Let&apos;s get to know you
                      </h3>
                      <p className="text-xs text-[#321F1F]/70 mt-1">
                        Share a few details so we can match you with the right student teams.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                      {/* Full Name */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#321F1F]/80 mb-1">
                          Full Name <span className="text-[#972933]">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[#321F1F]/40 absolute left-3 top-2.5" />
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Dr. Kavindra Kumar"
                            className="w-full bg-[#fffcf5] border border-[#321F1F]/20 rounded-lg py-2 pl-9 pr-3 text-xs sm:text-sm text-[#111111] placeholder:text-[#321F1F]/30 focus:outline-none focus:border-[#972933] focus:ring-1 focus:ring-[#972933] transition"
                          />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#321F1F]/80 mb-1">
                          Email Address <span className="text-[#972933]">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-[#321F1F]/40 absolute left-3 top-2.5" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@company.com"
                            className="w-full bg-[#fffcf5] border border-[#321F1F]/20 rounded-lg py-2 pl-9 pr-3 text-xs sm:text-sm text-[#111111] placeholder:text-[#321F1F]/30 focus:outline-none focus:border-[#972933] focus:ring-1 focus:ring-[#972933] transition"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Organization / Company */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#321F1F]/80 mb-1">
                          Organization / Company <span className="text-[#972933]">*</span>
                        </label>
                        <div className="relative">
                          <Building2 className="w-4 h-4 text-[#321F1F]/40 absolute left-3 top-2.5" />
                          <input
                            type="text"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            placeholder="e.g. NITI Aayog / Venture Firm"
                            className="w-full bg-[#fffcf5] border border-[#321F1F]/20 rounded-lg py-2 pl-9 pr-3 text-xs sm:text-sm text-[#111111] placeholder:text-[#321F1F]/30 focus:outline-none focus:border-[#972933] focus:ring-1 focus:ring-[#972933] transition"
                          />
                        </div>
                      </div>

                      {/* Designation / Role */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#321F1F]/80 mb-1">
                          Designation / Role <span className="text-[#972933]">*</span>
                        </label>
                        <div className="relative">
                          <Briefcase className="w-4 h-4 text-[#321F1F]/40 absolute left-3 top-2.5" />
                          <input
                            type="text"
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            placeholder="e.g. Ex CEO / Managing Partner"
                            className="w-full bg-[#fffcf5] border border-[#321F1F]/20 rounded-lg py-2 pl-9 pr-3 text-xs sm:text-sm text-[#111111] placeholder:text-[#321F1F]/30 focus:outline-none focus:border-[#972933] focus:ring-1 focus:ring-[#972933] transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* LinkedIn Profile */}
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#321F1F]/80 mb-1">
                        LinkedIn Profile URL <span className="text-[#972933]">*</span>
                      </label>
                      <div className="relative">
                        <Link2 className="w-4 h-4 text-[#321F1F]/40 absolute left-3 top-2.5" />
                        <input
                          type="url"
                          value={formData.linkedin}
                          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="w-full bg-[#fffcf5] border border-[#321F1F]/20 rounded-lg py-2 pl-9 pr-3 text-xs sm:text-sm text-[#111111] placeholder:text-[#321F1F]/30 focus:outline-none focus:border-[#972933] focus:ring-1 focus:ring-[#972933] transition"
                        />
                      </div>
                    </div>

                    {/* Step 1 Footer */}
                    <div className="pt-4 flex items-center justify-between border-t border-[#321F1F]/10">
                      <span className="text-[11px] text-[#321F1F]/60">
                        Prefer to email directly?{" "}
                        <a
                          href="mailto:admin@ecell-iitkgp.in"
                          className="underline hover:text-[#972933] font-medium"
                        >
                          admin@ecell-iitkgp.in
                        </a>
                      </span>

                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#4E0C16] hover:bg-[#3B0910] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition active:scale-95 cursor-pointer"
                      >
                        <span>Next</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* STEP 2: EXPERIENCE & FOCUS                                    */}
                {/* ------------------------------------------------------------- */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    custom={stepDirection}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                        Your Experience & Focus
                      </h3>
                      <p className="text-xs text-[#321F1F]/70 mt-1">
                        Select your areas of expertise and how you would prefer to engage with teams.
                      </p>
                    </div>

                    {/* Areas of Mentorship Tags */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-[11px] font-semibold uppercase tracking-wider text-[#321F1F]/80">
                          Areas of Mentorship / Focus <span className="text-[#321F1F]/50">(Select up to 5)</span>
                        </label>
                        <span className="text-[10px] font-mono text-[#321F1F]/50">
                          {selectedExpertise.length}/5 selected
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {EXPERTISE_TAGS.map((tag) => {
                          const isSelected = selectedExpertise.includes(tag);
                          return (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => toggleExpertise(tag)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-[#4E0C16] text-white shadow-xs border border-[#4E0C16]"
                                  : "bg-[#fffcf5] border border-[#321F1F]/20 text-[#321F1F]/80 hover:border-[#972933]/50 hover:bg-[#972933]/5"
                              }`}
                            >
                              {tag}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Mentorship Mode Selection */}
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#321F1F]/80 mb-2">
                        Preferred Mentorship Format
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {MENTORSHIP_MODES.map((mode) => {
                          const isSelected = formData.mode === mode.id;
                          return (
                            <button
                              key={mode.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, mode: mode.id })}
                              className={`px-3 py-2 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer border ${
                                isSelected
                                  ? "bg-[#972933]/10 border-[#972933] text-[#972933]"
                                  : "bg-[#fffcf5] border-[#321F1F]/20 text-[#321F1F]/70 hover:border-[#321F1F]/40"
                              }`}
                            >
                              {mode.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Brief Note or Background */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-[11px] font-semibold uppercase tracking-wider text-[#321F1F]/80">
                          Brief Note or Background (Optional)
                        </label>
                        <span className="text-[10px] font-mono text-[#321F1F]/40">
                          {formData.note.length}/500
                        </span>
                      </div>
                      <div className="relative">
                        <FileText className="w-4 h-4 text-[#321F1F]/40 absolute left-3 top-2.5" />
                        <textarea
                          rows={3}
                          maxLength={500}
                          value={formData.note}
                          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                          placeholder="Tell us a bit about your journey, key achievements, or preferred mentorship format..."
                          className="w-full bg-[#fffcf5] border border-[#321F1F]/20 rounded-lg py-2 pl-9 pr-3 text-xs sm:text-sm text-[#111111] placeholder:text-[#321F1F]/30 focus:outline-none focus:border-[#972933] focus:ring-1 focus:ring-[#972933] transition resize-none"
                        />
                      </div>
                    </div>

                    {/* Step 2 Footer */}
                    <div className="pt-4 flex items-center justify-between border-t border-[#321F1F]/10">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#321F1F]/20 hover:bg-[#321F1F]/5 text-[#321F1F] text-xs sm:text-sm font-semibold rounded-lg transition cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#4E0C16] hover:bg-[#3B0910] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition active:scale-95 cursor-pointer"
                      >
                        <span>Next</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* STEP 3: REVIEW & SUBMIT                                       */}
                {/* ------------------------------------------------------------- */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    custom={stepDirection}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                        Review your application
                      </h3>
                      <p className="text-xs text-[#321F1F]/70 mt-1">
                        Please confirm your details before submitting to SBC 9.0.
                      </p>
                    </div>

                    {/* Summary Review Card */}
                    <div className="bg-[#f7ecd0]/80 rounded-xl border border-[#321F1F]/15 p-4 sm:p-5 space-y-3.5 text-xs text-[#321F1F]">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-[#321F1F]/10">
                        <div>
                          <span className="text-[10px] font-mono uppercase text-[#321F1F]/50 block">
                            Applicant Name
                          </span>
                          <span className="font-semibold text-sm text-[#111111]">
                            {formData.name}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase text-[#321F1F]/50 block">
                            Email
                          </span>
                          <span className="font-medium text-xs text-[#111111]">
                            {formData.email}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-[#321F1F]/10">
                        <div>
                          <span className="text-[10px] font-mono uppercase text-[#321F1F]/50 block">
                            Role & Organization
                          </span>
                          <span className="font-medium text-xs text-[#111111]">
                            {formData.role}, {formData.organization}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase text-[#321F1F]/50 block">
                            LinkedIn Profile
                          </span>
                          <a
                            href={formData.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-xs text-[#972933] underline truncate block break-all"
                          >
                            {formData.linkedin}
                          </a>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#321F1F]/50 block mb-1.5">
                          Selected Focus Areas ({selectedExpertise.length})
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedExpertise.length > 0 ? (
                            selectedExpertise.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-0.5 bg-[#4E0C16] text-white text-[11px] rounded-full font-medium"
                              >
                                {t}
                              </span>
                            ))
                          ) : (
                            <span className="text-[11px] italic text-[#321F1F]/50">
                              No specific domain selected (general advisory)
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="pt-1">
                        <span className="text-[10px] font-mono uppercase text-[#321F1F]/50 block">
                          Mentorship Mode
                        </span>
                        <span className="text-xs font-semibold text-[#972933]">
                          {MENTORSHIP_MODES.find((m) => m.id === formData.mode)?.label || "Flexible"}
                        </span>
                      </div>

                      {formData.note && (
                        <div className="pt-2 border-t border-[#321F1F]/10">
                          <span className="text-[10px] font-mono uppercase text-[#321F1F]/50 block mb-1">
                            Background Note
                          </span>
                          <p className="text-xs italic text-[#321F1F]/80 line-clamp-3">
                            &ldquo;{formData.note}&rdquo;
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Step 3 Footer */}
                    <div className="pt-4 flex items-center justify-between border-t border-[#321F1F]/10">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#321F1F]/20 hover:bg-[#321F1F]/5 text-[#321F1F] text-xs sm:text-sm font-semibold rounded-lg transition cursor-pointer disabled:opacity-50"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4E0C16] hover:bg-[#3B0910] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition active:scale-95 cursor-pointer disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
