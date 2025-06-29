import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0a192f] text-[#a8b2d1] text-sm font-mono py-10 px-4 text-center">
            <p className="mb-2">
                Designed & Built by <span className="text-[#64ffda]">Subrota Roy</span>
            </p>
            <p className="text-xs text-slate">
                © {new Date().getFullYear()} — All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;