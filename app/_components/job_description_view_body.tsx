"use client";
import Image from 'next/image'
import { useState } from "react";
import {
  Plus,
  Paperclip,
  Users,
  ExternalLink,
  X,
  ChevronRight,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface KRARow {
  id: number;
  no: number;
  jobDescriptionName: string;
  description: string;
  maximumObtainableScore: number | string;
  kpiFrequency: string;
  doctype: string;
}

// ─── Floating Label Input ─────────────────────────────────────────────────────

function FloatingInput({
  label,
  value,
  onChange,
  disabled,
}: {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="relative border border-gray-300 rounded-lg px-3 pt-5 pb-2 bg-gray-100">
      <span className="absolute top-1.5 left-3 text-[11px] text-gray-400 font-medium select-none">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className="w-full text-sm text-gray-800 bg-transparent outline-none disabled:cursor-default"
      />
    </div>
  );
}

// ─── Floating Textarea ────────────────────────────────────────────────────────

function FloatingTextarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div className="relative border border-gray-300 rounded-lg px-3 pt-6 pb-3 bg-gray-100 min-h-[240px]">
      <span className="absolute top-1.5 left-3 text-[11px] text-gray-400 font-medium select-none">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full h-48 text-sm text-gray-800 bg-transparent outline-none resize-none"
      />
    </div>
  );
}

// ─── Department Tag ───────────────────────────────────────────────────────────

function DeptTag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 bg-violet-600 text-white text-xs font-medium px-3 py-1 rounded-full">
      {label}
      <button
        onClick={onRemove}
        className="hover:text-violet-200 transition-colors ml-0.5"
      >
        <X size={11} />
      </button>
    </span>
  );
}

// ─── Avatar Stack ─────────────────────────────────────────────────────────────

function AvatarStack() {
  const avatars = [
    { src: "asset_two/Avatar-1.png", alt: "User 1" },
    { src: "asset_two/Avatar-2.png", alt: "User 2" },
    { src: "asset_two/Avatar-3.png", alt: "User 3" },
  ];

  return (
    <div className="flex items-center">
      {avatars.map((av, i) => (
        <img
          key={i}
          src={av.src}
          alt={av.alt}
          className="w-7 h-7 rounded-full border-2 border-white -ml-2 first:ml-0 object-cover flex-shrink-0"
        />
      ))}
      <div className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white -ml-2 flex items-center justify-center text-gray-600 text-[10px] font-bold flex-shrink-0">
        +3
      </div>
    </div>
  );
}

// ─── Connection Item ──────────────────────────────────────────────────────────

