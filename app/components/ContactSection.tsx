"use client";

import React from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { CONTACT_LEADS, GENERAL_CONTACT } from "@/data/contacts";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact Us"
      className="bg-[#f9efd9] py-14 sm:py-20 lg:py-24 border-b border-[#321F1F]/15"
    >
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#972933]">
            <span className="h-px w-8 bg-[#972933]/40" />
            <span className="text-base sm:text-lg select-none">&lowast;</span>
            <span className="h-px w-8 bg-[#972933]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#972933] tracking-tight">
            Contact Us
          </h2>

          <p className="max-w-[620px] mx-auto text-sm sm:text-base lg:text-lg text-[#321F1F]/80 leading-relaxed font-serif italic">
            Have questions or need more information about Startup Bootcamp 9.0? Reach out to our
            team &mdash; we&rsquo;d love to hear from you!
          </p>
        </div>

        {/* 2 Lead Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {CONTACT_LEADS.map((person) => (
            <div
              key={person.email}
              className="bg-[#f7ecd0]/90 backdrop-blur-xs rounded-xl border border-[#321F1F]/15 p-6 sm:p-8 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Profile Photo */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#972933]/40 mb-4 bg-[#f7ecd0] relative shrink-0">
                <img
                  src={person.photoUrl}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#321F1F]">
                {person.name}
              </h3>

              {/* Contact Info List */}
              <div className="mt-5 space-y-2.5 w-full text-left text-xs sm:text-sm text-[#321F1F]/80 pt-4 border-t border-[#321F1F]/10">
                <a
                  href={`tel:${person.phone}`}
                  className="flex items-center gap-3 hover:text-[#972933] transition-colors group"
                >
                  <span className="p-1.5 rounded-full bg-[#972933]/10 text-[#972933] group-hover:bg-[#972933] group-hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium">{person.phone}</span>
                </a>

                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-3 hover:text-[#972933] transition-colors group break-all"
                >
                  <span className="p-1.5 rounded-full bg-[#972933]/10 text-[#972933] group-hover:bg-[#972933] group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium">{person.email}</span>
                </a>

                <a
                  href={person.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-[#972933] transition-colors group"
                >
                  <span className="p-1.5 rounded-full bg-[#972933]/10 text-[#972933] group-hover:bg-[#972933] group-hover:text-white transition-colors shrink-0">
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium truncate">
                    {person.linkedinUrl.replace(/^https?:\/\/(www\.)?/, "")}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lower Info Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* General Inquiries */}
          <div className="bg-[#f7ecd0]/80 rounded-xl border border-[#321F1F]/15 p-6 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#972933]/10 text-[#972933] shrink-0 mt-0.5">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#321F1F]">
                General Inquiries
              </h4>
              <a
                href={`mailto:${GENERAL_CONTACT.email}`}
                className="text-sm font-semibold text-[#972933] hover:underline block"
              >
                {GENERAL_CONTACT.email}
              </a>
              <p className="text-xs text-[#321F1F]/70">
                {GENERAL_CONTACT.responseSla}
              </p>
            </div>
          </div>

          {/* Office Address */}
          <div className="bg-[#f7ecd0]/80 rounded-xl border border-[#321F1F]/15 p-6 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#972933]/10 text-[#972933] shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#321F1F]">
                {GENERAL_CONTACT.organization}
              </h4>
              <p className="text-xs sm:text-sm text-[#321F1F]/80 leading-relaxed">
                {GENERAL_CONTACT.address}
              </p>
            </div>
          </div>
        </div>

        {/* Social Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#321F1F]/75">
            Follow us for updates:
          </span>
          <div className="flex items-center gap-3">
            <a
              href={GENERAL_CONTACT.socials[0].url}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#f7ecd0] border border-[#321F1F]/15 text-[#321F1F] hover:text-[#972933] hover:border-[#972933] transition"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href={GENERAL_CONTACT.socials[1].url}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#f7ecd0] border border-[#321F1F]/15 text-[#321F1F] hover:text-[#972933] hover:border-[#972933] transition"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={GENERAL_CONTACT.socials[2].url}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#f7ecd0] border border-[#321F1F]/15 text-[#321F1F] hover:text-[#972933] hover:border-[#972933] transition"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={GENERAL_CONTACT.socials[3].url}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#f7ecd0] border border-[#321F1F]/15 text-[#321F1F] hover:text-[#972933] hover:border-[#972933] transition"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
