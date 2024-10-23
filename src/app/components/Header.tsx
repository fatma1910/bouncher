'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../constant";




const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[#191919E5]/90 py-6 px-4 md:px-10 lg:px-20 flex justify-between items-center  z-50">
        <div className="flex items-center relative">
            <Image
            src="/logo1.png"
            alt="logo"
            width={80}
            height={80}
            className="md:w-[116px] md:h-[116px]"
            />
            <h1 className="uppercase font-bold text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[36px] lg:leading-[48px] text-white absolute left-[100px] md:left-20 w-[200px] md:w-[300px] lg:w-[402px]">
            art du <span className="text-primary">boucher</span>
            </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center justify-between w-[753px] gap-[20px] lg:gap-[51px] z-30">
            <div className="flex items-center justify-between gap-[15px] md:gap-[20px] lg:gap-[31px]">
            {navLinks.map((link) => (
                <Link
                key={link.label}
                href={link.href}
                className="text-white font-semibold uppercase text-[14px] md:text-[16px] leading-5 hover:text-primary duration-100 transition-all"
                >
                {link.label}
                </Link>
            ))}
            </div>
            <button className="bg-primary p-[8px] md:p-[10px] font-bold text-[14px] md:text-[16px] leading-5 rounded-[4px] uppercase hover:bg-primary/70 transition-all duration-150">
            Commandez ici
            </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="xl:hidden flex items-center z-40">
            <button
            onClick={toggleMenu}
            className="bg-primary p-[8px] md:p-[10px] font-bold text-[14px] md:text-[16px] leading-5 rounded-[4px] uppercase"
            >
            {isMenuOpen ? "Fermer" : "Menu"}
            </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="xl:hidden absolute top-[136px] left-0 w-full bg-[#191919E5] py-4 px-6 flex flex-col items-center space-y-4 z-40">
            {navLinks.map((link) => (
                <Link
                key={link.label}
                href={link.href}
                className="text-white font-semibold uppercase text-[16px] hover:text-primary duration-100 transition-all"
                onClick={toggleMenu}
                >
                {link.label}
                </Link>
            ))}
            <button className="bg-primary p-[10px] font-bold text-[16px] leading-5 rounded-[4px] uppercase">
                Commandez ici
            </button>
            </div>
        )}
        </header>
    );
};

export default Header;
