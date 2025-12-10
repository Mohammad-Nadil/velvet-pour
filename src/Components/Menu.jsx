import React from "react";
import Container from "./Container";
import leaf from "/cocktail/images/leaf.png";
import noisy from "/cocktail/images/noise.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Menu = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const cocktailLists = [
    {
      name: "Chapel Hill Shiraz",
      country: "AU",
      detail: "Battle",
      price: "$10",
    },
    {
      name: "Caten Malbee",
      country: "AU",
      detail: "Battle",
      price: "$49",
    },
    {
      name: "Rhino Pale Ale",
      country: "CA",
      detail: "750 ml",
      price: "$20",
    },
    {
      name: "Irish Guinness",
      country: "IE",
      detail: "600 ml",
      price: "$29",
    },
  ];

  const mockTailLists = [
    {
      name: "Tropical Bloom",
      country: "US",
      detail: "Battle",
      price: "$10",
    },
    {
      name: "Passionfruit Mint",
      country: "US",
      detail: "Battle",
      price: "$49",
    },
    {
      name: "Citrus Glow",
      country: "CA",
      detail: "750 ml",
      price: "$20",
    },
    {
      name: "Lavender Fizz",
      country: "IE",
      detail: "600 ml",
      price: "$29",
    },
  ];

  useGSAP(() => {
    const startValue = isMobile ? "top 90%" : "top 90%";
    const endValue = isMobile ? "top center" : "top center";

    gsap.from(".left-leaf", {
      xPercent: -100,
      yPercent: 100,
      scrollTrigger: {
        trigger: ".left-leaf",
        start: startValue,
        end: endValue,
        scrub: true,
      },
    });

    gsap.from(".right-leaf", {
      xPercent: 100,
      yPercent: 100,
      scrollTrigger: {
        trigger: ".right-leaf",
        start: startValue,
        end: endValue,
        scrub: true,
      },
    });
  }, []);
  return (
    <section
      id="cocktails"
      className="min-h-dvh w-full overflow-hidden relative pt-32 "
    >
      <img
        src={leaf}
        alt="left-leaf"
        className="absolute left-leaf left-0 bottom-0 -translate-y-1/2 -translate-x-1/2  w-32 md:w-80 rotate-235"
      />
      <img
        src={leaf}
        alt="right-leaf"
        className="absolute right-leaf right-0 bottom-0 translate-y-1/2 translate-x-1/2 w-32 md:w-80 rotate-135"
      />
      <Container
        className={`w-full aspect-video mx-auto relative z-10 flex md:flex-row flex-col justify-between gap-y-20  `}
      >
        <div className="left space-y-8 w-full md:w-1/3">
          <h2 className="text-xl font-medium">Most Popular cocktails</h2>
          <ul className="space-y-8">
            {cocktailLists.map((drink, index) => (
              <li key={index} className="flex justify-between items-start  ">
                <div className="info">
                  <h3 className="font-negra text-3xl  text-amber-200">
                    {drink.name}
                  </h3>
                  <p className="">
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <div className="price">
                  <span className="text-2xl font-medium">-{drink.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="right space-y-8 w-full md:w-1/3 pb-20 md:pb-0">
          <h2 className="text-xl font-medium">Most Popular mockTails</h2>
          <ul className="space-y-8">
            {mockTailLists.map((drink, index) => (
              <li key={index} className="flex justify-between items-start  ">
                <div className="info">
                  <h3 className="font-negra text-3xl  text-amber-200">
                    {drink.name}
                  </h3>
                  <p className="">
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <div className="price">
                  <span className="text-2xl font-medium">-{drink.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Menu;
