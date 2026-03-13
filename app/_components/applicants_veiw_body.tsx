import React from "react";
import {
  Plus,
  Paperclip,
  Download,
  Share2,
  Heart,
  MapPin,
  Briefcase,
  DollarSign,
  GraduationCap,
  Star,
  CheckCircle2,
  Target,
  BookOpen,
  Award,
  FileText,
  Link2,
  Building2,
  User,
} from "lucide-react";
import Image from 'next/image'


const toolLogos = [
  { name: 'Instagram', src: '/asset_two/one.png' },
  { name: 'Figma', src: '/asset_two/two.png' },
  { name: 'Slack', src: '/asset_two/three.png' },
  { name: 'Dropbox', src: '/asset_two/four.png' },
  { name: 'Jira', src: '/asset_two/five.png' },
  { name: 'SharePoint', src: '/asset_two/six.png' }
];


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


// --- MAIN COMPONENT ---
export default function ApplicantDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6 flex flex-col xl:flex-row gap-6 font-sans text-slate-800">
      {/* LEFT SIDEBAR */}
      <aside className="w-full xl:w-[280px] flex-shrink-0 flex flex-col gap-4">
        <SidebarWidget title="Assigned To" actionIcon={<Plus size={16} />}>
          <AvatarStack />
        </SidebarWidget>

        <SidebarWidget title="Attachments" actionIcon={<Plus size={16} />}>
          <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg text-sm text-slate-500 cursor-pointer hover:bg-slate-50 transition-colors">
            <span>Attach File</span>
            <Paperclip size={16} />
          </div>
        </SidebarWidget>

        <SidebarWidget title="Shared with" actionIcon={<Plus size={16} />}>
          <AvatarStack />
        </SidebarWidget>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-xs text-slate-500 space-y-4">
          <div>
            <span className="font-semibold text-slate-700">You</span> edited
            this
            <div className="mt-1">1 minutes ago</div>
          </div>
          <div>
            <span className="font-semibold text-slate-700">You</span> created
            this
            <div className="mt-1">11 month ago</div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Top Tabs */}
        <nav className="flex border-b border-slate-200 px-6 overflow-x-auto hide-scrollbar">
          {["Applicant Details", "Interview Summary", "Feedback Analysis"].map(
            (tab, i) => (
              <button
                key={tab}
                className={`whitespace-nowrap py-4 px-2 mr-6 text-sm font-semibold border-b-2 transition-colors ${
                  i === 0
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab}
              </button>
            ),
          )}
        </nav>

        <div className="p-6 md:p-8">
          {/* Profile Header */}
          <header className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-10">
            <div className="flex gap-5">
              <div className="relative w-20 h-20 rounded-full border border-slate-200 overflow-hidden flex-shrink-0">
                <img
                  src="/asset_two/Avatar.png"
                  alt="Charlotte"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold text-slate-900">
                    Charlotte
                  </h1>
                  <CheckCircle2
                    size={20}
                    className="text-green-500 fill-green-100"
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                  <Briefcase size={14} /> Software Developer
                  <div className="flex items-center text-yellow-400 ml-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} size={12} className="fill-current" />
                    ))}
                    <Star size={12} className="text-slate-300" />
                    <span className="text-slate-400 text-xs ml-1">
                      (142) Ratings
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} /> Bangalore, Karnataka
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign size={14} /> Package (Yearly) : NGN10,000 -
                    NGN20,000
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} /> 1 Year Experience
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap size={14} /> ACA, BSc. Accounting
                  </div>
                </div>

                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[10px] font-semibold tracking-wide">
                    💼 Full Time
                  </span>
                  <span className="px-2 py-1 bg-rose-50 text-rose-600 rounded text-[10px] font-semibold tracking-wide">
                    ⚡ Immediate Joiner
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 w-full lg:w-auto">
              <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <Download size={16} /> Download CV
              </button>
              <button className="p-2 border border-purple-200 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                <Heart size={18} />
              </button>
              <button className="p-2 border border-purple-200 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            {/* Left Column (Wider) */}
            <div className="xl:col-span-2 space-y-10">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
                Candidate Profile Information
              </h2>

              <ProfileSection
                icon={<Target size={18} />}
                title="Career Objective :"
              >
                <p className="text-sm text-slate-600 leading-relaxed">
                  Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                  Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam
                  rebum sit ipsum ipsum erat et kasd. Est amet sit vero sanctus
                  labore no sed ipsum ipsum nonumy vero sanctus labore. A
                  officiis optio temporibus minima facilis.
                  <br />
                  <br />
                  Sit ipsum sanctus ea magna est, Aliquyam sed amet. Kasd diam
                  rebum sit ipsum ipsum erat et kasd. Est amet sit vero sanctus
                  labore no sed ipsum ipsum nonumy vero sanctus labore.
                </p>
              </ProfileSection>

              <ProfileSection icon={<BookOpen size={18} />} title="Education :">
                <div className="space-y-6">
                  <TimelineItem
                    title="Bachelors of science in computer science"
                    subtitle="Dwayne University • Nellore"
                    date="2019 Mar - 2024 Apr"
                  />
                  <TimelineItem
                    title="Intermediate (MPC)"
                    subtitle="Sprect College • Warangal"
                    date="2017 Mar - 2019 Apr"
                  />
                </div>
              </ProfileSection>

              <ProfileSection
                icon={<Award size={18} />}
                title="Certifications :"
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">
                      Web Development (3 Months)
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      EMC Solutions Pvt Ltd
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">
                      Python Development (6 Months)
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Dabre Services Pvt Ltd
                    </p>
                  </div>
                </div>
              </ProfileSection>

              <ProfileSection
                icon={<FileText size={18} />}
                title="Cover Letter :"
              >
                <div className="text-sm text-slate-600 space-y-4 leading-relaxed bg-slate-50/50 p-4 rounded-lg">
                  <p>
                    [Your Name]
                    <br />
                    [Your Address]
                    <br />
                    [City, State, ZIP Code]
                  </p>
                  <p>Dear [Hiring Manager's Name],</p>
                  <p>
                    I am writing to express my interest in the Montessori
                    Teacher position at [School Name], as advertised on [where
                    you found the job posting]. With a [relevant qualification,
                    e.g., Montessori Diploma, Bachelor's Degree in Early
                    Childhood Education] and over [X years] of experience in
                    fostering a positive learning environment for young
                    children, I am excited about the opportunity to contribute
                    to your school's mission...
                  </p>
                </div>
              </ProfileSection>

              <ProfileSection icon={<Link2 size={18} />} title="References :">
                <div className="space-y-8">
                  <ReferenceItem
                    name="Nicole Chiu"
                    role="Software Developer"
                    company="Spotech Technical Solutions"
                    phone="+91 7865443679"
                    email="nchiu@email.com"
                    location="Hyderabad"
                  />
                  <ReferenceItem
                    name="Nicole Chiu"
                    role="Software Developer"
                    company="Spotech Technical Solutions"
                    phone="+91 7865443679"
                    email="nchiu@email.com"
                    location="Hyderabad"
                  />
                </div>
              </ProfileSection>
            </div>

            {/* Right Column (Narrower Sidebar) */}
            <div className="space-y-8">
              {/* Skills */}
              <RightPanelSection title="Skills">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "Javascript", "Angular", "React"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>

                <div className="flex gap-3">
                  {toolLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center overflow-hidden"
                    >
                      {/* 2. Map through the array and render the image */}
                      <Image
                        src={logo.src}
                        alt={`${logo.name} tool`}
                        width={20}
                        height={20}
                        // object-contain ensures the logo fits perfectly without being stretched
                        className="w-full h-full object-contain p-1.5"
                      />
                    </div>
                  ))}
                </div>
              </RightPanelSection>

              {/* Languages */}
              <RightPanelSection title="Languages">
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="text-slate-500 w-20 inline-block">
                      English :
                    </span>{" "}
                    <span className="font-medium">Fluent</span>
                  </p>
                  <p>
                    <span className="text-slate-500 w-20 inline-block">
                      Hindi :
                    </span>{" "}
                    <span className="font-medium">Intermediate</span>
                  </p>
                  <p>
                    <span className="text-slate-500 w-20 inline-block">
                      Telugu :
                    </span>{" "}
                    <span className="font-medium">Expert</span>
                  </p>
                </div>
              </RightPanelSection>

              {/* Personal Information */}
              <RightPanelSection title="Personal Information">
                <div className="space-y-4 text-sm">
                  <KeyValue label="Full Name" value="Brenda Simpson" />
                  <KeyValue label="Email" value="brendra@gmail.com" />
                  <KeyValue label="D.O.B" value="13 Jan 2024" />
                  <KeyValue label="Gender" value="Female" />
                  <KeyValue label="Age" value="35" />
                  <KeyValue label="Mobile" value="+91 7865343874" />
                  <KeyValue label="Mother Tongue" value="Telugu" />
                  <KeyValue label="Marital Status" value="Unmarried" />
                  <KeyValue label="Blood Group" value="O +ve" />
                  <KeyValue
                    label="Address"
                    value="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-"
                  />
                </div>
                <div className="mt-6 flex gap-2">
                  <span className="text-sm text-slate-500 mr-2">Social :</span>
                  {["fb", "tw", "ig", "in"].map((s) => (
                    <div
                      key={s}
                      className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-[10px] text-slate-400 uppercase"
                    >
                      {s[0]}
                    </div>
                  ))}
                </div>
              </RightPanelSection>

              {/* Work History */}
              <RightPanelSection title="Work History">
                <div className="relative border-l border-slate-200 ml-3 space-y-8 pb-4">
                  <TimelineWork
                    company="AP Nigeria Ltd :"
                    role="Account Trainee Mgr"
                    duration="5years"
                    date="2019 Mar - 2024 Apr"
                  />
                  <TimelineWork
                    company="May and Baker :"
                    role="Account Trainee"
                    duration="5years"
                    date="2019 Mar - 2024 Apr"
                  />
                </div>
              </RightPanelSection>

              {/* Hobbies & Publications */}
              <RightPanelSection title="Hobbies and Publications">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-purple-600">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                        <BookOpen size={12} />
                      </div>
                      Publications :
                    </div>
                    <ul className="text-xs text-slate-600 space-y-3 pl-8 list-disc marker:text-slate-300">
                      <li>
                        "One of a Kind Design," Web Design Book, Poulin
                        Publishing, 2018
                      </li>
                      <li>
                        "Usable Information Architecture," SitePoint, Feb 2019
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-purple-600">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                        <Heart size={12} />
                      </div>
                      Activities and Interests :
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 pl-8 list-disc marker:text-slate-300">
                      <li>Community Involvement</li>
                      <li>Yoga</li>
                      <li>Travel</li>
                      <li>Art</li>
                    </ul>
                  </div>
                </div>
              </RightPanelSection>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- SUB COMPONENTS FOR CLEAN CODE ---

const SidebarWidget = ({
  title,
  actionIcon,
  children,
}: {
  title: string;
  actionIcon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-sm font-bold text-slate-700">{title}</h3>
      {actionIcon && (
        <button className="w-6 h-6 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center hover:bg-purple-100 transition-colors">
          {actionIcon}
        </button>
      )}
    </div>
    {children}
  </div>
);

const AvatarGroup = () => (
  <div className="flex items-center -space-x-2">
    {[1, 2, 3].map((i) => (
      <img
        key={i}
        src={`/asset_two/Frame.png`}
        alt="User"
        className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"
      />
    ))}
    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-800 text-white flex items-center justify-center text-[10px] font-medium z-10">
      +2
    </div>
  </div>
);

const ProfileSection = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-800 text-[15px]">{title}</h3>
    </div>
    <div className="pl-11">{children}</div>
  </section>
);

const TimelineItem = ({
  title,
  subtitle,
  date,
}: {
  title: string;
  subtitle: string;
  date: string;
}) => (
  <div>
    <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
    <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
    <p className="text-[11px] font-medium text-slate-400 mt-1 tracking-wide uppercase">
      ({date})
    </p>
  </div>
);

const ReferenceItem = ({
  name,
  role,
  company,
  phone,
  email,
  location,
}: any) => (
  <div className="text-sm grid grid-cols-[100px_1fr] gap-y-3">
    <span className="text-slate-500">Name :</span>{" "}
    <span className="font-medium text-slate-700">{name}</span>
    <span className="text-slate-500">Designation :</span>{" "}
    <span className="text-slate-700">{role}</span>
    <span className="text-slate-500">Company Name :</span>{" "}
    <span className="text-slate-700">{company}</span>
    <span className="text-slate-500">Mobile :</span>{" "}
    <span className="text-slate-700">{phone}</span>
    <span className="text-slate-500">Email :</span>{" "}
    <span className="text-slate-700">{email}</span>
    <span className="text-slate-500">Location :</span>{" "}
    <span className="text-slate-700">{location}</span>
  </div>
);

const RightPanelSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="border border-slate-200 rounded-xl p-5 shadow-sm bg-white">
    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5 pb-3 border-b border-slate-100">
      {title}
    </h3>
    {children}
  </div>
);

const KeyValue = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-4">
    <span className="text-slate-500 w-28 shrink-0">{label}</span>
    <span className="font-medium text-slate-800 break-words">{value}</span>
  </div>
);

const TimelineWork = ({ company, role, duration, date }: any) => (
  <div className="relative pl-6">
    {/* Purple Timeline Dot */}
    <div className="absolute -left-[14px] top-0 w-7 h-7 rounded-full bg-purple-100 border-4 border-white flex items-center justify-center text-purple-600">
      <Briefcase size={10} />
    </div>
    <h4 className="text-sm font-bold text-slate-800">{company}</h4>
    <p className="text-sm text-slate-600 mt-1">{role}</p>
    <p className="text-xs text-slate-500">{duration}</p>
    <p className="text-[11px] font-medium text-slate-400 mt-1 tracking-wide uppercase">
      ({date})
    </p>
  </div>
);
