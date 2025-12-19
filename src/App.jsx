// import React, {useState} from 'react';
// import { Download, Italic } from 'lucide-react';
// import profilePic from "./assets/profile.jpg";
// import AP from "./assets/ap1.jpg";
// import ELT from "./assets/elt.png";
// import meeting from "./assets/Meeting.jfif";
// import { SiGithub, SiLeetcode, SiLinkedin} from "react-icons/si";



// export default function Portfolio() {
//   const projects = [
//     {
//       title: "Distributed Application Monitoring System",
//       description: "Tech Stack: Python, Kafka, Docker. This project is designed to simulate API traffic, log requests, and monitor them using Kafka, MySQL, and Grafana. It provides a complete pipeline for generating, processing, storing, and visualizing logs, enabling real-time monitoring and analysis of API performance and errors.",
//       github: "https://github.com/Vasnitha16/Application_Monitoring.git",
//       image: AP
//     },
//     {
//       title: "ELT System", 
//       description: "Tech Stack: PostgreSQL, Python, Angular JS. This project implements a complete ELT (Extract, Load, Transform) pipeline with support for:Local data extraction,SFTP file extraction,YAML configuration management with versioning,Schema validation and standardization with frontend integration with admin and user side. Also, backend coverage testing. ",
//       github: "https://github.com/greeshmadh/ELT_System.git",
//       image: ELT
//     },
//     {
//       title: "Meeting Room Booking System",
//       description: "Tech Stack: Java, Spring Boot, MySQL. This project is built using Object-Oriented Design and Programming principles to enable users to manage meeting room reservations. I focused on developing the Meeting Room Analytics module, which provides insights such as peak booking hours, and reservation patterns.",
//       github: "https://github.com/harinii-b/meeting-room-booking.git",
//       image: meeting
//     }
//   ];

//   const scrollToAbout = () => {
//     document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
//   };

//   const downloadResume = () => {
//   const link = document.createElement("a");
//   link.href = "https://drive.google.com/uc?export=download&id=1-QGqtpEgwhUTRxBaNQsyKsHRdDCerT65";
//   link.download = "Greeshma_Resume.pdf";
//   link.click();
// };


//   // Decorative molecule icon component
//   const MoleculeIcon = ({ className = "" }) => (
// <svg
//     className={className}
//     width="70"
//     height="70"
//     viewBox="0 0 70 70"
//     fill="none"
//   >
//     {/* Row 1 */}
//     <circle cx="35" cy="7" r="5" fill="#456882" opacity="0.9" />
//     <circle cx="60" cy="15" r="5" fill="#456882" opacity="0.5" />
//     <circle cx="50" cy="7" r="5" fill="#456882" opacity="0.7" />
//     <circle cx="20" cy="5" r="5" fill="#456882" opacity="0.9" />

//     {/* Row 2 */}
//     <circle cx="25" cy="20" r="5" fill="#456882" opacity="0.7" />
//     <circle cx="45" cy="20" r="5" fill="#456882" opacity="0.7" />
//     <circle cx="12" cy="15" r="5" fill="#456882" opacity="0.7" />
//     <circle cx="65" cy="29" r="5" fill="#456882" opacity="0.7" />

//     {/* Row 3 */}
//     <circle cx="18" cy="32" r="5" fill="#456882" opacity="0.85" />
//     <circle cx="35" cy="32" r="5" fill="#456882" opacity="0.6" />
//     <circle cx="52" cy="32" r="5" fill="#456882" opacity="0.85" />
//     <circle cx="5" cy="38" r="5" fill="#456882" opacity="0.85" />
//     <circle cx="63" cy="40" r="5" fill="#456882" opacity="0.9" />

//     {/* Row 4 */}
//     <circle cx="25" cy="45" r="5" fill="#456882" opacity="0.7" />
//     <circle cx="45" cy="45" r="5" fill="#456882" opacity="0.7" />
//     <circle cx="11" cy="53" r="5" fill="#456882" opacity="0.85" />
//     <circle cx="51" cy="57" r="5" fill="#456882" opacity="0.85" />

//     {/* Row 5 */}
//     <circle cx="35" cy="57" r="5" fill="#456882" opacity="0.9" />
//     <circle cx="24" cy="65" r="5" fill="#456882" opacity="0.9" />
//   </svg>
//   );

