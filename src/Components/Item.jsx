import React, { useRef, useState } from "react";
import Container from "./Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Item = () => {
  const contentRef = useRef(null);

  const sliderLists = [
    {
      id: 1,
      name: "Classic Mojito",
      image: "/cocktail/images/drink1.png",
      title: "Simple Ingredients, Bold Flavor",
      description:
        "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
      id: 2,
      name: "Raspberry Mojito",
      image: "/cocktail/images/drink2.png",
      title: "A Zesty Classic That Never Fails",
      description:
        "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
    },
    {
      id: 3,
      name: "Violet Breeze",
      image: "/cocktail/images/drink3.png",
      title: "Simple Ingredients, Bold Flavor",
      description:
        "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
      id: 4,
      name: "Curacao Mojito",
      image: "/cocktail/images/drink4.png",
      title: "Crafted With Care, Poured With Love",
      description:
        "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCount = sliderLists.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCount) % totalCount;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffSet) => {
    return sliderLists[(currentIndex + indexOffSet + totalCount) % totalCount];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  useGSAP(() => {
    const animateContent = () => {
      // Image animation
      gsap.from(".cocktail-image", {
        opacityPercent: 0,
        xPercent: -50,
        duration: 1,
        ease: "power2.out",
      });

      // Title animation
      gsap.from(".recipe-title", {
        opacityPercent: 0,
        yPercent: 100,
        duration: 1,
        delayPercent: 0.3,
        ease: "power2.out",
      });

      // Description animation
      gsap.from(".recipe-description", {
        opacityPercent: 0,
        yPercent: 100,
        duration: 1,
        delayPercent: 0.7,
        ease: "power2.out",
      });
    };

    animateContent();
  }, [currentIndex]);

  return (
    <section id="menu" className="relative overflow-x-clip">
    
      <Container className="relative w-full md:mt-40 mt-0 2xl:px-0 px-5 py-20 radial-gradient ">
        <nav className="cocktail-tab grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 relative z-10 md:max-w-6xl md:mx-auto">
          {sliderLists.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={item.id}
                className={`md:text-3xl text-xl pb-2 cursor-pointer hover:text-yellow-300 hover:border-yellow-300 border-b transition-colors font-negra duration-300 ${
                  isActive
                    ? "text-white border-white"
                    : "text-white/50 border-white/50"
                }`}
                onClick={() => goToSlide(index)}
              >
                {item.name}
              </button>
            );
          })}
        </nav>
        <div className="content flex  flex-col justify-between items-center w-full h-full  mx-auto ">
          <div className="arrow flex items-center justify-between absolute left-0 top-1/2 translate-y-1/2 px-3 z-9999 ">
            <button
              className="text-left text-white hover:text-yellow cursor-pointer transition-colors max-w-36"
              onClick={() => goToSlide(currentIndex - 1)}
            >
              <span className="text-3xl font-negra leading-none hidden md:block">
                {prevCocktail.name}
              </span>
              <img src="/cocktail/images/right-arrow.png" alt="" />
            </button>
          </div>
          <div className="arrow flex items-center justify-between absolute right-0 top-1/2 translate-y-1/2 px-3 z-9999 ">
            <button
              className="text-left text-white hover:text-yellow cursor-pointer transition-colors max-w-36"
              onClick={() => goToSlide(currentIndex + 1)}
            >
              <span className="text-3xl font-negra leading-none hidden md:block">
                {nextCocktail.name}
              </span>
              <img src="/cocktail/images/left-arrow.png" alt="" />
            </button>
          </div>
          <div className=" w-full  flex  justify-center mt-10">
            <img
              src={currentCocktail.image}
              alt="image"
              className=" cocktail-image object-contain h-[60vh]"
            />
          </div>
        </div>

        <div className="recipe flex max-md:flex-col gap-10 md:items-center  justify-between w-full lg:absolute bottom-0 lg:-translate-y-1/2 ">
          <div className="info  space-y-4 lg:translate-y-20 " ref={contentRef}>
            <p>Recipe for :</p>
            <p
              id="title"
              className=" recipe-title font-negra md:text-6xl text-4xl text-yellow-300 "
            >
              {sliderLists[currentIndex].name}
            </p>
          </div>

          <div className="details  space-y-5 md:max-w-md text-left">
            <h2 className="md:text-5xl text-3xl font-serif">
              {sliderLists[currentIndex].title}
            </h2>
            <p className=" recipe-description md:text-lg pe-5">
              {sliderLists[currentIndex].description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Item;
