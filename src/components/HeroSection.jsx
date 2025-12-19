import React, { useState, useRef, useEffect } from 'react';
import { Download, Italic } from 'lucide-react';
import profilePic from "../assets/profile.jpg";

function HeroSection() {
  const [showSkills, setShowSkills] = React.useState(false);

  const scrollToAbout = () => {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1-QGqtpEgwhUTRxBaNQsyKsHRdDCerT65";
    link.download = "Greeshma_Resume.pdf";
    link.click();
  };

  const WavePatternWhite = ({ className = "" }) => (
    <svg className={className} width="100" height="30" viewBox="0 0 100 30" fill="none">
      <path d="M0 10 Q 25 5, 50 10 T 100 10" stroke="#eef5faff" strokeWidth="2" fill="none" opacity="0.3"/>
      <path d="M0 15 Q 25 10, 50 15 T 100 15" stroke="#eef5faff" strokeWidth="2" fill="none" opacity="0.3"/>
      <path d="M0 20 Q 25 15, 50 20 T 100 20" stroke="#eef5faff" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M0 25 Q 25 20, 50 25 T 100 25" stroke="#eef5faff" strokeWidth="2" fill="none" opacity="0.3" />
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
      {/* <circle cx="5" cy="25" r="5" fill="#456882" opacity="0.9" /> */}
      <circle cx="65" cy="53" r="5" fill="#456882" opacity="0.9" />
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

  const FourDotsHorizontal = ({ className = "" }) => (
    <svg className={className} width="60" height="12" viewBox="0 0 60 12" fill="none">
      <circle cx="6"  cy="6" r="3" fill="#0d2c46ff" opacity="1" />
      <circle cx="20" cy="6" r="3" fill="#0d2c46ff" opacity="1" />
      <circle cx="34" cy="6" r="3" fill="#0d2c46ff" opacity="1" />
      <circle cx="48" cy="6" r="3" fill="#0d2c46ff" opacity="1" />
    </svg>
  );

  const skillsRef = useRef(null);
  const skillsBtnRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (event) => {
    // if click is inside dropdown → do nothing
    if (skillsRef.current?.contains(event.target)) return;

    // if click is on Skills button → do nothing
    if (skillsBtnRef.current?.contains(event.target)) return;

    // otherwise close
    setShowSkills(false);
  };

  if (showSkills) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [showSkills]);



  return (
    
    <section className="h-screen flex flex-col relative snap-start">
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-6 z-10">
        <button 
          onClick={scrollToAbout}
          className="px-6 py-3 bg-[#456882] text-white text-lg font-semibold rounded hover:bg-[#527A97] transition-colors"
        >
          About me
        </button>
        <button 
          onClick={downloadResume}
          className="px-6 py-3 bg-[#E3E3E3] text-gray-800 text-lg font-semibold rounded hover:bg-gray-300 transition-colors flex items-center gap-2"
        >
          Download Resume
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
        </button>
        
        <button
            onClick={() => setShowSkills(!showSkills)}
            ref={skillsBtnRef}
            className="
                absolute
                top-6
                left-1/2
                translate-x-[10px]
                px-5 py-3
                bg-[#234C6A]
                text-white
                text-lg
                rounded-lg
                hover:bg-[#456882]
                shadow-lg
                transition-all
            "
            >
            Skills
        </button>



        {showSkills && (
            <div
            ref={skillsRef}
                className="
                absolute
                top-[72px]
                left-1/2
                translate-x-[30px]
                w-72
                p-5
                rounded-xl
                shadow-2xl
                border
                bg-white/20
                backdrop-blur-xl
                border-white/30
                z-20
                "
            >
                <h3 className="text-xl font-bold text-[#1B3C53] mb-3">My Skills</h3>

                <ul className="text-[#1B3C53] space-y-1 font-medium">
                <li>• Python</li>
                <li>• Cloud Computing Basics</li>
                <li>• Java</li>
                <li>• Machine Learning</li>
                <li>• Docker</li>
                <li>• Apache Kafka & Spark</li>
                <li>• Flask</li>
                <li>• MySQL</li>
                <li>• JS & React</li>
                <li>• Git/GitHub</li>
                </ul>

                <button
                onClick={() => setShowSkills(false)}
                className="mt-4 px-4 py-2 bg-[#456882] text-white rounded-md hover:bg-[#234C6A]"
                >
                Close
                </button>
            </div>
            )}

      </div>

      <div className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-br from-[#1B3C53] via-[#234C6A] to-[#456882] flex items-center justify-center p-12 relative">
          <div className="absolute top-32 right-12 opacity-50">
            <WavePatternWhite />
          </div>
          <div className="max-w-md">
            <div className="w-full h-96 bg-gray-300 rounded-lg shadow-2xl flex items-center justify-center">
                <img 
                src={profilePic}
                alt="Profile"
                className="w-full h-auto rounded-lg shadow-2xl"
                />
            </div>
          </div>
          <div className="absolute bottom-12 left-12 opacity-50">
            <WavePatternWhite />
          </div>
        </div>

        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#E3E3E3] flex items-center justify-center p-12 relative">
          <div className="absolute top-24 left-1/4">
            <WavePattern className="opacity-80" />
          </div>
          <MoleculeIcon className="absolute top-32 right-1/4" />
          
          <div className="max-w-lg">
            <MoleculeIcon className="mb-8 mx-auto" />
            <p className="text-gray-800 text-2xl leading-relaxed">
              <span className="text-2xl font-normal tracking-wide italic">
                Precision in design. Detail in execution. Impact in every build.
              </span>
              <br/><br/> 
              Hi! I'm <span className="font-bold">Greeshma D H.</span>
              <br/>
              B.Tech Computer Science @ PESU Batch '26.
              <br/>
              Summer Intern @ UST Global Jun-Jul '25.
            </p>
          </div>

          <div className="absolute bottom-32 left-12">
            <WavePattern className="opacity-100" />
          </div>
          <MoleculeIcon className="absolute bottom-16 right-16" />
          <div className="absolute bottom-12 right-1/3">
            <WavePattern className="opacity-100" />
          </div>
          <div className="absolute top-[150px] left-[10px]">
            <FourDots className="opacity-100" />
          </div>
          <div className="absolute top-[370px] right-[100px]">
            <FourDots className="opacity-100" />
          </div>
          <div className="absolute top-[300px] left-[140px]">
            <FourDotsHorizontal className="opacity-100" />
          </div>
          <div className="absolute top-[10px] left-[525px]">
            <FourDotsHorizontal className="opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;