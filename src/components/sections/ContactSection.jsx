// src/components/sections/ContactSection.jsx
import React from "react";
import defaultImage from "../../assets/images/default.jpg";
import Divider from "../common/Divider";

const ContactInfo = ({ label, children }) => (
  <div className="mb-8 sm:mb-12">
    <p className="text-[#1a2355]/70 uppercase tracking-wider mb-3 text-xs sm:text-sm">
      {label}
    </p>
    {children}
  </div>
);

const TeamMemberCard = ({ role, name, extraInfo }) => (
  <div className="text-center">
    <p className="text-xs sm:text-sm text-[#d4af37] mb-1">{role}</p>
    <p className="font-['Playfair_Display'] text-sm sm:text-base">{name}</p>
    {extraInfo && <p className="text-xs text-white/70">{extraInfo}</p>}
  </div>
);

const ContactSection = () => {
  const otherProjects = [
    {
      title: "SWASTIK SARVAM",
      location: "Andheri(E), Mumbai",
      image: "/images/projects/sarvam.jpg",
    },
    {
      title: "JADE PARK",
      location: "Vile Parle(W), Mumbai",
      image: "/images/projects/jadepark.jpg",
    },
    {
      title: "SWASTIK HIGHSCAPE CITY",
      location: "Chembur(E), Mumbai",
      image: "/images/projects/highscape.jpg",
    },
    {
      title: "SWASTIK TREESOURUS",
      location: "Malad(W), Mumbai",
      image: "/images/projects/treesourus.jpg",
    },
  ];

  const teamMembers = {
    row1: [
      { role: "Design Architect", name: "Karch Architects" },
      { role: "Liaising Architect", name: "Sai Sampada DBS" },
      { role: "Landscaping & Interior Design", name: "Madane Design Workshop" },
    ],
    row2: [
      { role: "RCC Consultant", name: "System Structural Consultants Pvt Ltd" },
      { role: "MEP Consultant", name: "Mr. Rupesh Gujarathi" },
      { role: "PMC", name: "Epsilon Project Management" },
    ],
    row3: [
      { role: "Vastu Consultant", name: "Kamlesh Vastu Engineer" },
      { role: "Legal Consultant", name: "Lexicon Law Partners" },
    ],
  };

  return (
    <section id="contact">
      {/* Contact Information - Premium Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f8f2ea] to-[#f5e6d8] relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-12 sm:mb-16">
            <p className="text-[#d4af37] font-['Playfair_Display'] text-base sm:text-lg mb-2">
              SWASTIK GROUP
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] text-[#1a2355] mb-1">
              BUILDERS & DEVELOPERS
            </h1>
            <p className="text-[#1a2355]/80 italic text-sm sm:text-base">
              A legacy of trust
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] text-[#1a2355] mb-4 sm:mb-6 px-4">
            WHERE SERENITY EMBRACES YOUR SOUL
          </h2>
          <Divider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto mt-8">
            {/* Sales Office */}
            <ContactInfo label="Swastik Sales Office">
              <p className="text-base sm:text-lg font-['Playfair_Display'] text-[#1a2355] mb-2">
                SWASTIK PEARL, Building No 8
              </p>
              <p className="text-[#1a2355]/80 mb-3 text-sm sm:text-base">
                Near Tagore Nagar Market, Tagore Nagar
                <br />
                Vikhroli (E), Mumbai - 400 083
              </p>
              <div className="text-xl sm:text-2xl font-['Playfair_Display'] text-[#d4af37] space-y-2">
                <a
                  href="tel:+919833108888"
                  className="block hover:text-[#b8961f] transition-colors"
                >
                  M: +91 98 33 10 88 88
                </a>
                <a
                  href="tel:+912250646565"
                  className="block hover:text-[#b8961f] transition-colors"
                >
                  T: 022 5064 6565
                </a>
              </div>
            </ContactInfo>

            {/* Corporate Office */}
            <ContactInfo label="Corporate Office">
              <p className="text-base sm:text-lg font-['Playfair_Display'] text-[#1a2355] mb-2">
                SUVASYA BUILDERS AND DEVELOPERS LLP
              </p>
              <p className="text-[#1a2355]/80 mb-3 text-sm sm:text-base">
                312, Swastik Disa Corporate Park, LBS Marg
                <br />
                Opp. Shreyas Cinemas, Ghatkopar West
                <br />
                Mumbai - 400 086, INDIA
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+912266890000"
                  className="block text-[#d4af37] hover:text-[#b8961f] transition-colors text-sm sm:text-base"
                >
                  T: 022 6689 0000
                </a>
                <a
                  href="mailto:sales@swastikgroup.in"
                  className="block text-[#d4af37] hover:text-[#b8961f] transition-colors text-sm sm:text-base"
                >
                  sales@swastikgroup.in
                </a>
                <a
                  href="https://www.swastikproperties.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#d4af37] hover:text-[#b8961f] transition-colors text-sm sm:text-base"
                >
                  www.swastikproperties.in
                </a>
              </div>
            </ContactInfo>
          </div>

          <a
            href="https://maps.app.goo.gl/RvYFpMhGK9JhAfNb7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#b8961f] transition-all duration-300 group mt-8 text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="border-b border-[#d4af37] group-hover:border-[#b8961f]">
              CLICK TO VIEW ON GOOGLE MAP
            </span>
          </a>
        </div>
      </div>

      {/* Team & RERA Section */}
      <div className="py-12 sm:py-16 bg-[#1a2355] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Team */}
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] mb-6 sm:mb-8">
              EXPERT TEAM
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {teamMembers.row1.map((member, idx) => (
                  <TeamMemberCard key={idx} {...member} />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {teamMembers.row2.map((member, idx) => (
                  <TeamMemberCard key={idx} {...member} />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
                {teamMembers.row3.map((member, idx) => (
                  <TeamMemberCard key={idx} {...member} />
                ))}
              </div>
            </div>
          </div>

          {/* MahaRERA Details */}
          <div className="border-t border-white/10 pt-8 sm:pt-12">
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] mb-6 sm:mb-8 text-center">
              MAHARERA DETAILS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
              <div className="bg-white/5 p-4 sm:p-6 border border-white/10">
                <h3 className="text-lg sm:text-xl font-['Playfair_Display'] mb-3 sm:mb-4">
                  Project Registration
                </h3>
                <p className="mb-3">
                  <a
                    href="https://maharera.maharashtra.gov.in/"
                    className="text-[#d4af37] hover:text-[#b8961f] hover:underline transition-colors text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://maharera.maharashtra.gov.in/
                  </a>
                </p>
                <p className="text-sm sm:text-base">
                  MahaRERA Registration No:{" "}
                  <span className="text-[#d4af37]">P51800045216</span>
                </p>
              </div>

              <div className="bg-white/5 p-4 sm:p-6 border border-white/10">
                <h3 className="text-lg sm:text-xl font-['Playfair_Display'] mb-3 sm:mb-4">
                  Project Finance
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-[#d4af37] text-lg sm:text-xl">
                      B
                    </span>
                  </div>
                  <div>
                    <p className="text-[#d4af37] font-medium text-sm sm:text-base">
                      BAJAJ HOUSING
                    </p>
                    <p className="text-xs sm:text-sm">FINANCE LIMITED</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl font-['Playfair_Display'] mb-4 sm:mb-6">
                Project Disclaimer:
              </h3>
              <div className="text-white/80 space-y-4 leading-relaxed text-xs sm:text-sm">
                <p>
                  The project is currently marketed as Platinum Collection,
                  exclusively for 12th floors and above, and is registered on
                  the MahaRERA website as Swastik bearing MahaRERA registration
                  no. P51800045216.
                </p>
                <p>
                  Disclaimer - All dimensions mentioned in the drawings may
                  vary/differ due to construction contingencies and site
                  conditions. Actual product/development and any other aspect
                  may differ from what is portrayed herein. All layouts, plans,
                  specifications, dimensions, measurements and locations are
                  indicative and not to scale and are subject to change as may
                  be decided by the company or competent authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Projects Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f8f2ea] to-[#f5e6d8]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#1a2355] text-2xl sm:text-3xl font-['Playfair_Display'] text-center mb-8 sm:mb-12">
            YOU MIGHT ALSO LIKE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white overflow-hidden border-4 border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-1000 shadow-lg hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    onError={(e) => {
                      e.target.src = defaultImage; // Fallback to default image
                      e.target.onerror = null; // Prevent infinite loop
                    }}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-[#1a2355] text-lg sm:text-xl font-['Playfair_Display'] mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-[#1a2355]/70 text-xs sm:text-sm">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#d4af37]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-[#d4af37] border-4 hover:bg-[#f5e6d8] hover:border-[#d4af37]/60 hover:text-[#d4af37] text-white py-2 sm:py-3 px-6 sm:px-8 font-medium tracking-wider transition-all duration-1000 shadow-xl hover:shadow-none hover:scale-105 text-sm sm:text-base">
              VIEW ALL PROJECTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
