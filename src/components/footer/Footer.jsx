import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

export default function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };
  const logos = [
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    MdMarkEmailRead,
  ];
  const sections = [
    {
      id: "programming",
      title: "Programming Language",
      items: ["Java", "Python", "C++", "C#", "Go (Golang)"],
    },
    {
      id: "web",
      title: "Web Technology",
      items: ["HTML", "CSS", "Javascript", "ReactJs", "NodeJs", "NextJs"],
    },
    {
      id: "devops",
      title: "DevOps",
      items: ["Git", "Github", "AWS", "Kubernate", "Azure"],
    },
    {
      id: "preparation",
      title: "Preparation Guide",
      items: ["Interview", "Apptitude Guide", "Company wise"],
    },
    {
      id: "computer",
      title: "Computer Science",
      items: [
        "Operating System",
        "Computer Network",
        "DBMS",
        "Digital Logic",
        "Software Engineering",
      ],
    },
    {
      id: "certification",
      title: "Certification",
      items: [
        "Frontend Certificate",
        "Python Certificate",
        "Java Certificate",
        "Node Certificate",
        "Javascript Certificate",
      ],
    },
  ];

  return (
    <div className="w-full mx-auto p-4">
      <div className="sm:flex justify-center">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center">
          {sections.map((section) => (
            <div key={section.id} className="mb-4 sm:mb-0">
              {/* Mobile View - Clickable Header */}
              <div className="sm:hidden">
                <div
                  className="flex items-center justify-between cursor-pointer p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => toggleSection(section.id)}
                >
                  <h1 className="text-xl font-semibold text-gray-800">
                    {section.title}
                  </h1>
                  <div className="ml-2">
                    {openSections[section.id] ? (
                      <FaChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <FaChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
              </div>

              {/* Desktop View - Always Visible Header */}
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-semibold md:font-medium text-gray-800 mb-3">
                  {section.title}
                </h1>
              </div>
              <div
                className={`mt-3 sm:mt-0 ${
                  openSections[section.id] ? "block" : "hidden"
                } sm:block`}
              >
                <div className="space-y-2">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="text-gray-700 px-3 py-2  text-sm font-medium  transition-colors cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* //! Social Media */}
      <hr />
      <div className="flex flex-col justify-around md:justify-evenly my-3">
        <h1 className="text-xl sm:text-2xl font-semibold text-center">Learning Point</h1>
        <div className="flex flex-wrap justify-center gap-3 items-center h-10">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <MdMarkEmailRead />
        </div>
      </div>

      {/* //!   */}
      <hr />
      <div className="ml-3 sm:flex sm:justify-center sm:gap-4">
        <div className="cursor-pointer text-lg font-semibold">About</div>
        <div className="cursor-pointer text-lg font-semibold">Career</div>
        <div className="cursor-pointer text-lg font-semibold">Our Team</div>
        <div className="cursor-pointer text-lg font-semibold">Internship</div>
        <div className="cursor-pointer text-lg font-semibold">
          Privacy Policy
        </div>
      </div>
    </div>
  );
}