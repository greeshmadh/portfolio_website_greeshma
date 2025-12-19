// import React, {useState} from 'react';
import { SiGithub, SiLeetcode, SiLinkedin} from "react-icons/si";

// // ============ ABOUT SECTION ============
// function AboutSection() {

//     const SiGithub = ({ size = 18 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//     </svg>
//   );
  
//   const SiLeetcode = ({ size = 18 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
//     </svg>
//   );
  
//   const SiLinkedin = ({ size = 18 }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//     </svg>
//   );


//   const MoleculeIcon = ({ className = "" }) => (
//     <svg className={className} width="70" height="70" viewBox="0 0 70 70" fill="none">
//       <circle cx="35" cy="7" r="5" fill="#456882" opacity="0.9" />
//       <circle cx="60" cy="15" r="5" fill="#456882" opacity="0.5" />
//       <circle cx="50" cy="7" r="5" fill="#456882" opacity="0.7" />
//       <circle cx="20" cy="5" r="5" fill="#456882" opacity="0.9" />
//       <circle cx="25" cy="20" r="5" fill="#456882" opacity="0.7" />
//       <circle cx="45" cy="20" r="5" fill="#456882" opacity="0.7" />
//       <circle cx="12" cy="15" r="5" fill="#456882" opacity="0.7" />
//       <circle cx="65" cy="29" r="5" fill="#456882" opacity="0.7" />
//       <circle cx="18" cy="32" r="5" fill="#456882" opacity="0.85" />
//       <circle cx="35" cy="32" r="5" fill="#456882" opacity="0.6" />
//       <circle cx="52" cy="32" r="5" fill="#456882" opacity="0.85" />
//       <circle cx="5" cy="38" r="5" fill="#456882" opacity="0.85" />
//       <circle cx="63" cy="40" r="5" fill="#456882" opacity="0.9" />
//       <circle cx="25" cy="45" r="5" fill="#456882" opacity="0.7" />
//       <circle cx="45" cy="45" r="5" fill="#456882" opacity="0.7" />
//       <circle cx="11" cy="53" r="5" fill="#456882" opacity="0.85" />
//       <circle cx="51" cy="57" r="5" fill="#456882" opacity="0.85" />
//       <circle cx="35" cy="57" r="5" fill="#456882" opacity="0.9" />
//       <circle cx="24" cy="65" r="5" fill="#456882" opacity="0.9" />
//       <circle cx="65" cy="53" r="5" fill="#456882" opacity="0.9" />
//     </svg>
//   );

//   const WavePattern = ({ className = "" }) => (
//     <svg className={className} width="100" height="30" viewBox="0 0 100 30" fill="none">
//       <path d="M0 10 Q 25 5, 50 10 T 100 10" stroke="#456882" strokeWidth="2" fill="none" opacity="0.3"/>
//       <path d="M0 15 Q 25 10, 50 15 T 100 15" stroke="#456882" strokeWidth="2" fill="none" opacity="0.3"/>
//       <path d="M0 20 Q 25 15, 50 20 T 100 20" stroke="#456882" strokeWidth="2" fill="none" opacity="0.3" />
//       <path d="M0 25 Q 25 20, 50 25 T 100 25" stroke="#456882" strokeWidth="2" fill="none" opacity="0.3" />
//     </svg>
//   );

//   const FourDots = ({ className = "" }) => (
//     <svg className={className} width="12" height="60" viewBox="0 0 12 60" fill="none">
//       <circle cx="6" cy="6"  r="3" fill="#0d2c46ff" opacity="1" />
//       <circle cx="6" cy="20" r="3" fill="#0d2c46ff" opacity="1" />
//       <circle cx="6" cy="34" r="3" fill="#0d2c46ff" opacity="1" />
//       <circle cx="6" cy="48" r="3" fill="#0d2c46ff" opacity="1" />
//     </svg>
//   );

