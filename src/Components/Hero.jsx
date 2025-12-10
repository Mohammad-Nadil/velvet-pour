import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import heroVideo from "/cocktail/videos/output.mp4";
import heroVideoMobile from "/cocktail/videos/output_mobile.mp4";
import leftLeaf from "/cocktail/images/leaf.png";
import { SplitText, ScrollTrigger } from "gsap/all";
import Container from "./Container";
import gsap from "gsap";

const Hero = () => {
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!titleRef.current) return;

    document.fonts.ready.then(() => {
      const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
      gsap.from(paragraphSplit.lines, {
        opacity: 0,
        y: 100,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.05,
        delay: 0.4,
      });
    });

    // Leaf positioning
    gsap.set(".leftLeaf", { x: -120, y: -100, rotate: 210, zIndex: 20 });
    gsap.set(".rightLeaf", { x: 120, y: 100, rotate: 40, zIndex: 20 });

    // Parallax scroll leaf
    gsap.to(".leftLeaf", {
      yPercent: 120,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        scrub: true,
      },
    });

    gsap.to(".rightLeaf", {
      yPercent: -120,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        scrub: true,
      },
    });

    // Desktop GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: "center center",
        end: "120% top",
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        ease: "none",
        duration: videoRef.current.duration,
      });
    };
  }, [isMobile]);

  return (
    <div id="hero" className="relative overflow-x-clip ">
      <img
        src={leftLeaf}
        alt="left-leaf"
        className="leftLeaf absolute top-1/2  left-0 w-32 md:w-80"
      />
      <img
        src={leftLeaf}
        alt="right-leaf"
        className="rightLeaf absolute top-0  right-0 w-32 md:w-80"
      />
      <Container className="hero aspect-440/640 sm:aspect-video font-monaSans text-white relative sm:py-20">
        <h1
          ref={titleRef}
          className="hero-title text-7xl md:text-9xl lg:text-[250px] leading-none relative text-center font-negra  z-20 bg-linear-to-b from-gray-400 bg-clip-text text-transparent"
        >
          MOJITO
        </h1>

        <div className="absolute hidden lg:block bottom-10 left-4 z-20 max-w-xs">
          <p className="subtitle">Cool , Crisp , Classic</p>

          <p className="subtitle font-negra text-amber-200 text-3xl md:text-4xl mt-4">
            Sip the Spirit
            <br />
            of Summer
          </p>
        </div>

        <div className=" hidden sm:block sm:absolute bottom-10 right-4 text-right z-20 max-w-xs">
          <p className="subtitle text-xl md:text-2xl font-medium">
            Every cocktail on our menu is a blend of premium ingredients,
            creative flair, and timeless recipes — designed to delight your
            senses.
          </p>

          <a href="" className="subtitle underline mt-3 inline-block">
            View Cocktails
          </a>
        </div>

        <div className="videoContainer absolute bottom-0 left-0 w-full h-1/2 sm:h-4/5 z-0  "></div>

        <video
          muted
          playsInline
          preload="auto"
          ref={videoRef}
          src={isMobile ? heroVideoMobile : heroVideo}
          className="absolute bottom-0 left-0 w-full h-full object-cover z-0 "
        />
      </Container>
    </div>
  );
};

export default Hero;
