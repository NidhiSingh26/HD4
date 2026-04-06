"use client";
import Link from "next/link";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle,} from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import hd4logo from "../../public/hd4logo.png";

const HeaderSection = () => {
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const menuItemsPaths = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Tracks", path: "#tracks" },
    { title: "Prizes", path: "#prizes" },
    { title: "Sponsors", path: "#sponsors" },
    { title: "FAQ", path: "#faq" },
    { title: "Team", path: "#team" },
    { title: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < menuItemsPaths.length; i++) {
        const section = document.querySelector(menuItemsPaths[i].path);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(menuItemsPaths[i].path.replace("#", ""));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, );

  return (
    <>
      <Navbar
        className="bg-purple flex w-screen md:w-full h-16 justify-start"
        isMenuOpen={open}
        onMenuOpenChange={setOpen}
        maxWidth="full"
      >
        <NavbarContent className="flex-1">
          <NavbarMenuToggle className="text-white visible md:hidden" />
          <NavbarBrand>
            <div className="w-16 h-20 relative pt-2 justify-center">
              <Image src={hd4logo} alt="HackDearborn Logo" />
            </div>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop menu */}
        <div className="text-white md:flex hidden gap-6 justify-end">
          {menuItemsPaths.map((item, index) => (
            <NavbarItem key={index}>
              <Link
                href={item.path}
                className={`text-lg font-klein  hover:text-blue transition-all ${
                  activeSection === item.path.replace("#", "")
                    ? "text-blue"
                    : "text-white"
                }`}
              >
                {item.title}
              </Link>
            </NavbarItem>
          ))}
        </div>

        {/* Mobile menu */}
        <NavbarMenu className="bg-purple">
          {menuItemsPaths.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                href={item.path}
                className="visited:text-white text-xl font-klein hover:text-blue text-white"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default HeaderSection;