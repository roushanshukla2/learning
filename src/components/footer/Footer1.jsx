import React, { useState } from "react";
const Footer1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const certification = ["AWS", "Docker", "Kubernate", "Kafka"];
  return (
    <div className="text-gray-800">
      <div className="flex flex-col md:flex-row md:justify-evenly font-semibold ">
        <h1 className="text-3xl font-bold text-center">Learning Platfrom</h1>
        <button className="text-xl text-blue-500 cursor-pointer">About</button>
        <button className="text-xl text-blue-500  cursor-pointer">
          Our Team
        </button>
        <button className="text-xl text-blue-500 cursor-pointer">
          Careers
        </button>
        <button className="text-xl text-blue-500 cursor-pointer">
          Services
        </button>
        <button className="text-xl text-blue-500 cursor-pointer">
          Contact us
        </button>
      </div>
      <div className="sm:flex justify-center">
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center">
          <div className="">
            <h1 className="text-xl md:text-2xl font-semibold  md:font-medium">
              Programming Language
            </h1>
            <p className="text-lg">Java</p>
            <p className="text-lg">Python</p>
            <p className="text-lg">C++</p>
            <p className="text-lg">C#</p>
            <p className="text-lg">Go (Golang)</p>
          </div>
          <div className="">
            <h1 className="text-xl md:text-2xl font-semibold  md:font-medium">
              Web Technology
            </h1>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>ReactJs</p>
            <p>NodeJs</p>
            <p>NextJs</p>
          </div>
          <div className=" ">
            <h1 className="text-xl md:text-2xl font-semibold  md:font-medium">
              DevOps
            </h1>
            <p>Git</p>
            <p>Github</p>
            <p>AWS</p>
            <p>Kubernates</p>
            <p>Azure</p>
          </div>
          <div className=" ">
            <h1 className="text-xl md:text-2xl font-semibold  md:font-medium">
              Preparation Guide
            </h1>
            <p>Apptitude Guide</p>
            <p>Interview</p>
            <p>Company wise</p>
          </div>
          <div className=" ">
            <h1 className="text-xl md:text-2xl font-semibold  md:font-medium ">
              Computer Science
            </h1>
            <p>Operating System</p>
            <p>Computer Network</p>
            <p>DBMS</p>
            <p>Digital Logic</p>
            <p>Software Engineering</p>
          </div>
          <div className="">
            <h1 className="text-xl md:text-2xl font-semibold  md:font-medium ">
              Certification
            </h1>
            <p>Frontend Certificate</p>
            <p>Python Certificate</p>
            <p>Java Certificate</p>
            <p>Nodejs Certificate</p>
            <p>Javascript Certificate</p>
          </div>
        </div>
      </div>
    </div>

    // <div className="sm:grid">
    //   <div onClick={() => setIsOpen(!isOpen)}>
    //     <h1>Certification</h1>
    //   </div>
    //   {isOpen && (
    //     <div>
    //       {certification.map((ele) => (
    //         <p>{ele}</p>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
};

export default Footer1;