//   // Decorative wave pattern
//   const WavePattern = ({ className = "" }) => (
//     <svg className={className} width="100" height="30" viewBox="0 0 100 30" fill="none">
//       <path d="M0 10 Q 25 5, 50 10 T 100 10" stroke="#456882" strokeWidth="2" fill="none" opacity="0.3"/>
//       <path d="M0 15 Q 25 10, 50 15 T 100 15" stroke="#456882" strokeWidth="2" fill="none" opacity="0.3"/>
//       <path d="M0 20 Q 25 15, 50 20 T 100 20" stroke="#456882" strokeWidth="2" fill="none" opacity="0.3" />
//       <path d="M0 25 Q 25 20, 50 25 T 100 25" stroke="#456882" strokeWidth="2" fill="none" opacity="0.3" />
//     </svg>
//   );

//   // Decorative wave pattern
//   const WavePatternWhite = ({ className = "" }) => (
//     <svg className={className} width="100" height="30" viewBox="0 0 100 30" fill="none">
//       <path d="M0 10 Q 25 5, 50 10 T 100 10" stroke="#eef5faff" strokeWidth="2" fill="none" opacity="0.3"/>
//       <path d="M0 15 Q 25 10, 50 15 T 100 15" stroke="#eef5faff" strokeWidth="2" fill="none" opacity="0.3"/>
//       <path d="M0 20 Q 25 15, 50 20 T 100 20" stroke="#eef5faff" strokeWidth="2" fill="none" opacity="0.3" />
//       <path d="M0 25 Q 25 20, 50 25 T 100 25" stroke="#eef5faff" strokeWidth="2" fill="none" opacity="0.3" />
//     </svg>
//   );

//   // Decorative four vertical dots
//   const FourDots = ({ className = "" }) => (
//     <svg 
//       className={className} 
//       width="12" 
//       height="60" 
//       viewBox="0 0 12 60" 
//       fill="none"
//     >
//       <circle cx="6" cy="6"  r="3" fill="#0d2c46ff" opacity="1" />
//       <circle cx="6" cy="20" r="3" fill="#0d2c46ff" opacity="1" />
//       <circle cx="6" cy="34" r="3" fill="#0d2c46ff" opacity="1" />
//       <circle cx="6" cy="48" r="3" fill="#0d2c46ff" opacity="1" />
//     </svg>
//   );

//   // Decorative four horizontal dots
//   const FourDotsHorizontal = ({ className = "" }) => (
//     <svg
//       className={className}
//       width="60"
//       height="12"
//       viewBox="0 0 60 12"
//       fill="none"
//     >
//       <circle cx="6"  cy="6" r="3" fill="#0d2c46ff" opacity="1" />
//       <circle cx="20" cy="6" r="3" fill="#0d2c46ff" opacity="1" />
//       <circle cx="34" cy="6" r="3" fill="#0d2c46ff" opacity="1" />
//       <circle cx="48" cy="6" r="3" fill="#0d2c46ff" opacity="1" />
//     </svg>
//   );
//   // --------- SKILLS POPUP STATE --------- //

//   const [showSkills, setShowSkills] = useState(false);



//   return (
//     <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
//       {/* Page 1 - Hero/Intro */}
//       <section className="h-screen flex flex-col relative snap-start">
//         {/* Top Navigation */}
//         <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-6 z-10">
//           <button 
//             onClick={scrollToAbout}
//             className="px-6 py-3 bg-[#456882] text-white text-lg font-semibold rounded hover:bg-[#527A97] transition-colors"
//           >
//             About me
//           </button>
//           <button 
//             onClick={downloadResume}
//             className="px-6 py-3 bg-[#E3E3E3] text-gray-800 text-lg font-semibold rounded hover:bg-gray-300 transition-colors flex items-center gap-2"
//           >
//             Download Resume <Download size={20} />
//           </button>
//           {/* -------- SKILLS BUTTON ---------- */}

//           <button

//             onClick={() => setShowSkills(!showSkills)}

//             className="absolute right-[700px] top-[20px]  

//                        px-5 py-3 bg-[#234C6A] text-white text-lg rounded-lg 

//                        hover:bg-[#456882] shadow-lg"

//           >

//             Skills

//           </button>



//           {/* -------- SKILLS POPUP ---------- */}

//           {showSkills && (

//             <div

//               className="absolute right-[470px] top-[70px]

//                          w-72 p-5 rounded-xl shadow-2xl border 

//                          bg-white/20 backdrop-blur-xl border-white/30 z-20"

//             >

//               <h3 className="text-xl font-bold text-[#1B3C53] mb-3">My Skills</h3>



//               <ul className="text-[#1B3C53] space-y-1 font-medium">

