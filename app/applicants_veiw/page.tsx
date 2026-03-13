"use client";
import Navbar from '../_components/navbar'
import Hero from '../_components/applicants_details_hero'
import Sidebar from '../_components/sidebar';
import InterviewHeader from '../_components/interviewHeader'
import Body from '../_components/applicants_veiw_body'
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

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Sidebar />
      <Navbar />

      {/* Main content */}
      <main className="ml-14 pt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-5">
          <Hero />
          <InterviewHeader />
          <Body />
        </div>
      </main>
    </div>
  );
}