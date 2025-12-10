import React from "react";
import Container from "./Container";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const featureLists = [
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly shaken & stirred",
  ];

  const goodLists = [
    "Handpicked ingredients",
    "Signature techniques",
    "Bartending artistry in action",
    "Freshly muddled flavors",
  ];

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";
    // const end = isMobile ? "top center" : "top center";

    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom top",
        scrub: 1.5,
        pin: true,
      },
    });

    maskedTimeline
      .to(".will-fade", {
        opacity: 0,
        ease: "power4.out",
        stagger: 0.2,
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.out",
      })
      .to(".masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      });
  }, []);

  return (
    <section
      id="art"
      className=" mt-10 md:mt-20 min-h-dvh grid place-content-center"
    >
      <Container className="  flex-center flex-col  radial-gradient">
        <h2 className="will-fade relative md:text-[20vw] text-8xl text-nowrap leading-none font-negra text-center text-[#505050] mb-8">
          The Art
        </h2>
        <div className="content flex md:flex-row flex-col justify-between md:mb-16 md:mt-0 mt-40 gap-10">
          <ul className="space-y-4 will-fade">
            {goodLists.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/cocktail/images/check.png" alt="check" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img md:w-[60vw] w-full h-[50vh] md:h-[70vh] rounded-2xl md:rounded-4xl overflow-hidden absolute top-0 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2">
            <img
              src="/cocktail/images/under-img.jpg"
              alt="masked"
              className="masked-img mask-no-repeat mask-[url(/cocktail/images/mask-img.png)] mask-center mask-size-[70%] md:mask-size-[50%] w-full"
            />
          </div>
          <ul className="space-y-4 will-fade invisible lg:visible">
            {featureLists.map((item, index) => (
              <li
                key={index}
                className="flex flex-row-reverse  items-center gap-2"
              >
                <img src="/cocktail/images/check.png" alt="check" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="masked-content w-full md:w-11/12 opacity-0  space-y-5  absolute bottom-10 md:bottom-5 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-white/05 border border-white/20 md:rounded-3xl p-3 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] flex flex-col items-center  gap-5 "
        >
          <h2 className="  text-4xl md:text-5xl font-negra text-center ">
            Sip Worthy of Perfection
          </h2>
          <div className="flex flex-col gap-5">
            <h3 className="md:text-5xl text-2xl text-center noto-serif md:w-full  ">
              Made with Craft, Poured with Passion
            </h3>
            <p className=" text-sm md:text-lg text-center">
              This isn't just a drink. It's a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Art;