//                 <li>• Python</li>

//                 <li>• Cloud Computing Basics</li>

//                 <li>• Java</li>

//                 <li>• Machine Learning</li>

//                 <li>• Docker</li>

//                 <li>• Apache Kafka and Spark</li>

//                 <li>• Flask</li>

//                 <li>• MySQL</li>

//                 <li>• JS and React</li>

//                 <li>• Git/Github</li>

//               </ul>



//               <button

//                 onClick={() => setShowSkills(false)}

//                 className="mt-4 px-4 py-2 bg-[#456882] text-white rounded-md hover:bg-[#234C6A]"

//               >

//                 Close

//               </button>

//             </div>

//           )}
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col md:flex-row">
//           {/* Left Side - Photo with Blue Gradient */}
//           <div className="w-full md:w-1/2 h-full bg-gradient-to-br from-[#1B3C53] via-[#234C6A] to-[#456882] flex items-center justify-center p-12 relative">
//             <div className="absolute top-32 right-12 opacity-50">
//               <WavePatternWhite />
//             </div>
//             <div className="max-w-md">
//               <img 
//                 src={profilePic}
//                 alt="Profile"
//                 className="w-full h-auto rounded-lg shadow-2xl"
//               />
//             </div>
//             <div className="absolute bottom-12 left-12 opacity-50">
//               <WavePatternWhite />
//             </div>
//           </div>

//           {/* Right Side - Intro Text with Grey Background */}
//           <div className="w-full md:w-1/2 h-full bg-[#E3E3E3] flex items-center justify-center p-12 relative">
//             <div className="absolute top-24 left-1/4">
//               <WavePattern className="opacity-80" />
//             </div>
//             <MoleculeIcon className="absolute top-32 right-1/4" />
            
//             <div className="max-w-lg">
//               <MoleculeIcon className="mb-8 mx-auto" />
//               <p className="text-gray-800 text-2xl leading-relaxed">
//                 <span className="text-2xl font-normal tracking-wide italic">
//   Precision in design. Detail in execution. Impact in every build.
// </span>
            
//                 <br></br>
//                 <br></br> 
//                 Hi!
//                 I'm <span className="font-bold">Greeshma D H.</span>
//                 <br></br>
//                 B.Tech Computer Science @ PESU Batch '26.
//                 <br></br>
//                 Summer Intern @ UST Global Jun-Jul '25.
//               </p>
//             </div>

//             <div className="absolute bottom-32 left-12">
//               <WavePattern className="opacity-100" />
//             </div>
//             <MoleculeIcon className="absolute bottom-16 right-16" />
//             <div className="absolute bottom-12 right-1/3">
//               <WavePattern className="opacity-100" />
//             </div>
//             <div className="absolute top-[150px] left-[10px]">
//               <FourDots className="opacity-100" />
//             </div>
//             <div className="absolute top-[370px] right-[100px]">
//               <FourDots className="opacity-100" />
//             </div>
//             <div className="absolute top-[300px] left-[140px]">
//               <FourDotsHorizontal className="opacity-100" />
//             </div>
//             <div className="absolute top-[10px] left-[525px]">
//               <FourDotsHorizontal className="opacity-100" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Page 2 - Projects */}
//       <section 
//   className="h-screen bg-gradient-to-br 
//   from-[#1B3C53] via-[#234C6A] via-[#456882] to-[#E3E3E3]
//   flex items-center justify-center px-8 snap-start"
// >
//   <div className="max-w-7xl mx-auto w-full">
    
//     {/* Projects Heading */}
//     <div className="mb-6">
//       <h2 className="inline-block bg-[#E3E3E3] text-black text-5xl font-bold px-12 py-6 border-4 border-black">
//         PROJECTS
//       </h2>
//     </div>

//     {/* Project Cards */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//   {projects.map((project, index) => (
//     <div 
//       key={index}
//       onClick={() => window.open(project.github, '_blank')}
//       className="bg-[#456882] rounded-lg overflow-hidden cursor-pointer 
//       hover:bg-[#234C6A] transition-all duration-300 hover:scale-105 
//       shadow-lg border-4 border-black"
//     >
//       {/* Image */}
//       <div className="bg-[#E3E3E3] h-64 flex items-center justify-center">
//         <img 
//           src={project.image} 
//           alt={project.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Title + Description */}
//       <div className="p-6 text-center">
//         <h3 className="text-white text-2xl font-semibold uppercase mb-3">
//           {project.title}
//         </h3>

