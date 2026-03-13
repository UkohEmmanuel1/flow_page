"use client"


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





export default function Navbar() {
    return(
        <header className="fixed top-0 left-14 right-0 h-12 bg-white border-b border-gray-100 flex items-center px-4 gap-3 z-20">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-gray-500">
        <Home size={14} />
        <ChevronRight size={12} />
        <span>HRMS</span>
        <ChevronRight size={12} />
        <span>Recruitment</span>
        <ChevronRight size={12} />
        <span className="text-violet-600 font-medium">Job Applicant</span>
      </nav>

      {/* Search */}
      <div className="flex-1 max-w-xs ml-auto relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          className="w-full pl-8 pr-4 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-300"
          placeholder="Search ⌘K"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 ml-2">
        {[Languages, MessageCircle, Moon, Star, Bell].map((Icon, i) => (
          <button key={i} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 relative">
            <Icon size={16} />
            {i === 4 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            )}
          </button>
        ))}
        <div className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-white text-xs font-bold">
          A
        </div>
      </div>
    </header>
    )
}