import React, {useState} from 'react';
import AP from "C:/Users/Admin/Documents/GREESHMA/Portfolio/portfolio/src/assets//ap1.jpg";
import ELT from "C:/Users/Admin/Documents/GREESHMA/Portfolio/portfolio/src/assets/elt.png";
import meeting from "C:/Users/Admin/Documents/GREESHMA/Portfolio/portfolio/src/assets/Meeting.jfif";

function ProjectSection() {
  const projects = [
    {
      title: "Distributed Application Monitoring System",
      description: "Tech Stack: Python, Kafka, Docker. This project is designed to simulate API traffic, log requests, and monitor them using Kafka, MySQL, and Grafana. It provides a complete pipeline for generating, processing, storing, and visualizing logs, enabling real-time monitoring and analysis of API performance and errors.",
      github: "https://github.com/Vasnitha16/Application_Monitoring.git",
      image: AP,
    },
    {
      title: "ELT System", 
      description: "Tech Stack: PostgreSQL, Python, Angular JS. This project implements a complete ELT (Extract, Load, Transform) pipeline with support for:Local data extraction,SFTP file extraction,YAML configuration management with versioning,Schema validation and standardization with frontend integration with admin and user side. Also, backend coverage testing.",
      github: "https://github.com/greeshmadh/ELT_System.git",
      image: ELT,
    },
    {
      title: "Meeting Room Booking System",
      description: "Tech Stack: Java, Spring Boot, MySQL. This project is built using Object-Oriented Design and Programming principles to enable users to manage meeting room reservations. I focused on developing the Meeting Room Analytics module, which provides insights such as peak booking hours, and reservation patterns.",
      github: "https://github.com/harinii-b/meeting-room-booking.git",
      image: meeting,
    }
  ];

  return (
    <section className="h-screen bg-gradient-to-br from-[#1B3C53] via-[#234C6A] via-[#456882] to-[#E3E3E3] flex items-center justify-center px-8 snap-start">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-6">
          <h2 className="inline-block bg-[#E3E3E3] text-black text-5xl font-bold px-12 py-6 border-4 border-black">
            PROJECTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => window.open(project.github, '_blank')}
              className="bg-[#456882] rounded-lg overflow-hidden cursor-pointer hover:bg-[#234C6A] transition-all duration-300 hover:scale-105 shadow-lg border-4 border-black"
            >
              <div className="bg-[#E3E3E3] h-64 flex items-center justify-center">
                <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-white text-2xl font-semibold uppercase mb-3">
                  {project.title}
                </h3>
                <p className="text-[#E3E3E3] text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;