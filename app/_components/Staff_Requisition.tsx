"use client";

import { useState } from "react";
import {
  Plus, Paperclip, Users, ExternalLink, Calendar,
  Settings, Edit2, LayoutList, FileText, CheckSquare,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface JobRow {
  id: number;
  no: number;
  designation: string;
  vacancies: number;
  estimatedCostPerPosition: string;
  number: number;
  totalEstimatedCost: string;
}

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
  required,
  icon,
  disabled,
}: {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  required?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <div className="relative border border-gray-300 rounded-lg px-3 pt-5 pb-2 bg-gray-50">
      <span className="absolute top-1.5 left-3 text-[11px] text-gray-400 font-medium select-none">
        {label}{required && " *"}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className="w-full text-sm text-gray-800 bg-transparent outline-none pr-6 disabled:cursor-default"
      />
      {icon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
    </div>
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



// ─── Connection Badge ─────────────────────────────────────────────────────────

function ConnectionBadge({
  icon: Icon,
  label,
  count,
}: {
  icon: React.ElementType;
  label: string;
  count: number;
}) {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
      <Icon size={16} className="text-gray-500" />
      <span className="text-sm text-gray-700 font-medium">{label}</span>
      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
        {count}
      </span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function StaffingPlanLayout() {
  // Form state
  const [form, setForm] = useState({
    staffingPlanTitle1: "Input",
    staffingPlanTitleDate1: "Input",
    company: "Input",
    staffingPlanTitleDate2: "Input",
    department: "Input",
    totalEstimatedBudget: "N1,300,000.00",
  });

  const set = (key: keyof typeof form) => (val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  // Job rows
  const [jobRows] = useState<JobRow[]>([
    {
      id: 1, no: 1, designation: "Accountant", vacancies: 2,
      estimatedCostPerPosition: "N200,000.00", number: 2, totalEstimatedCost: "N400,000.00",
    },
    {
      id: 2, no: 2, designation: "Finance Manager", vacancies: 3,
      estimatedCostPerPosition: "N300,000.00", number: 3, totalEstimatedCost: "N900,000.00",
    },
  ]);

  // KRA rows
  const [kraRows] = useState<KRARow[]>([
    { id: 1, no: 1, jobDescriptionName: "PAYE", description: "PAYE Remittances", maximumObtainableScore: 5, kpiFrequency: "Monthly", doctype: "Monthly" },
    { id: 2, no: 2, jobDescriptionName: "Pension", description: "Ensure Pension is remitted", maximumObtainableScore: 4, kpiFrequency: "Weekly", doctype: "Weekly" },
    { id: 3, no: 2, jobDescriptionName: "VAT", description: "Ensure VAT is remitted", maximumObtainableScore: 4, kpiFrequency: "2nd Saturday, Every Month", doctype: "2nd Sa Month" },
    { id: 4, no: 2, jobDescriptionName: "VAT", description: "New Admission", maximumObtainableScore: 5, kpiFrequency: "Monthly", doctype: "Admiss" },
    { id: 5, no: 2, jobDescriptionName: "", description: "", maximumObtainableScore: "", kpiFrequency: "", doctype: "" },
  ]);

  const [checkedJob, setCheckedJob] = useState<Set<number>>(new Set());
  const [checkedKRA, setCheckedKRA] = useState<Set<number>>(new Set());

  const toggleJob = (id: number) =>
    setCheckedJob((prev) => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });
  const toggleKRA = (id: number) =>
    setCheckedKRA((prev) => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });

  return (
    <div className="min-h-screen bg-white font-sans text-sm flex">

      {/* ════ LEFT SIDEBAR ════ */}
      <aside className="w-52 flex-shrink-0 border-r border-gray-200 bg-white px-4 py-5 space-y-5">

        {/* Assigned To */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users size={15} className="text-gray-500" />
            <span className="text-xs font-semibold text-gray-700">Assigned To</span>
          </div>
          {/* John Doe badge */}
          <div className="flex justify-end mb-1">
            <span className="text-[10px] text-white bg-gray-700 rounded px-1.5 py-0.5">John Doe</span>
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
            <Paperclip size={15} className="text-gray-500" />
            <span className="text-xs font-semibold text-gray-700">Attachments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1.5 flex-1 text-xs text-gray-500 bg-white">
              <span>Attach File</span>
              <Plus size={12} className="ml-auto text-gray-400" />
            </div>
            <button className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
              <ExternalLink size={13} />
            </button>
          </div>
        </div>

        {/* Shared with */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users size={15} className="text-gray-500" />
            <span className="text-xs font-semibold text-gray-700">Shared with</span>
          </div>
          <div className="flex justify-end mb-1">
            <span className="text-[10px] text-white bg-gray-700 rounded px-1.5 py-0.5">John Doe</span>
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
      <main className="flex-1 overflow-auto px-8 py-6 space-y-8">

        {/* ── Connections ── */}
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-4">Connections</h2>
          <div className="flex flex-wrap gap-2 border border-gray-200 rounded-xl px-4 py-3 bg-white">
            <ConnectionBadge icon={LayoutList} label="Job Opening" count={0} />
            <div className="w-px bg-gray-200 self-stretch" />
            <ConnectionBadge icon={FileText} label="Job Offer" count={0} />
            <div className="w-px bg-gray-200 self-stretch" />
            <ConnectionBadge icon={CheckSquare} label="Tasks" count={0} />
          </div>
        </section>

        {/* ── Form Fields ── */}
        <section className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4">
            <FloatingInput label="Staffing Plan Title" value={form.staffingPlanTitle1} onChange={set("staffingPlanTitle1")} />
            <FloatingInput label="Staffing Plan Title" value={form.staffingPlanTitleDate1} onChange={set("staffingPlanTitleDate1")} icon={<Calendar size={15} />} />
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4">
            <FloatingInput label="Company" value={form.company} onChange={set("company")} required />
            <FloatingInput label="Staffing Plan Title" value={form.staffingPlanTitleDate2} onChange={set("staffingPlanTitleDate2")} icon={<Calendar size={15} />} />
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-4">
            <FloatingInput label="Department" value={form.department} onChange={set("department")} />
          </div>
        </section>

        {/* ── Details: Job Requisitions Table ── */}
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-4">Details</h2>

          <button className="mb-4 bg-violet-100 hover:bg-violet-200 text-violet-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Get Job Requisitions
          </button>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="w-10 px-3 py-3 text-left">
                    <input type="checkbox" className="rounded border-gray-300 accent-violet-600" />
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">No</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Designation <span className="text-red-400">*</span>
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Vacancies</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Estimated Cost Per Positions (Annual Gross)
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Number</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-100">
                    Total Estimated Cost
                  </th>
                  <th className="px-3 py-3 text-center">
                    <Settings size={15} className="text-gray-400 mx-auto" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobRows.map((row) => (
                  <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-3">
                      <input
                        type="checkbox"
                        checked={checkedJob.has(row.id)}
                        onChange={() => toggleJob(row.id)}
                        className="rounded border-gray-300 accent-violet-600"
                      />
                    </td>
                    <td className="px-3 py-3 text-gray-600">{row.no}</td>
                    <td className="px-3 py-3 text-gray-800 font-medium">{row.designation}</td>
                    <td className="px-3 py-3 text-gray-600">{row.vacancies}</td>
                    <td className="px-3 py-3 text-gray-600">{row.estimatedCostPerPosition}</td>
                    <td className="px-3 py-3 text-gray-400">{row.number}</td>
                    <td className="px-3 py-3 text-gray-400 bg-gray-50">{row.totalEstimatedCost}</td>
                    <td className="px-3 py-3 text-center">
                      <button className="text-gray-400 hover:text-violet-600 transition-colors">
                        <Edit2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="mt-3 flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Plus size={14} /> Add Row
          </button>
        </section>

        {/* ── Details: Budget ── */}
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-4">Details</h2>
          <div className="max-w-lg">
            <FloatingInput
              label="Total Estimated Budget"
              value={form.totalEstimatedBudget}
              onChange={set("totalEstimatedBudget")}
              disabled
            />
          </div>
        </section>

        {/* ── Job KRA Table ── */}
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-4">Job KRA Table</h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="w-10 px-3 py-3 text-left">
                    <input type="checkbox" className="rounded border-gray-300 accent-violet-600" />
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">No</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Job Description Name</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Description</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Maximum Obtainable Score</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">KPI Frequency</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Doctype</th>
                </tr>
              </thead>
              <tbody>
                {kraRows.map((row) => (
                  <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-3">
                      <input
                        type="checkbox"
                        checked={checkedKRA.has(row.id)}
                        onChange={() => toggleKRA(row.id)}
                        className="rounded border-gray-300 accent-violet-600"
                      />
                    </td>
                    <td className="px-3 py-3 text-gray-600">{row.no}</td>
                    <td className="px-3 py-3 text-gray-800 font-medium">{row.jobDescriptionName}</td>
                    <td className="px-3 py-3 text-gray-600">{row.description}</td>
                    <td className="px-3 py-3 text-gray-600">{row.maximumObtainableScore}</td>
                    <td className="px-3 py-3 text-gray-600">
                      {row.kpiFrequency === "" ? (
                        <div className="relative">
                          <select className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-500 bg-white pr-7 outline-none">
                            <option value="">Select Recurrence</option>
                            <option>Monthly</option>
                            <option>Weekly</option>
                            <option>Daily</option>
                          </select>
                          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
                        </div>
                      ) : (
                        row.kpiFrequency
                      )}
                    </td>
                    <td className="px-3 py-3 text-gray-600">
                      {row.doctype === "" ? (
                        <div className="relative">
                          <select className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-500 bg-white pr-7 outline-none">
                            <option value="">Select Recurrence</option>
                            <option>Monthly</option>
                            <option>Weekly</option>
                            <option>Daily</option>
                          </select>
                          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
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

          <button className="mt-3 flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Plus size={14} /> Add Row
          </button>
        </section>

      </main>
    </div>
  );
}