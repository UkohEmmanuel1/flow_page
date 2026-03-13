"use client";
import Navbar from '../_components/navbar'
import Hero from '../_components/hero'
import Sidebar from '../_components/sidebar';
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Home,
  Users,
  ShoppingCart,
  Car,
  MessageSquare,
  UserCheck,
  DollarSign,
  Calendar,
  Trophy,
  Building,
  AlertTriangle,
  UsersRound,
  BookOpen,
  MapPin,
  Wrench,
  Lock,
  Settings,
  Search,
  Languages,
  MessageCircle,
  Moon,
  Star,
  Bell,
  RefreshCw,
  Plus,
  MoreVertical,
  Filter,
  X,
  Download,
  ChevronDown,
  Eye,
  Trash2,
  FileSpreadsheet,
  Mail,
  Printer,
  FileText,
  ChevronLeft,
  ChevronRight,
  AlignJustify,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Applicant {
  id: string;
  name: string;
  phone: string;
  avatar: string;
  jobOpening: string;
  status: "Open" | "Replied" | "Accepted" | "Rejected" | "On Hold";
  email: string;
  rating: number;
  daysAgo: number;
  comments: number;
  likes: number;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const chartData = [
  { dept: "HR",        Accepted: 56, Rejected: 40, OnHold: 68, Open: 52, Replied: 13 },
  { dept: "Executive", Accepted: 90, Rejected: 52, OnHold: 40, Open: 68, Replied: 39 },
  { dept: "Accounts",  Accepted: 40, Rejected: 32, OnHold: 59, Open: 55, Replied: 43 },
  { dept: "Academics", Accepted: 83, Rejected: 38, OnHold: 57, Open: 56, Replied: 18 },
  { dept: "Admissions",Accepted: 94, Rejected: 17, OnHold: 78, Open: 49, Replied: 8  },
  { dept: "Admin",     Accepted: 87, Rejected: 19, OnHold: 38, Open: 43, Replied: 30 },
  { dept: "Branding",  Accepted: 76, Rejected: 27, OnHold: 56, Open: 42, Replied: 14 },
  { dept: "Facility",  Accepted: 63, Rejected: 23, OnHold: 30, Open: 42, Replied: 46 },
  { dept: "IT",        Accepted: 55, Rejected: 34, OnHold: 38, Open: 25, Replied: 44 },
  { dept: "Audit",     Accepted: 69, Rejected: 25, OnHold: 44, Open: 72, Replied: 22 },
];

const applicants: Applicant[] = [
  { id: "admin@school.com",           name: "Jordan Stevenson",  phone: "07044658974", avatar: "JS", jobOpening: "Recruitment-CFO",   status: "Open",     email: "admin@school.com",           rating: 0, daysAgo: 6, comments: 4, likes: 1 },
  { id: "blaqmendenz@school.com",     name: "Blaq Mendez",       phone: "08021443689", avatar: "BM", jobOpening: "Account Trainee",    status: "Replied",  email: "blaqmendenz@school.com",     rating: 0, daysAgo: 6, comments: 4, likes: 1 },
  { id: "jasonfiitz@school.com",      name: "Jason Fitz",        phone: "07042135874", avatar: "JF", jobOpening: "Admission-Officer",  status: "Accepted", email: "jasonfiitz@school.com",      rating: 3.5, daysAgo: 6, comments: 4, likes: 1 },
  { id: "cynthiasodeinde@school.com", name: "Cynthia Sodeinde,", phone: "08123446589", avatar: "CS", jobOpening: "Admission-Manager",  status: "Accepted", email: "cynthiasodeinde@school.com", rating: 4.5, daysAgo: 6, comments: 4, likes: 1 },
  { id: "adewoleakindele@school.com", name: "Adewole Akindele",  phone: "09055641278", avatar: "AA", jobOpening: "Human Resources",    status: "Rejected", email: "adewoleakindele@school.com", rating: 1,   daysAgo: 6, comments: 4, likes: 1 },
  { id: "shadeshaw@school.com",       name: "Shade Shaw",        phone: "08423567985", avatar: "SS", jobOpening: "Meeting with ED",    status: "On Hold",  email: "shadeshaw@school.com",       rating: 3.5, daysAgo: 6, comments: 4, likes: 1 },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const avatarColors: Record<string, string> = {
  JS: "bg-blue-400",
  BM: "bg-indigo-500",
  JF: "bg-rose-400",
  CS: "bg-amber-400",
  AA: "bg-teal-500",
  SS: "bg-purple-400",
};

function Avatar({ initials }: { initials: string }) {
  return (
    <div
      className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${avatarColors[initials] ?? "bg-gray-400"}`}
    >
      {initials}
    </div>
  );
}

const statusConfig: Record<
  Applicant["status"],
  { label: string; className: string }
> = {
  Open:     { label: "Open",     className: "bg-blue-100 text-blue-600" },
  Replied:  { label: "Replied",  className: "bg-gray-100 text-gray-600" },
  Accepted: { label: "Accepted", className: "bg-green-100 text-green-600" },
  Rejected: { label: "Rejected", className: "bg-red-100 text-red-600" },
  "On Hold":{ label: "On Hold",  className: "bg-yellow-100 text-yellow-600" },
};

function StatusBadge({ status }: { status: Applicant["status"] }) {
  const cfg = statusConfig[status];
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${cfg.className}`}>
      {cfg.label}
    </span>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={
            i <= Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : i - 0.5 <= rating
              ? "fill-amber-300 text-amber-300"
              : "fill-gray-200 text-gray-200"
          }
        />
      ))}
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

