import React from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Printer, MoreVertical } from 'lucide-react';

export default function InterviewHeader() {
  return (
    <header className="flex items-center justify-between w-full bg-white py-4 px-6 border-b border-slate-200">
      
      {/* Left Section: Title & Status Badge */}
      <div className="flex items-center gap-4">
        <h1 className="text-[22px] font-bold text-[#2D3142]">
          Interview -Ayodeji Babashola
        </h1>
        <span className="px-4 py-1.5 bg-[#E1F4FF] text-[#00A3FF] text-sm font-medium rounded-full">
          Submitted
        </span>
      </div>

      {/* Right Section: Action Buttons */}
      <div className="flex items-center gap-2.5">
        
        {/* Create Dropdown Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-[#A3AAB5] hover:bg-[#8F96A3] text-white text-sm font-medium rounded-md transition-colors">
          Create
          <ChevronDown size={16} />
        </button>

        {/* Gray Icon Buttons */}
        <div className="flex items-center gap-2.5">
          <IconButton icon={<ChevronLeft size={18} strokeWidth={2.5} />} />
          <IconButton icon={<ChevronRight size={18} strokeWidth={2.5} />} />
          <IconButton icon={<Printer size={18} strokeWidth={2} />} />
          <IconButton icon={<MoreVertical size={18} strokeWidth={2} />} />
        </div>

        {/* Save Button */}
        <button className="ml-1 px-8 py-2 bg-[#9059FF] hover:bg-[#7D4AE6] text-white text-sm font-medium rounded-md transition-colors">
          Save
        </button>
      </div>
      
    </header>
  );
}

// Reusable sub-component for the square gray icon buttons
const IconButton = ({ icon }: { icon: React.ReactNode }) => (
  <button className="flex items-center justify-center w-9 h-9 bg-[#A3AAB5] hover:bg-[#8F96A3] text-[#2D3142] rounded-md transition-colors">
    {icon}
  </button>
);