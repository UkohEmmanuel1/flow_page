"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = "Job Details" | "Applicants Details" | "Qualification & Work History" | "Skills & Hobbies";

interface FormState {
  applicationRef: string;
  designation: string;
  status: string;
  jobOpening: string;
  applicationSource: string;
  company: string;
  branch: string;
  employmentType: string;
  department: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface FloatingFieldProps {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  variant?: "input" | "linked" | "auto";
}

function FloatingField({
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  variant = "input",
}: FloatingFieldProps) {
  const bgClass =
    variant === "auto" || variant === "linked"
      ? "bg-gray-100 cursor-default"
      : "bg-white";

  const textClass =
    variant === "auto" || variant === "linked"
      ? "text-gray-700"
      : "text-gray-900";

  return (
    <div className="relative">
      <div
        className={`relative border border-gray-300 rounded-lg px-3 pt-5 pb-2 ${bgClass}`}
      >
        <span className="absolute top-1.5 left-3 text-[11px] text-gray-400 font-medium select-none">
          {label}
          {required && " *"}
        </span>
        {disabled ? (
          <p className={`text-sm ${textClass} mt-0.5`}>{value}</p>
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            className={`w-full text-sm ${textClass} bg-transparent outline-none placeholder:text-gray-400`}
          />
        )}
      </div>
    </div>
  );
}

interface FloatingSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  required?: boolean;
}

function FloatingSelect({
  label,
  value,
  options,
  onChange,
  required = false,
}: FloatingSelectProps) {
  return (
    <div className="relative">
      <div className="relative border border-gray-300 rounded-lg px-3 pt-5 pb-2 bg-white">
        <span className="absolute top-1.5 left-3 text-[11px] text-gray-400 font-medium select-none">
          {label}
          {required && " *"}
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full text-sm text-gray-900 bg-transparent outline-none appearance-none cursor-pointer pr-6"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function NewJobApplication() {
  const [activeTab, setActiveTab] = useState<Tab>("Job Details");
  const [isSaved, setIsSaved] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);

  const [form, setForm] = useState<FormState>({
    applicationRef: "",
    designation: "Linked Field",
    status: "Open",
    jobOpening: "Linked Field",
    applicationSource: "Linked Field",
    company: "Auto Populated",
    branch: "Auto Populated",
    employmentType: "Auto Populated",
    department: "Auto Populated",
  });

  const tabs: Tab[] = [
    "Job Details",
    "Applicants Details",
    "Qualification & Work History",
    "Skills & Hobbies",
  ];

  const set = (key: keyof FormState) => (val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6 pt-10 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold text-gray-900">New Job Application</h1>
            {!isSaved && (
              <span className="text-xs font-medium text-red-400 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                Not Saved
              </span>
            )}
          </div>
          <button
            onClick={() => setIsSaved(true)}
            className="bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-150"
          >
            Save
          </button>
        </div>

        {/* ── Tabs ── */}
        <div className="flex border-b border-gray-200 px-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            const isHighlighted = tab === "Job Details" || tab === "Applicants Details";
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-3.5 mr-8 text-sm font-medium transition-colors duration-150 whitespace-nowrap
                  ${isActive
                    ? "text-violet-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-violet-600"
                    : isHighlighted
                    ? "text-violet-500 hover:text-violet-600"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* ── Content ── */}
        <div className="px-6 py-5">

          {/* General Interview Summary dropdown */}
          <div className="mb-5">
            <button
              onClick={() => setSummaryOpen((p) => !p)}
              className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              General Interview Summary
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${summaryOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* ── Job Details Section ── */}
          <section>
            <div className="border-t border-gray-200 pt-5 mb-5">
              <h2 className="text-base font-semibold text-gray-900 mb-5">Job Details</h2>

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <FloatingField
                  label="Application Ref"
                  value={form.applicationRef}
                  onChange={set("applicationRef")}
                  placeholder="Input"
                  required
                  variant="input"
                />
                <FloatingField
                  label="Designation"
                  value={form.designation}
                  disabled
                  variant="linked"
                />
                <FloatingSelect
                  label="Status"
                  value={form.status}
                  options={["Open", "In Progress", "Closed", "On Hold"]}
                  onChange={set("status")}
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FloatingField
                  label="Job Opening"
                  value={form.jobOpening}
                  disabled
                  required
                  variant="linked"
                />
                <FloatingField
                  label="Application Source"
                  value={form.applicationSource}
                  disabled
                  variant="linked"
                />
              </div>
            </div>
          </section>

          {/* ── Company Details Section ── */}
          <section>
            <div className="border-t border-gray-200 pt-5">
              <h2 className="text-base font-semibold text-gray-900 mb-5">Company Details</h2>

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <FloatingField
                  label="Company"
                  value={form.company}
                  disabled
                  required
                  variant="auto"
                />
                <FloatingField
                  label="Branch"
                  value={form.branch}
                  disabled
                  required
                  variant="auto"
                />
                <FloatingField
                  label="Employment Type"
                  value={form.employmentType}
                  disabled
                  required
                  variant="auto"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FloatingField
                  label="Department"
                  value={form.department}
                  disabled
                  variant="auto"
                />
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}