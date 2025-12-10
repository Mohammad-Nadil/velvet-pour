import React from "react";
import Container from "./Container";
import logo from "/cocktail/images/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {
  useGSAP(() => {
    gsap.from(".logo", {
      opacity: 0,
      y: -100,
      duration: 0.5,
    });
    gsap.from(".menu", {
      opacity: 0,
      duration: 0.8,
      y: -100,
      stagger: 0.2,
    });
  });

  const navLinks = [
    {
      id: "cocktails",
      title: "Cocktails",
    },
    {
      id: "about",
      title: "About Us",
    },
    {
      id: "work",
      title: "The Art",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <div className="bg-none relative z-10 ">
      <Container className="flex flex-col sm:flex-row items-center justify-between py-2 lg:py-7 z-10 ">
        <div className="logo flex items-center sm:items-center gap-3 text-white">
          <img src={logo} alt="logo" className="aspect-square w-8" />
          <h2 className=" text-[40px]  font-negra ">Velvet Pour</h2>
        </div>
        <div className="menu  w-full sm:w-auto flex text-white items-center justify-between gap-4 sm:gap-7 md:gap-12 font-monaSans ">
          {navLinks.map((link, index) => (
            <a key={index} href={`#${link.id}`}>
              {link.title}
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Nav;
