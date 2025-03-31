import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="font-hkgrotesk px-16 py-16 bg-[#1E1E1E] text-[#F2F2F2] animate-fade-in mt-12">
      <div className="space-y-8">
        {/* Top section with logo/name and links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Name/Logo */}
          <div>
            <h2 className="text-[32px] font-bold">CALISTA IFENKWE</h2>
            <p className="text-[18px] text-[#E5E7ED]">Software Engineer & UI/UX Designer</p>
          </div>
          
          {/* Navigation Links */}
          <div className="mt-6 md:mt-0">
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-[16px] hover:text-[#730AC6] transition duration-300">About</a></li>
              <li><a href="#projects" className="text-[16px] hover:text-[#730AC6] transition duration-300">Projects</a></li>
              <li><a href="#articles" className="text-[16px] hover:text-[#730AC6] transition duration-300">Articles</a></li>
              <li><a href="#contact" className="text-[16px] hover:text-[#730AC6] transition duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Middle section with social links */}
        <div className="flex justify-center space-x-8 py-8">
          <a href="https://github.com/yourusername" className="text-[#F2F2F2] hover:text-[#730AC6]">
            <img src="/github-icon.svg" alt="GitHub" className="h-8 w-auto" />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-[#F2F2F2] hover:text-[#730AC6]">
            <img src="/linkedin-icon.svg" alt="LinkedIn" className="h-8 w-auto" />
          </a>
          <a href="https://twitter.com/yourusername" className="text-[#F2F2F2] hover:text-[#730AC6]">
            <img src="/twitter-icon.svg" alt="Twitter" className="h-8 w-auto" />
          </a>
          <a href="mailto:your.email@example.com" className="text-[#F2F2F2] hover:text-[#730AC6]">
            <img src="/email-icon.svg" alt="Email" className="h-8 w-auto" />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center border-t-[1px] border-[#E5E7ED] pt-8">
          <p className="text-[16px] text-[#E5E7ED]">© {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;