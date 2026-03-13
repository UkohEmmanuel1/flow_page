import Navbar from "../_components/navbar"
import Sidebar from '../_components/sidebar';
import Body from '../_components/applicants_details';

import Hero from '../_components/applicants_details_hero';





export default function JobApplicantPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Sidebar />
      <Navbar />

      {/* Main content */}
      <main className="ml-14 pt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-5">
          <Hero />
          <Body />
         
         
        </div>
      </main>
    </div>
  );
}