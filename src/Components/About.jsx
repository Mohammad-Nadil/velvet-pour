import React from "react";
import Container from "./Container";
import { FaStar } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { SplitText } from "gsap/all";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const profileLists = [
    {
      imgPath: "/cocktail/images/profile1.png",
    },
    {
      imgPath: "/cocktail/images/profile2.png",
    },
    {
      imgPath: "/cocktail/images/profile1.png",
    },
    {
      imgPath: "/cocktail/images/profile4.png",
    },
  ];

  useGSAP(async () => {
    await document.fonts.ready;

    const heading = new SplitText(".about-heading", { type: "words" });
    const paragraph = new SplitText(".about-text", { type: "lines" });

    const startValue = isMobile ? "top 75%" : "top 85%";

    gsap.from(heading.words, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".about-heading",
        start: startValue,
      },
    });

    gsap.from(paragraph.lines, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "expo.out",
      stagger: 0.05,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".about-text",
        start: startValue,
      },
    });

    const starObj = { count: 0 };
    gsap.to(starObj, {
      count: 5,
      duration: 2.4,
      delay: 0.5,
      onUpdate: () => {
        const stars = Math.floor(starObj.count);
        document.querySelector(".icon").innerHTML = "⭐".repeat(stars);
      },
      scrollTrigger: {
        trigger: ".about-text",
        start: startValue,
      },
    });

    const ratingObj = { val: 0 };
    gsap.to(ratingObj, {
      val: 4.5,
      duration: 2.3,
      delay: 0.4,
      onUpdate: () => {
        document.querySelector(".rating-number").innerText =
          ratingObj.val.toFixed(1);
      },
      scrollTrigger: {
        trigger: ".about-text",
        start: startValue,
      },
    });

    const customerObj = { num: 0 };
    gsap.to(customerObj, {
      num: 12000,
      duration: 3,
      delay: 0.5,
      onUpdate: () => {
        document.querySelector(".customer-count").innerText = Math.floor(
          customerObj.num
        ).toLocaleString();
      },
      scrollTrigger: {
        trigger: ".about-text",
        start: startValue,
      },
    });

    gsap.from(".about-img", {
      opacity: 0,
      scale: 0.5,
      y: 15,
      stagger: 0.15,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".about-text",
        start: startValue,
      },
    });
  });

  return (
    <section id="about">
      <Container className="py-14 lg:py-28 flex flex-col md:flex-row justify-between items-center gap-y-20 gap-x-3 ">
        <div className="badge w-full md:w-1/2 xl:w-1/2">
          <p className="about-badge inline-block rounded-full bg-white text-black px-4 py-2 text-sm font-medium mb-8">
            Best Cocktails
          </p>

          <h2 className="about-heading font-negra text-4xl lg:text-6xl leading-tight">
            Where every detail matters
            <br className="xl:block hidden" />
            from muddle to garnish
          </h2>
        </div>

        <div className="sub-content w-full  md:w-1/2 xl:w-1/3 flex flex-col space-y-5 md:space-y-10 -m-2">
          <p className="about-text text-sm lg:text-base text-white/70">
            Every cocktail we serve is a reflection of our obsession with detail
            from the first muddle to the final garnish. That care is what turns
            a simple drink into something truly memorable.
          </p>

          <div className="about-rating flex justify-between items-center">
            <div className="w-1/2">
              <div className="icon flex items-center gap-2 mb-2">
                <FaStar className="text-transparent" />
                <FaStar className="text-transparent" />
                <FaStar className="text-transparent" />
                <FaStar className="text-transparent" />
                <FaStar className="text-transparent" />
              </div>
              <h2 className="md:text-3xl text-xl font-bold flex gap-1">
                <p className="rating-number">0</p>/5
              </h2>
              <h2 className="text-xs sm:text-sm flex gap-1">
                More than<p className="customer-count">0 </p> customers
              </h2>
            </div>

            <div className="bg-white/20 rounded-full p-3 flex items-center justify-center -space-x-3">
              {profileLists.map((img, index) => (
                <img
                  key={index}
                  src={img.imgPath}
                  alt="profile"
                  className="about-img aspect-square w-11 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
