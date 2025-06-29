import React from "react";
import logo from '/logo.svg'

const Header = () => {
    return (
        <div className="sticky top-0 bg-[#0a192f] shadow-md">
            <div className="px-6 py-4 max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo / Initial */}
                <img src={logo} alt="" />

                {/* Navigation Menu */}
                <nav>
                    <ul className="hidden md:flex space-x-8 font-mono text-sm text-[#64ffda]">
                        <li className="hover:text-[#64ffda] transition">
                            <a href="#home">
                                Home
                            </a>
                        </li>

                        <li className="hover:text-[#64ffda] transition">
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li className="hover:text-[#64ffda] transition">
                            <a href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Resume Button */}
                <div className=" ml-6">
                    <a className="text-[#64ffda] border border-[#64ffda] px-4 py-1 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition font-mono text-sm"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;