const sidebarIcons = [
  Home, Users, ShoppingCart, Car, MessageSquare, UserCheck,
  DollarSign, Calendar, Trophy, Building, AlertTriangle,
  UsersRound, BookOpen, MapPin, Wrench, Lock, Settings,
];




// ─── Top Bar ─────────────────────────────────────────────────────────────────


// ─── Hero Banner ─────────────────────────────────────────────────────────────
{/*
function HeroBanner() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 flex items-center justify-between shadow-sm">
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-gray-800">Job Applicant</h1>
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mt-1 mb-3">
          <span>HRMS</span>
          <ChevronRight size={10} />
          <span>Recruitment</span>
          <ChevronRight size={10} />
          <span className="text-violet-500 font-medium">Job Applicant</span>
        </nav>
        <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
          Create a seamless process from Staffing Plan to a recruitment of successful Applicants that
          meet the organization's need and core values with the automated recruitment and interview process
        </p>
        <button className="mt-4 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm rounded-lg font-medium transition-colors">
          Click To Learn More
        </button>
      </div>
      {/* Illustration placeholder 
      <div className="w-32 h-24 bg-violet-50 rounded-xl flex items-center justify-center ml-6 shrink-0">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto bg-violet-100 rounded-full flex items-center justify-center">
            <UserCheck size={22} className="text-violet-500" />
          </div>
          <span className="text-xs text-violet-400 mt-1 font-medium">we're hiring!</span>
        </div>
      </div>
    </div>
  );
}
*/}
// ─── Chart Section ────────────────────────────────────────────────────────────

const AREA_COLORS = {
  Accepted: "#8b5cf6",
  Rejected: "#f43f5e",
  OnHold:   "#06b6d4",
  Open:     "#f97316",
  Replied:  "#22c55e",
};

function DepartmentChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-700">Job Applicant Per Department</h2>
        <span className="text-xs text-gray-400 font-medium">2025</span>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            {Object.entries(AREA_COLORS).map(([key, color]) => (
              <linearGradient key={key} id={`grad-${key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0.02} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="dept" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
            formatter={(value) => <span className="text-gray-500">{value}</span>}
          />
          {(["Accepted","Rejected","OnHold","Open","Replied"] as const).map((key) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              name={key === "OnHold" ? "On Hold" : key}
              stroke={AREA_COLORS[key]}
              fill={`url(#grad-${key})`}
              strokeWidth={2}
              dot={{ r: 3, fill: AREA_COLORS[key], strokeWidth: 0 }}
              activeDot={{ r: 5 }}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── Applicant Table ──────────────────────────────────────────────────────────

function ApplicantTable() {
  const [selected, setSelected] = useState<string[]>([]);
  const [view, setView] = useState<"All" | "Branch" | "Self">("All");
  const [search, setSearch] = useState("");

  const toggleSelect = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const filtered = applicants.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.jobOpening.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <AlignJustify size={16} className="text-gray-400" />
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Job Applicant Listing</h2>
        </div>
        <div className="flex items-center gap-2">
          {/* List view toggle */}
          <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-600">
            <span>List View</span>
            <ChevronDown size={13} />
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
            <RefreshCw size={14} />
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm rounded-lg font-medium transition-colors">
            <Plus size={14} />
            Add Job Applicant
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
            <MoreVertical size={14} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100">
        <div className="relative flex-1 max-w-xs">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-200"
            placeholder="Search KRAs..."
          />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-500">
          <Filter size={13} />
          <span>All Departments</span>
          <ChevronDown size={13} />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-500 ml-auto">
          <Filter size={13} />
          <span>Filter</span>
          <X size={13} />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-500">
          <Download size={13} />
          <span>Last Updated On</span>
        </div>
      </div>

      {/* View Toggle + Export */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Select table list view by:</span>
          {(["All", "Branch", "Self"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                view === v
                  ? "bg-gray-700 text-white"
                  : "border border-gray-200 text-gray-500 hover:bg-gray-50"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: FileSpreadsheet, label: "Excel",  color: "text-green-600 border-green-200 bg-green-50 hover:bg-green-100" },
            { icon: Mail,            label: "Email",  color: "text-blue-600 border-blue-200 bg-blue-50 hover:bg-blue-100" },
            { icon: Printer,         label: "Print",  color: "text-gray-600 border-gray-200 bg-gray-50 hover:bg-gray-100" },
            { icon: FileText,        label: "Pdf",    color: "text-red-600 border-red-200 bg-red-50 hover:bg-red-100" },
          ].map(({ icon: Icon, label, color }) => (
            <button key={label} className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-medium transition-colors ${color}`}>
              <Icon size={12} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="w-10 px-4 py-3">
                <input type="checkbox" className="rounded border-gray-300 text-violet-600" />
              </th>
              {["APPLICANT NAME", "JOB OPENING", "STATUS", "JOB APPLICANT ID", "APPLICANT RATING", "COMMENT", "ACTION"].map(
                (h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50/60 transition-colors group">
                <td className="px-4 py-3.5">
                  <input
                    type="checkbox"
                    checked={selected.includes(a.id)}
                    onChange={() => toggleSelect(a.id)}
                    className="rounded border-gray-300 text-violet-600"
                  />
                </td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <Avatar initials={a.avatar} />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{a.name}</p>
                      <p className="text-xs text-gray-400">{a.phone}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">{a.jobOpening}</td>
                <td className="px-4 py-3.5">
                  <StatusBadge status={a.status} />
                </td>
                <td className="px-4 py-3.5 text-gray-500 text-xs">{a.email}</td>
                <td className="px-4 py-3.5">
                  <StarRating rating={a.rating} />
                </td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{a.daysAgo} d</span>
                    <span className="flex items-center gap-0.5">
                      <MessageSquare size={11} /> {a.comments}
                    </span>
                    <span className="flex items-center gap-0.5">
                      ♡ {a.likes}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                    <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500">
                      <Eye size={14} />
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-red-50 text-red-400">
                      <Trash2 size={14} />
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500">
                      <MoreVertical size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-3 px-5 py-3 border-t border-gray-100 text-sm text-gray-500">
        <span>Rows per page:</span>
        <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1">
          <span>10</span>
          <ChevronDown size={12} />
        </div>
        <span>1–5 of 13</span>
        <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40">
          <ChevronLeft size={14} />
        </button>
        <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="flex items-center justify-between text-xs text-gray-400 py-4">
      <span>
        © 2023, Made with{" "}
        <span className="text-red-400">♥</span>{" "}
        by{" "}
        <a href="#" className="text-violet-500 hover:underline font-medium">
          ThemeSelection
        </a>
      </span>
      <div className="flex items-center gap-4">
        {["License", "More Themes", "Documentation", "Support"].map((l) => (
          <a key={l} href="#" className="text-violet-500 hover:underline">
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function JobApplicantPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Sidebar />
      <Navbar />

      {/* Main content */}
      <main className="ml-14 pt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-5">
          <Hero />
          <DepartmentChart />
          <ApplicantTable />
          <Footer />
        </div>
      </main>
    </div>
  );
}