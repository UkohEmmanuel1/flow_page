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

const sidebarIcons = [
  Home, Users, ShoppingCart, Car, MessageSquare, UserCheck,
  DollarSign, Calendar, Trophy, Building, AlertTriangle,
  UsersRound, BookOpen, MapPin, Wrench, Lock, Settings,
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-14 bg-white border-r border-gray-100 flex flex-col items-center py-3 gap-1 z-30 shadow-sm">
      {/* Logo */}
      <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center mb-3">
        <span className="text-white font-bold text-sm">e</span>
      </div>
      {sidebarIcons.map((Icon, i) => (
        <button
          key={i}
          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
            i === 6
              ? "bg-violet-100 text-violet-600"
              : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          }`}
        >
          <Icon size={17} />
        </button>
      ))}
    </aside>
  );
}