function ConnectionItem({
  label,
  count,
  showCount = true,
}: {
  label: string;
  count?: number;
  showCount?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 bg-white hover:bg-gray-50 cursor-pointer transition-colors">
      {/* Icon placeholder */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="flex-shrink-0 text-gray-500"
      >
        <rect
          x="1"
          y="1"
          width="14"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <line
          x1="4"
          y1="5"
          x2="12"
          y2="5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="8"
          x2="12"
          y2="8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="11"
          x2="9"
          y2="11"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-sm text-gray-700 font-medium">{label}</span>
      {showCount && count !== undefined && (
        <span className="ml-auto text-xs font-semibold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
          {count}
        </span>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function JobDescriptionLayout() {
  const [departments, setDepartments] = useState([
    "Accounts",
    "Academics",
    "Admissions",
  ]);
  const [setActive1, setSetActive1] = useState(true);
  const [setActive2, setSetActive2] = useState(true);
  const [description, setDescription] = useState("Input");
  const [jobDescName, setJobDescName] = useState("HR-HIREQ-");
  const [weight1, setWeight1] = useState("in %");
  const [weight2] = useState("in %");

  const [checkedKRA, setCheckedKRA] = useState<Set<number>>(new Set());

  const kraRows: KRARow[] = [
    {
      id: 1,
      no: 1,
      jobDescriptionName: "PAYE",
      description: "PAYE Remittances",
      maximumObtainableScore: 5,
      kpiFrequency: "Monthly",
      doctype: "Monthly",
    },
    {
      id: 2,
      no: 2,
      jobDescriptionName: "Pension",
      description: "Ensure Pension is remitted",
      maximumObtainableScore: 4,
      kpiFrequency: "Weekly",
      doctype: "Weekly",
    },
    {
      id: 3,
      no: 2,
      jobDescriptionName: "VAT",
      description: "Ensure VAT is remitted",
      maximumObtainableScore: 4,
      kpiFrequency: "2nd Saturday, Every Month",
      doctype: "2nd Sa Month",
    },
    {
      id: 4,
      no: 2,
      jobDescriptionName: "VAT",
      description: "New Admission",
      maximumObtainableScore: 5,
      kpiFrequency: "Monthly",
      doctype: "Admiss",
    },
    {
      id: 5,
      no: 2,
      jobDescriptionName: "",
      description: "",
      maximumObtainableScore: "",
      kpiFrequency: "",
      doctype: "",
    },
  ];

  const toggleKRA = (id: number) =>
    setCheckedKRA((prev) => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });

  const removeDept = (label: string) =>
    setDepartments((prev) => prev.filter((d) => d !== label));

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-sm flex">
      {/* ════ LEFT SIDEBAR ════ */}
      <aside className="w-52 flex-shrink-0 border-r border-gray-200 bg-white px-4 py-5 space-y-5">
        {/* Assigned To */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users size={14} className="text-gray-500" />
            <span className="text-xs font-semibold text-gray-700">
              Assigned To
            </span>
          </div>
          <div className="flex justify-end mb-1">
            <span className="text-[10px] text-white bg-gray-700 rounded px-1.5 py-0.5">
              John Doe
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center text-white hover:bg-violet-700 transition-colors flex-shrink-0">
              <Plus size={14} />
            </button>
            <AvatarStack />
            
          </div>
        </div>

        {/* Attachments */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Paperclip size={14} className="text-gray-500" />
            <span className="text-xs font-semibold text-gray-700">
              Attachments
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1.5 flex-1 text-xs text-gray-500 bg-white cursor-pointer hover:bg-gray-50">
              <span>Attach File</span>
              <Plus size={11} className="ml-auto text-gray-400" />
            </div>
            <button className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
              <ExternalLink size={13} />
            </button>
          </div>
        </div>

        {/* Shared with */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users size={14} className="text-gray-500" />
            <span className="text-xs font-semibold text-gray-700">
              Shared with
            </span>
          </div>
          <div className="flex justify-end mb-1">
            <span className="text-[10px] text-white bg-gray-700 rounded px-1.5 py-0.5">
              John Doe
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center text-white hover:bg-violet-700 transition-colors flex-shrink-0">
              <Plus size={14} />
            </button>
            <AvatarStack />
          </div>
        </div>

        {/* Activity */}
        <div className="space-y-3 pt-1">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <p className="text-xs text-gray-700">
              <span className="font-semibold">You</span> edited this
            </p>
            <p className="text-xs text-gray-400 mt-0.5 italic">1 minutes ago</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <p className="text-xs text-gray-700">
              <span className="font-semibold">You</span> created this
            </p>
            <p className="text-xs text-gray-400 mt-0.5 italic">11 month ago</p>
          </div>
        </div>
      </aside>

      {/* ════ MAIN CONTENT ════ */}
      <main className="flex-1 overflow-auto px-8 py-6 space-y-7">
        {/* ── Connections Header ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-900">
              Connections
            </h2>
            <button className="flex items-center gap-1 text-violet-600 hover:text-violet-700 text-sm font-medium transition-colors">
              Go back to Recruitment dashboard
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Row 1 — Header tiles (no count) */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <ConnectionItem label="Employee Module" showCount={false} />
            <ConnectionItem label="Job Offer & Appointment" showCount={false} />
            <ConnectionItem label="Interview" showCount={false} />
          </div>

          {/* Row 2 — With counts */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <ConnectionItem label="Designation" count={0} />
            <ConnectionItem label="Job Offer" count={1} />
            <ConnectionItem label="Employee Appraisal" count={2} />
          </div>

          {/* Row 3 — With counts */}
          <div className="grid grid-cols-3 gap-3">
            <ConnectionItem label="Tasks" count={0} />
            <ConnectionItem label="Appraisal Template" count={1} />
            <ConnectionItem label="Department" count={2} />
          </div>
        </section>

        {/* ── Form Section ── */}
        <section className="space-y-4">
          {/* Row 1: Job Description Name + Departments */}
          <div className="grid grid-cols-2 gap-4">
            <FloatingInput
              label="Job Description Name"
              value={jobDescName}
              onChange={setJobDescName}
            />

            {/* Departments multi-tag field */}
            <div className="relative border border-gray-300 rounded-lg px-3 pt-5 pb-2 bg-gray-100 min-h-[56px]">
              <span className="absolute top-1.5 left-3 text-[11px] text-gray-400 font-medium select-none">
                Departments
              </span>
              <div className="flex flex-wrap gap-1.5 mt-0.5">
                {departments.map((dept) => (
                  <DeptTag
                    key={dept}
                    label={dept}
                    onRemove={() => removeDept(dept)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Weight + Set Active */}
          <div className="grid grid-cols-2 gap-4 items-center">
            <FloatingInput
              label="Weight"
              value={weight1}
              onChange={setWeight1}
            />
            <div className="flex items-center gap-2 px-1">
              <button
                onClick={() => setSetActive1((p) => !p)}
                className={`w-4 h-4 rounded flex items-center justify-center border transition-colors flex-shrink-0 ${
                  setActive1
                    ? "bg-violet-600 border-violet-600"
                    : "bg-white border-gray-300"
                }`}
              >
                {setActive1 && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <span className="text-sm text-gray-700 font-medium">
                Set Active
              </span>
            </div>
          </div>

          {/* Description textarea */}
          <FloatingTextarea
            label="Description"
            value={description}
            onChange={setDescription}
          />

          {/* Second Weight + Set Active row */}
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="relative border border-gray-300 rounded-lg px-3 pt-5 pb-2 bg-gray-100">
              <span className="absolute top-1.5 left-3 text-[11px] text-gray-400 font-medium select-none">
                Weight
              </span>
              <p className="text-sm text-gray-800">{weight2}</p>
            </div>
            <div className="flex items-center gap-2 px-1">
              <button
                onClick={() => setSetActive2((p) => !p)}
                className={`w-4 h-4 rounded flex items-center justify-center border transition-colors flex-shrink-0 ${
                  setActive2
                    ? "bg-violet-600 border-violet-600"
                    : "bg-white border-gray-300"
                }`}
              >
                {setActive2 && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <span className="text-sm text-gray-700 font-medium">
                Set Active
              </span>
            </div>
          </div>
        </section>

        {/* ── Job KRA Table ── */}
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            Job KRA Table
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="w-10 px-3 py-3 text-left">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 accent-violet-600"
                    />
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">
                    No
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">
                    Job Description Name
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Description
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Maximum
                    <br />
                    Obtainable Score
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">
                    KPI Frequency
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Doctype
                  </th>
                </tr>
              </thead>
              <tbody>
                {kraRows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-3 py-3">
                      <input
                        type="checkbox"
                        checked={checkedKRA.has(row.id)}
                        onChange={() => toggleKRA(row.id)}
                        className="rounded border-gray-300 accent-violet-600"
                      />
                    </td>
                    <td className="px-3 py-3 text-gray-500">{row.no}</td>
                    <td className="px-3 py-3 text-gray-800 font-medium text-center">
                      {row.jobDescriptionName}
                    </td>
                    <td className="px-3 py-3 text-gray-600">
                      {row.description}
                    </td>
                    <td className="px-3 py-3 text-gray-600">
                      {row.maximumObtainableScore}
                    </td>
                    <td className="px-3 py-3 text-gray-600">
                      {row.kpiFrequency === "" ? (
                        <div className="relative">
                          <select className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-500 bg-white pr-7 outline-none cursor-pointer">
                            <option value="">Select Recurrence</option>
                            <option>Monthly</option>
                            <option>Weekly</option>
                            <option>Daily</option>
                          </select>
                          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                            ▾
                          </span>
                        </div>
                      ) : (
                        row.kpiFrequency
                      )}
                    </td>
                    <td className="px-3 py-3 text-gray-600">
                      {row.doctype === "" ? (
                        <div className="relative">
                          <select className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-500 bg-white pr-7 outline-none cursor-pointer">
                            <option value="">Select Recurrence</option>
                            <option>Monthly</option>
                            <option>Weekly</option>
                            <option>Daily</option>
                          </select>
                          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                            ▾
                          </span>
                        </div>
                      ) : (
                        row.doctype
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="mt-3 flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            <Plus size={14} /> Add Row
          </button>
        </section>
      </main>
    </div>
  );
}
