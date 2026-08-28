"use client";

import React, { useState, useMemo } from "react";

const INDIAN_COLLEGES = [
  "Indian Institute of Technology (IIT) Bombay - Mumbai, Maharashtra",
  "Indian Institute of Technology (IIT) Delhi - New Delhi",
  "Indian Institute of Technology (IIT) Madras - Chennai, Tamil Nadu",
  "Indian Institute of Technology (IIT) Kharagpur - Kharagpur, West Bengal",
  "Indian Institute of Technology (IIT) Kanpur - Kanpur, Uttar Pradesh",
  "Indian Institute of Technology (IIT) Roorkee - Roorkee, Uttarakhand",
  "Indian Institute of Technology (IIT) Guwahati - Guwahati, Assam",
  "Indian Institute of Management (IIM) Ahmedabad - Ahmedabad, Gujarat",
  "Indian Institute of Management (IIM) Bangalore - Bangalore, Karnataka",
  "Indian Institute of Management (IIM) Calcutta - Kolkata, West Bengal",
  "Indian Institute of Management (IIM) Lucknow - Lucknow, Uttar Pradesh",
  "Indian Institute of Management (IIM) Kozhikode - Kozhikode, Kerala",
  "Indian Institute of Management (IIM) Indore - Indore, Madhya Pradesh",
  "Indian Institute of Science (IISc) - Bangalore, Karnataka",
  "BITS Pilani - Pilani, Rajasthan",
  "BITS Pilani - Goa Campus",
  "BITS Pilani - Hyderabad Campus",
  "Delhi University (DU) - New Delhi",
  "St. Stephen's College - Delhi University, New Delhi",
  "Shri Ram College of Commerce (SRCC) - Delhi University, New Delhi",
  "Hindu College - Delhi University, New Delhi",
  "Miranda House - Delhi University, New Delhi",
  "Lady Shri Ram College for Women (LSR) - Delhi University, New Delhi",
  "Hansraj College - Delhi University, New Delhi",
  "Kirori Mal College - Delhi University, New Delhi",
  "Ramjas College - Delhi University, New Delhi",
  "Faculty of Management Studies (FMS) - Delhi University, New Delhi",
  "Jawaharlal Nehru University (JNU) - New Delhi",
  "Jamia Millia Islamia - New Delhi",
  "National Institute of Design (NID) - Ahmedabad, Gujarat",
  "National Institute of Fashion Technology (NIFT) - New Delhi",
  "XLRI - Xavier School of Management - Jamshedpur, Jharkhand",
  "SPJIMR - Mumbai, Maharashtra",
  "Symbiosis International University - Pune, Maharashtra",
  "NMIMS - Mumbai, Maharashtra",
  "St. Xavier's College - Mumbai, Maharashtra",
  "St. Xavier's College - Kolkata, West Bengal",
  "Presidency University - Kolkata, West Bengal",
  "Jadavpur University - Kolkata, West Bengal",
  "Ashoka University - Sonipat, Haryana",
  "Krea University - Sri City, Andhra Pradesh",
  "Plaksha University - Mohali, Punjab",
  "Shiv Nadar University - Greater Noida, Uttar Pradesh",
  "Manipal Academy of Higher Education (MAHE) - Manipal, Karnataka",
  "Vellore Institute of Technology (VIT) - Vellore, Tamil Nadu",
  "SRM Institute of Science and Technology - Chennai, Tamil Nadu",
  "College of Engineering Guindy (Anna University) - Chennai, Tamil Nadu",
  "National Institute of Technology (NIT) Tiruchirappalli - Tamil Nadu",
  "National Institute of Technology (NIT) Surathkal - Karnataka",
  "National Institute of Technology (NIT) Warangal - Telangana",
  "National Institute of Technology (NIT) Rourkela - Odisha",
  "National Institute of Technology (NIT) Calicut - Kerala",
  "IIIT Hyderabad - Hyderabad, Telangana",
  "IIIT Bangalore - Bangalore, Karnataka",
  "IIIT Delhi - New Delhi",
  "University of Hyderabad - Hyderabad, Telangana",
  "Aligarh Muslim University - Aligarh, Uttar Pradesh",
  "Banaras Hindu University - Varanasi, Uttar Pradesh",
  "Tata Institute of Social Sciences (TISS) - Mumbai, Maharashtra",
  "Loyola College - Chennai, Tamil Nadu",
  "Christ University - Bangalore, Karnataka",
  "Others",
];