//   return (
//     <section id="about-section" className="h-screen bg-gradient-to-br from-[#1B3C53] via-[#234C6A] via-[#456882] to-[#E3E3E3] flex items-center justify-center px-8 snap-start">
//       <div className="max-w-6xl mx-auto w-full border-8 border-[#234C6A] bg-[#E3E3E3] rounded-lg relative flex flex-col h-auto md:h-[90vh]">
//         <MoleculeIcon className="absolute top-5 right-24 hidden lg:block" />
//         <WavePattern className="absolute top-[130px] right-80 hidden lg:block" />
//         <FourDots className="absolute top-[110px] left-[410px] hidden lg:block" />
//         <MoleculeIcon className="absolute top-[40px] left-[500px] hidden lg:block" />
        
//         <div className="flex-1 p-6 md:p-12 overflow-hidden flex flex-col">

//           <div className="mb-8">
//             <h2 className="inline-block bg-[#456882] text-white text-5xl font-bold px-12 py-6 border-4 border-black">
//               ABOUT ME
//             </h2>
//           </div>

//           <div className="flex-1 bg-[#456882] bg-opacity-30 border-4 border-black p-8 mb-0 overflow-y-auto">
//             <p className="text-black text-lg md:text-xl leading-relaxed">
//               I'm a Computer Science undergraduate with a strong focus on data-driven systems, distributed architectures, and analytical problem-solving. My academic electives include Data Analytics, Big Data, Database Technologies, and Computer Vision. I enjoy working across backend systems, data pipelines, and analytics workflows, and I have hands-on experience with tools such as Kafka, Spark, Docker, MySQL, and Python.
//               <br/><br/>
//               I have served as a Teaching Assistant for DBMS and Operating Systems, and I have contributed to research involving graph-theoretic analysis of EEG brain networks as well as a publication on video inpainting. Most recently, I completed a Summer Internship at UST, where I developed a modular ELT pipeline and system analytics components.
//             </p>
//           </div>
//         </div>

//         <div className="bg-[#E3E3E3] border-t-4 border-black p-3 rounded-b-lg">
//           <div className="flex flex-col md:flex-row justify-between items-start gap-4">
//             <div>
//               <h3 className="text-black text-medium font-bold mb-1">Contact Info:</h3>
//               <div className="space-y-0.5">
//                 <a href="tel:6364106633" className="text-black text-medium flex items-center gap-1 hover:text-[#1B3C53] transition-colors">
//                   ☎ 6364106633
//                 </a>
//                 <a href="mailto:greezdh@gmail.com" className="text-black text-medium flex items-center gap-1 hover:text-[#1B3C53] transition-colors">
//                   ✉ greezdh@gmail.com
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-black text-medium font-bold mb-1">Links:</h3>
//               <div className="space-y-0.5">
//                 <a href="https://github.com/greeshmadh" target="_blank" rel="noopener noreferrer" className="text-black text-medium flex items-center gap-1 hover:text-[#1B3C53] transition-colors break-all">
//                   <SiGithub size={18} />
//                   GitHub :- https://github.com/greeshmadh
//                 </a>
//                 <a href="https://leetcode.com/u/greezdh/" target="_blank" rel="noopener noreferrer" className="text-black text-medium flex items-center gap-1 hover:text-[#1B3C53] transition-colors break-all">
//                   <SiLeetcode size={18} />
//                   LeetCode :- https://leetcode.com/u/greezdh/
//                 </a>
//                 <a href="https://www.linkedin.com/in/greeshma-holeyannavar-6b235525b/" target="_blank" rel="noopener noreferrer" className="text-black text-medium flex items-center gap-1 hover:text-[#1B3C53] transition-colors break-all">
//                   <SiLinkedin size={18} />
//                   LinkedIn :- https://www.linkedin.com/in/greeshma-holeyannavar-6b235525b/
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;


import React from 'react';