//         <p className="text-[#E3E3E3] text-lg leading-relaxed">
//           {project.description}
//         </p>
//       </div>
//     </div>
//   ))}
// </div>


//   </div>
// </section>


//       {/* Page 3 - About Me */}
//       <section id="about-section" className="h-screen bg-gradient-to-br 
//   from-[#1B3C53] via-[#234C6A] via-[#456882] to-[#E3E3E3] flex items-center justify-center px-8 snap-start">
//         <div className="max-w-6xl mx-auto w-full border-8 border-[#234C6A] bg-[#E3E3E3] rounded-lg relative flex flex-col h-[90vh]">
//           <MoleculeIcon className="absolute top-5 right-24 hidden lg:block" />
//           <WavePattern className="absolute top-[130px] right-80 hidden lg:block" />
//           <FourDots className="absolute top-[110px] left-[410px] hidden lg:block" />
//           <MoleculeIcon className="absolute top-[40px] left-[500px] hidden lg:block" />
//           {/* About Me Content */}
//           <div className="flex-1 p-12 overflow-hidden flex flex-col">
//             {/* About Me Heading */}
//             <div className="mb-8">
//               <h2 className="inline-block bg-[#456882] text-white text-5xl font-bold px-12 py-6 border-4 border-black">
//                 ABOUT ME
//               </h2>
//             </div>

//             {/* About Text Box */}
//             <div className="flex-1 bg-[#456882] bg-opacity-30 border-4 border-black p-8 mb-0 overflow-y-auto">
//               <p className="text-black text-xl leading-relaxed">
//                 I’m a Computer Science undergraduate with a strong focus on data-driven systems, distributed architectures, and analytical problem-solving. My academic electives include Data Analytics, Big Data, Database Technologies, and Computer Vision. I enjoy working across backend systems, data pipelines, and analytics workflows, and I have hands-on experience with tools such as Kafka, Spark, Docker, MySQL, and Python.
//                 <br></br>
//                 I have served as a Teaching Assistant for DBMS and Operating Systems, and I have contributed to research involving graph-theoretic analysis of EEG brain networks as well as a publication on video inpainting. Most recently, I completed a Summer Internship at UST, where I developed a modular ELT pipeline and system analytics components.

//               </p>
//             </div>
//           </div>

//           {/* Footer - Compact */}
//         <div className="bg-[#E3E3E3] border-t-4 border-black p-3 rounded-b-lg">
//           <div className="flex flex-col md:flex-row justify-between items-start gap-4">

//             {/* Contact Info */}
//             <div>
//               <h3 className="text-black text-medium font-bold mb-1">Contact Info:</h3>
//               <div className="space-y-0.5">
//                 <a 
//                   href="tel:6364106633"
//                   className="text-black text-medium flex items-center gap-1 hover:text-[#1B3C53] transition-colors"
//                 >
//                   ☎ 6364106633
//                 </a>
//                 <a 
//                   href="mailto:greezdh@gmail.com"
//                   className="text-black text-medium flex items-center gap-1 hover:text-[#1B3C53] transition-colors"
//                 >
//                   ✉ greezdh@gmail.com
//                 </a>
//               </div>
//             </div>

//             {/* Links */}
//             <div>
//               <h3 className="text-black text-medium font-bold mb-1">Links:</h3>

//               <div className="space-y-0.5">
//                 <a 
//                   href="https://github.com/greeshmadh"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-black text-medium flex items-center gap-1 hover:text-[#1B3C53] transition-colors break-all"
//                 >
//                   <SiGithub size={18} />
//                   GitHub :- https://github.com/greeshmadh
//                 </a>

//                 <a 
//                   href="https://leetcode.com/u/greezdh/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-black text-medium flex items-center gap-1 hover:text-[#1B3C53] transition-colors break-all"
//                 >
//                   <SiLeetcode size={18} />
//                   LeetCode :- https://leetcode.com/u/greezdh/
//                 </a>

//                 <a 
//                   href="https://www.linkedin.com/in/greeshma-holeyannavar-6b235525b/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-black text-medium flex items-center gap-1 hover:text-[#1B3C53] transition-colors break-all"
//                 >
//                   <SiLinkedin size={18} />
//                   LinkedIn :- https://www.linkedin.com/in/greeshma-holeyannavar-6b235525b/
//                 </a>
//               </div>
//             </div>

//           </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React from 'react';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import AboutSection from './components/AboutSection';
import './index.css';

export default function Portfolio() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">

      <HeroSection />
      <ProjectSection />
      <AboutSection />
    </div>
  );
}