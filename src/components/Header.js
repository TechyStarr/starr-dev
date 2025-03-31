import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div class="px-20 py-8 flex justify-between">
            <div>
                <p className="text-[24px] font-lightItalic"><Link to="/">Starr.</Link></p>
            </div>
            <div class="text-[20px] flex gap-8">
                <p><Link to="/about">About</Link></p>
                <p><Link to="/projects">Projects</Link></p>
                <p><Link to="/contact">Contact</Link></p>
            </div>
        </div>

      </nav>
    </header>
  );
}

export default Header;
