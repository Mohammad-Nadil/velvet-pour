"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const isMobile = window.innerWidth <= 767;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: !isMobile,
      lerp: 0.1,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