export default function Registration() {
  const [currentStage, setCurrentStage] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [collegeQuery, setCollegeQuery] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);
  const [programmeName, setProgrammeName] = useState("");
  const [selectedTrack, setSelectedTrack] = useState<"strategy" | "builder">("strategy");
  const [teamSize, setTeamSize] = useState<number>(3);
  const [member2Email, setMember2Email] = useState("");
  const [member3Email, setMember3Email] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Filter colleges
  const filteredColleges = useMemo(() => {
    if (!collegeQuery) return INDIAN_COLLEGES.slice(0, 8);
    return INDIAN_COLLEGES.filter((col) =>
      col.toLowerCase().includes(collegeQuery.toLowerCase())
    ).slice(0, 10);
  }, [collegeQuery]);

  // Stage 1 -> 2
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid college email address.");
      return;
    }
    setErrorMsg("");
    setCurrentStage(2);
  };

  // Stage 2 -> 3
  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) {
      setErrorMsg("Please enter the complete 6-digit verification code.");
      return;
    }
    setErrorMsg("");
    setCurrentStage(3);
  };

  // Stage 3 -> 4
  const handlePersonalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !phoneNumber || !selectedCollege || !programmeName) {
      setErrorMsg("Please fill in all required profile fields.");
      return;
    }
    setErrorMsg("");
    setCurrentStage(4);
  };

  // Stage 4 -> Finish
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSuccess(true);
  };

  return (
    <section id="register-team" className="bg-white py-14 sm:py-20 border-b border-[#321F1F]/15">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#972933] tracking-tight text-center mb-8">
          Register your team
        </h2>

        <div className="bg-[#fff8e8] border border-[#321F1F]/15 rounded p-6 sm:p-10 shadow-xs">
          {/* Progress Indicators */}
          {!isSuccess && (
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 sm:gap-6">
                {[1, 2, 3, 4].map((stageNum) => {
                  const isActive = currentStage === stageNum;
                  const isCompleted = currentStage > stageNum;
                  return (
                    <div key={stageNum} className="flex items-center gap-2 sm:gap-3">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold transition-colors ${
                          isActive
                            ? "bg-[#972933] text-white ring-4 ring-[#972933]/15"
                            : isCompleted
                            ? "bg-[#838b61] text-white"
                            : "bg-[#321F1F]/10 text-[#321F1F]/50"
                        }`}
                      >
                        {isCompleted ? "✓" : stageNum}
                      </div>
                      {stageNum < 4 && (
                        <div
                          className={`w-6 sm:w-12 h-0.5 ${
                            isCompleted ? "bg-[#838b61]" : "bg-[#321F1F]/15"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Header Graphic Icons */}
          {!isSuccess && (
            <div className="flex items-center justify-center gap-4 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
                className="opacity-40"
              >
                <path
                  d="M18 0.507813V36.5078M0 18.5078L36 18.5078M30.7283 5.78125L5.27248 31.2371M5.27168 5.78125L30.7275 31.2371"
                  stroke="#321F1F"
                  strokeOpacity="0.8"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="54"
                viewBox="0 0 98 82"
                fill="none"
              >
                <rect
                  x="91.0078"
                  y="72.5078"
                  width="2.99972"
                  height="83.9998"
                  transform="rotate(90 91.0078 72.5078)"
                  stroke="#972933"
                />
                <rect x="56.5078" y="62.5078" width="7.5" height="10" stroke="#972933" />
                <rect x="34.0078" y="62.5078" width="7.5" height="10" stroke="#972933" />
                <rect x="41.5078" y="62.5078" width="7.5" height="10" stroke="#972933" />
                <rect x="49.0078" y="62.5078" width="7.5" height="10" stroke="#972933" />
                <rect
                  x="94.5078"
                  y="26.5078"
                  width="6"
                  height="90"
                  transform="rotate(90 94.5078 26.5078)"
                  stroke="#972933"
                />
                <rect x="34.5078" y="41.5078" width="30" height="12" rx="6" stroke="#972933" />
                <path
                  d="M91.0076 26.5056H7.00781L49.0077 1.50781L91.0076 26.5056Z"
                  stroke="#972933"
                />
                <circle cx="49" cy="15.5" r="5" stroke="#972933" />
              </svg>
            </div>
          )}

          {errorMsg && (
            <div className="mb-5 p-3 text-xs sm:text-sm bg-red-50 border border-red-200 text-[#972933] rounded">
              {errorMsg}
            </div>
          )}

          {/* STAGE 1: Email */}
          {currentStage === 1 && !isSuccess && (
            <form onSubmit={handleEmailSubmit} className="space-y-6 text-center">
              <p className="text-xs sm:text-sm text-[#321F1F]/80 max-w-[480px] mx-auto leading-relaxed">
                The Ken&rsquo;s Case Competition is open to full-time undergraduate and
                postgraduate students in India
              </p>

              <div className="max-w-[480px] mx-auto text-left floating-group">
                <input
                  type="email"
                  id="college-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  required
                  className="w-full bg-white border border-[#321F1F]/25 rounded px-3.5 text-sm text-[#321F1F] outline-none focus:border-[#972933] focus:ring-1 focus:ring-[#972933]"
                />
                <label htmlFor="college-email">Enter your College Email ID</label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full max-w-[480px] mx-auto py-3 bg-[#972933] hover:bg-[#74001c] text-white font-semibold text-sm rounded uppercase tracking-wider transition cursor-pointer shadow-xs"
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {/* STAGE 2: OTP */}
          {currentStage === 2 && !isSuccess && (
            <form onSubmit={handleOtpSubmit} className="space-y-6 text-center">
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-[#321F1F] mb-1">
                  Verify your email
                </h3>
                <p className="text-xs sm:text-sm text-[#321F1F]/70">
                  Enter the 6-digit code sent to <strong className="text-[#321F1F]">{email}</strong>
                </p>
              </div>

              {/* 6 Digit OTP inputs */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 max-w-[360px] mx-auto">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => {
                      const val = e.target.value;
                      const nextOtp = [...otp];
                      nextOtp[idx] = val;
                      setOtp(nextOtp);
                      if (val && idx < 5) {
                        const nextEl = document.getElementById(`otp-${idx + 1}`);
                        nextEl?.focus();
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace" && !otp[idx] && idx > 0) {
                        const prevEl = document.getElementById(`otp-${idx - 1}`);
                        prevEl?.focus();
                      }
                    }}
                    className="w-10 h-12 sm:w-12 sm:h-14 text-center font-bold text-lg sm:text-xl bg-white border border-[#321F1F]/30 rounded outline-none focus:border-[#972933] focus:ring-1 focus:ring-[#972933]"
                  />
                ))}
              </div>

              <div className="space-y-2">
                <button
                  type="submit"
                  className="w-full max-w-[480px] mx-auto py-3 bg-[#972933] hover:bg-[#74001c] text-white font-semibold text-sm rounded uppercase tracking-wider transition cursor-pointer"
                >
                  Verify & Proceed
                </button>
                <div>
                  <button
                    type="button"
                    onClick={() => setCurrentStage(1)}
                    className="text-xs text-[#321F1F]/60 hover:text-[#972933] underline cursor-pointer"
                  >
                    Change email address
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* STAGE 3: Personal & College Info */}
          {currentStage === 3 && !isSuccess && (
            <form onSubmit={handlePersonalSubmit} className="space-y-5">
              <div className="text-center mb-6">
                <h3 className="font-bold text-lg sm:text-xl text-[#321F1F]">
                  Tell us about yourself
                </h3>
                <p className="text-xs text-[#321F1F]/70 mt-1">
                  We may contact you by email or phone to confirm these details
                </p>
              </div>

              {/* Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="floating-group">
                  <input
                    type="text"
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder=" "
                    required
                    className="w-full bg-white border border-[#321F1F]/25 rounded px-3.5 text-sm text-[#321F1F] outline-none focus:border-[#972933]"
                  />
                  <label htmlFor="first-name">First Name</label>
                </div>

                <div className="floating-group">
                  <input
                    type="text"
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder=" "
                    required
                    className="w-full bg-white border border-[#321F1F]/25 rounded px-3.5 text-sm text-[#321F1F] outline-none focus:border-[#972933]"
                  />
                  <label htmlFor="last-name">Last Name</label>
                </div>
              </div>

              {/* Phone */}
              <div className="floating-group">
                <input
                  type="tel"
                  id="phone-number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder=" "
                  required
                  className="w-full bg-white border border-[#321F1F]/25 rounded px-3.5 text-sm text-[#321F1F] outline-none focus:border-[#972933]"
                />
                <label htmlFor="phone-number">Phone Number</label>
              </div>

              {/* College Autocomplete */}
              <div className="space-y-1 relative">
                <p className="text-xs text-[#321F1F]/75 font-medium text-center sm:text-left">
                  What is your current educational institution? Select &quot;Others&quot; if not listed
                </p>
                <div className="relative">
                  <input
                    type="text"
                    value={selectedCollege || collegeQuery}
                    onChange={(e) => {
                      setCollegeQuery(e.target.value);
                      setSelectedCollege("");
                      setShowCollegeDropdown(true);
                    }}
                    onFocus={() => setShowCollegeDropdown(true)}
                    placeholder="Search your college or university..."
                    className="w-full bg-white border border-[#321F1F]/25 rounded px-3.5 py-3 text-sm text-[#321F1F] outline-none focus:border-[#972933]"
                  />
                  <div className="absolute right-3 top-3.5 pointer-events-none text-[#972933]">
                    ▼
                  </div>

                  {/* Dropdown Results */}
                  {showCollegeDropdown && (
                    <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-[#321F1F]/20 rounded shadow-lg max-h-48 overflow-y-auto z-50 divide-y divide-gray-100 text-xs sm:text-sm">
                      {filteredColleges.map((college, idx) => (
                        <li
                          key={idx}
                          onClick={() => {
                            setSelectedCollege(college);
                            setCollegeQuery(college);
                            setShowCollegeDropdown(false);
                          }}
                          className="px-3 py-2.5 hover:bg-[#972933]/10 cursor-pointer text-[#321F1F]"
                        >
                          {college}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Programme */}
              <div className="space-y-1">
                <p className="text-xs text-[#321F1F]/75 font-medium text-center sm:text-left">
                  Which programme are you currently enrolled in?
                </p>
                <div className="floating-group">
                  <input
                    type="text"
                    id="programme-name"
                    value={programmeName}
                    onChange={(e) => setProgrammeName(e.target.value)}
                    placeholder=" "
                    required
                    className="w-full bg-white border border-[#321F1F]/25 rounded px-3.5 text-sm text-[#321F1F] outline-none focus:border-[#972933]"
                  />
                  <label htmlFor="programme-name">e.g. B.Tech Computer Science, MBA, M.Sc Data Science</label>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#972933] hover:bg-[#74001c] text-white font-semibold text-sm rounded uppercase tracking-wider transition cursor-pointer"
                >
                  Continue to Track Selection
                </button>
              </div>
            </form>
          )}

          {/* STAGE 4: Track Selection & Team Form */}
          {currentStage === 4 && !isSuccess && (
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="font-bold text-lg sm:text-xl text-[#321F1F]">
                  Select Track & Form Your Team
                </h3>
                <p className="text-xs text-[#321F1F]/70 mt-1">
                  You can change tracks anytime until the Solution Assembly stage
                </p>
              </div>

              {/* Track Selection Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  onClick={() => setSelectedTrack("strategy")}
                  className={`p-4 rounded border-2 cursor-pointer transition ${
                    selectedTrack === "strategy"
                      ? "border-[#972933] bg-[#972933]/5"
                      : "border-[#321F1F]/20 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-[#321F1F]">
                      Product Strategy Track
                    </span>
                    <input
                      type="radio"
                      name="track"
                      checked={selectedTrack === "strategy"}
                      onChange={() => setSelectedTrack("strategy")}
                      className="accent-[#972933]"
                    />
                  </div>
                  <p className="text-xs text-[#321F1F]/75 leading-relaxed">
                    Formulate deep consumer insights, system architectures, and interface
                    designs. No code required.
                  </p>
                </div>

                <div
                  onClick={() => setSelectedTrack("builder")}
                  className={`p-4 rounded border-2 cursor-pointer transition ${
                    selectedTrack === "builder"
                      ? "border-[#972933] bg-[#972933]/5"
                      : "border-[#321F1F]/20 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-[#321F1F]">
                      Builder Track
                    </span>
                    <input
                      type="radio"
                      name="track"
                      checked={selectedTrack === "builder"}
                      onChange={() => setSelectedTrack("builder")}
                      className="accent-[#972933]"
                    />
                  </div>
                  <p className="text-xs text-[#321F1F]/75 leading-relaxed">
                    Build live prototypes connecting directly to partner APIs and MCP
                    protocols for payments, voice, and logistics.
                  </p>
                </div>
              </div>

              {/* Team Size */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#321F1F]">
                  Team Members (1 - 3 students)
                </label>
                <div className="flex items-center gap-4">
                  {[1, 2, 3].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setTeamSize(size)}
                      className={`flex-1 py-2 rounded text-xs sm:text-sm font-semibold border cursor-pointer transition ${
                        teamSize === size
                          ? "bg-[#972933] text-white border-[#972933]"
                          : "bg-white text-[#321F1F] border-[#321F1F]/20"
                      }`}
                    >
                      {size} {size === 1 ? "Member (Solo)" : "Members"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Teammates Email Inputs */}
              {teamSize >= 2 && (
                <div className="floating-group">
                  <input
                    type="email"
                    id="member2-email"
                    value={member2Email}
                    onChange={(e) => setMember2Email(e.target.value)}
                    placeholder=" "
                    required
                    className="w-full bg-white border border-[#321F1F]/25 rounded px-3.5 text-sm text-[#321F1F] outline-none focus:border-[#972933]"
                  />
                  <label htmlFor="member2-email">Teammate 2 College Email ID</label>
                </div>
              )}

              {teamSize === 3 && (
                <div className="floating-group">
                  <input
                    type="email"
                    id="member3-email"
                    value={member3Email}
                    onChange={(e) => setMember3Email(e.target.value)}
                    placeholder=" "
                    required
                    className="w-full bg-white border border-[#321F1F]/25 rounded px-3.5 text-sm text-[#321F1F] outline-none focus:border-[#972933]"
                  />
                  <label htmlFor="member3-email">Teammate 3 College Email ID</label>
                </div>
              )}

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentStage(3)}
                  className="py-3 px-5 border border-[#321F1F]/30 text-[#321F1F] font-semibold text-sm rounded uppercase tracking-wider transition cursor-pointer hover:bg-black/5"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#972933] hover:bg-[#74001c] text-white font-semibold text-sm rounded uppercase tracking-wider transition cursor-pointer shadow-md"
                >
                  Submit Registration
                </button>
              </div>
            </form>
          )}

          {/* SUCCESS SCREEN */}
          {isSuccess && (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 bg-[#838b61]/15 text-[#838b61] rounded-full flex items-center justify-center text-3xl mx-auto font-bold">
                ✓
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#972933]">
                Registration Received!
              </h3>
              <p className="text-sm sm:text-base text-[#321F1F]/80 max-w-[520px] mx-auto leading-relaxed">
                Thank you, <strong>{firstName} {lastName}</strong>! Your registration for{" "}
                <strong>{selectedCollege}</strong> ({selectedTrack === "strategy" ? "Strategy Track" : "Builder Track"}) has been recorded.
              </p>
              <div className="p-4 bg-white border border-[#321F1F]/15 rounded max-w-[420px] mx-auto text-left space-y-1.5">
                <div className="text-xs text-[#321F1F]/60 uppercase tracking-wider font-semibold">
                  Assigned Team Reference ID
                </div>
                <div className="font-mono text-base font-bold text-[#972933]">
                  KEN-2026-REWIRING-8492
                </div>
                <div className="text-xs text-[#321F1F]/70 pt-1">
                  A verification confirmation and next steps for Phase III problem opportunities will arrive in your inbox on 31 August.
                </div>
              </div>
              <div className="pt-3">
                <a
                  href="#survey"
                  className="inline-block px-6 py-2.5 bg-[#972933] text-white text-xs sm:text-sm font-semibold rounded uppercase tracking-wider hover:bg-[#74001c] transition"
                >
                  Take the Reader Survey Next →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