function AboutSection() {
  const SiGithub = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
  
  const SiLeetcode = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
    </svg>
  );
  
  const SiLinkedin = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const MoleculeIcon = ({ className = "" }) => (
    <svg className={className} width="70" height="70" viewBox="0 0 70 70" fill="none">
      <circle cx="35" cy="7" r="5" fill="#456882" opacity="0.9" />
      <circle cx="60" cy="15" r="5" fill="#456882" opacity="0.5" />
      <circle cx="50" cy="7" r="5" fill="#456882" opacity="0.7" />
      <circle cx="20" cy="5" r="5" fill="#456882" opacity="0.9" />
      <circle cx="25" cy="20" r="5" fill="#456882" opacity="0.7" />
      <circle cx="45" cy="20" r="5" fill="#456882" opacity="0.7" />
      <circle cx="12" cy="15" r="5" fill="#456882" opacity="0.7" />
      <circle cx="65" cy="29" r="5" fill="#456882" opacity="0.7" />
      <circle cx="18" cy="32" r="5" fill="#456882" opacity="0.85" />
      <circle cx="35" cy="32" r="5" fill="#456882" opacity="0.6" />
      <circle cx="52" cy="32" r="5" fill="#456882" opacity="0.85" />
      <circle cx="5" cy="38" r="5" fill="#456882" opacity="0.85" />
      <circle cx="63" cy="40" r="5" fill="#456882" opacity="0.9" />
      <circle cx="25" cy="45" r="5" fill="#456882" opacity="0.7" />
      <circle cx="45" cy="45" r="5" fill="#456882" opacity="0.7" />
      <circle cx="11" cy="53" r="5" fill="#456882" opacity="0.85" />
      <circle cx="51" cy="57" r="5" fill="#456882" opacity="0.85" />
      <circle cx="35" cy="57" r="5" fill="#456882" opacity="0.9" />
      <circle cx="24" cy="65" r="5" fill="#456882" opacity="0.9" />
      <circle cx="65" cy="53" r="5" fill="#456882" opacity="0.9" />
    </svg>
  );

  const WavePattern = ({ className = "" }) => (
    <svg className={className} width="100" height="30" viewBox="0 0 100 30" fill="none">
      <path d="M0 10 Q 25 5, 50 10 T 100 10" stroke="#456882" strokeWidth="2" fill="none" opacity="0.3"/>
      <path d="M0 15 Q 25 10, 50 15 T 100 15" stroke="#456882" strokeWidth="2" fill="none" opacity="0.3"/>
      <path d="M0 20 Q 25 15, 50 20 T 100 20" stroke="#456882" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M0 25 Q 25 20, 50 25 T 100 25" stroke="#456882" strokeWidth="2" fill="none" opacity="0.3" />
    </svg>
  );

  const FourDots = ({ className = "" }) => (
    <svg className={className} width="12" height="60" viewBox="0 0 12 60" fill="none">
      <circle cx="6" cy="6"  r="3" fill="#0d2c46ff" opacity="1" />
      <circle cx="6" cy="20" r="3" fill="#0d2c46ff" opacity="1" />
      <circle cx="6" cy="34" r="3" fill="#0d2c46ff" opacity="1" />
      <circle cx="6" cy="48" r="3" fill="#0d2c46ff" opacity="1" />
    </svg>
  );

  return (
    <section id="about-section" className="min-h-screen h-auto md:h-screen bg-gradient-to-br from-[#1B3C53] via-[#234C6A] via-[#456882] to-[#E3E3E3] flex items-center justify-center px-4 sm:px-8 py-8 md:py-0 snap-start">
      <div className="max-w-6xl mx-auto w-full border-4 sm:border-8 border-[#234C6A] bg-[#E3E3E3] rounded-lg relative flex flex-col h-auto md:h-[90vh]">
        <MoleculeIcon className="absolute top-5 right-24 hidden lg:block" />
        <WavePattern className="absolute top-[130px] right-80 hidden lg:block" />
        <FourDots className="absolute top-[110px] left-[410px] hidden xl:block" />
        <MoleculeIcon className="absolute top-[40px] left-[500px] hidden xl:block" />
        
        <div className="flex-1 p-4 sm:p-6 md:p-12 overflow-hidden flex flex-col">
          <div className="mb-6 sm:mb-8">
            <h2 className="inline-block bg-[#456882] text-white text-3xl sm:text-4xl md:text-5xl font-bold px-6 sm:px-12 py-4 sm:py-6 border-4 border-black">
              ABOUT ME
            </h2>
          </div>

          <div className="flex-1 bg-[#456882] bg-opacity-30 border-4 border-black p-4 sm:p-6 md:p-8 mb-0 overflow-y-auto">
            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              I'm a Computer Science undergraduate with a strong focus on data-driven systems, distributed architectures, and analytical problem-solving. My academic electives include Data Analytics, Big Data, Database Technologies, and Computer Vision. I enjoy working across backend systems, data pipelines, and analytics workflows, and I have hands-on experience with tools such as Kafka, Spark, Docker, MySQL, and Python.
              <br/><br/>
              I have served as a Teaching Assistant for DBMS and Operating Systems, and I have contributed to research involving graph-theoretic analysis of EEG brain networks as well as a publication on video inpainting. Most recently, I completed a Summer Internship at UST, where I developed a modular ELT pipeline and system analytics components.
            </p>
          </div>
        </div>

        <div className="bg-[#E3E3E3] border-t-4 border-black p-3 sm:p-4 rounded-b-lg">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
            <div className="w-full lg:w-auto">
              <h3 className="text-black text-sm sm:text-base font-bold mb-1">Contact Info:</h3>
              <div className="space-y-0.5">
                <a href="tel:6364106633" className="text-black text-xs sm:text-sm md:text-base flex items-center gap-1 hover:text-[#1B3C53] transition-colors">
                  ☎ 6364106633
                </a>
                <a href="mailto:greezdh@gmail.com" className="text-black text-xs sm:text-sm md:text-base flex items-center gap-1 hover:text-[#1B3C53] transition-colors break-all">
                  ✉ greezdh@gmail.com
                </a>
              </div>
            </div>

            <div className="w-full lg:w-auto">
              <h3 className="text-black text-sm sm:text-base font-bold mb-1">Links:</h3>
              <div className="space-y-0.5">
                <a href="https://github.com/greeshmadh" target="_blank" rel="noopener noreferrer" className="text-black text-xs sm:text-sm md:text-base flex items-center gap-1 hover:text-[#1B3C53] transition-colors break-all">
                  <SiGithub size={16} />
                  <span className="hidden sm:inline">GitHub :- </span>
                  <span className="sm:hidden">GitHub</span>
                  <span className="hidden md:inline">https://github.com/greeshmadh</span>
                </a>
                <a href="https://leetcode.com/u/greezdh/" target="_blank" rel="noopener noreferrer" className="text-black text-xs sm:text-sm md:text-base flex items-center gap-1 hover:text-[#1B3C53] transition-colors break-all">
                  <SiLeetcode size={16} />
                  <span className="hidden sm:inline">LeetCode :- </span>
                  <span className="sm:hidden">LeetCode</span>
                  <span className="hidden md:inline">https://leetcode.com/u/greezdh/</span>
                </a>
                <a href="https://www.linkedin.com/in/greeshma-holeyannavar-6b235525b/" target="_blank" rel="noopener noreferrer" className="text-black text-xs sm:text-sm md:text-base flex items-center gap-1 hover:text-[#1B3C53] transition-colors break-all">
                  <SiLinkedin size={16} />
                  <span className="hidden sm:inline">LinkedIn :- </span>
                  <span className="sm:hidden">LinkedIn</span>
                  <span className="hidden md:inline">https://www.linkedin.com/in/greeshma-holeyannavar-6b235525b/</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;