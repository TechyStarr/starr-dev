import React from "react";
// import Link from "next/link";
// import Image from "next/image";

/**
 * @typedef {Object} ProjectItemProps
 * @property {string} title - Project title
 * @property {string} description - Project description
 * @property {string} tag - Project category tag
 * @property {string} year - Project year
 * @property {string} imageUrl - Project image URL
 * @property {string} projectUrl - Live project URL
 * @property {string} detailsUrl - Project details page URL
 */

/**
 * Project item component that expands on hover
 * @param {ProjectItemProps} props
 */
const ProjectItem = ({
  title,
  description,
  tag,
  year,
  imageUrl,
  projectUrl,
  detailsUrl,
}) => {
  return (
    <div className="group relative border-t-[1px] border-[#E5E7ED] overflow-hidden transition-all duration-500">
      {/* Main content that's always visible */}
      <div className="flex justify-between py-4 group-hover:bg-[#1E1E1E] group-hover:px-4 transition-all duration-300">
        <div className="gap-2">
          <p className="text-[40px] group-hover:text-[#FFFFFF]">{title}</p>
        </div>
        <div className="flex gap-8 items-center">
          <p className="text-[20px] bg-[#730AC6] text-white p-4 rounded-[100px]">{tag}</p>
          <p className="text-[32px] group-hover:text-[#FFFFFF]">{year}</p>
        </div>
      </div>

      {/* Expandable content visible on hover */}
      <div className="max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 bg-primaryDark transition-all duration-500 overflow-hidden px-4 pb-6">
        <div className="mt-4 relative h-[300px] w-full rounded-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`${title} project image`} 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-4 flex justify-between items-center">
					<p className="w-[650px] font-medium text-[20px] group-hover:text-primaryLight">
            {description}
          </p>
          <button className="bg-[#730AC6] flex text-white p-8 items-center justify-center rounded-full text-sm font-medium hover:bg-[#5F08A3] transition-colors"> Live Link
					<a href={projectUrl} target="_blank" rel="noopener noreferrer" className="block" onClick={(e) => e.stopPropagation()}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-[#1E1E1E]">
                <path d="M4.5332 11.0094L11.0094 4.5332" stroke="currentColor" strokeWidth="1.82857" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.5332 4.5332H11.0094V11.0094" stroke="currentColor" strokeWidth="1.82857" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </button>
        </div>
      </div>

      {/* Clickable link to details page - covers the entire component */}
      <a href={detailsUrl} className="absolute inset-0 z-10" aria-label={`View details for ${title}`}></a>
    </div>
  );
};

function Projects() {
  // Sample project data - replace with your actual data
  const projects = [
    {
      id: 1,
      title: "ZyonPlumbing",
      description: "ZyonPlumbing is a Canadian-based plumbing company that provides professional plumbing services for residential and commercial clients.",
      tag: "Frontend Development",
      year: "2024",
      imageUrl: "/images/screenshot.png", // Add your image path here
      projectUrl: "https://zyon-plumbing1.vercel.app/",
      detailsUrl: "/projects/zyon-plumbing", // Create this route in your Next.js app
    },
    {
      id: 2,
      title: "DownTownTheBrand",
      description: "Description for your second project goes here. This should be a brief overview of what the project is about.",
      tag: "UI/UX Design",
      year: "2023",
      imageUrl: "/images/screenshot.png", // Add your image path here
      projectUrl: "https://www.downtownthebrand.com/",
      detailsUrl: "/projects/project-two",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Description for your third project goes here. This should be a brief overview of what the project is about.",
      tag: "Full Stack",
      year: "2023",
      imageUrl: "/images/screenshot.png", // Add your image path here
      projectUrl: "https://example.com/project-three",
      detailsUrl: "/projects/project-three",
    },
  ];

  return (
    <section className="font-hkgrotesk space-y-16 py-16 mt-6 animate-fade-in">
      <h1 className="text-[80px] text-[#F2F2F2] font-bold text-center">PROJECTS</h1>
      <div>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
            tag={project.tag}
            year={project.year}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            detailsUrl={project.detailsUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;