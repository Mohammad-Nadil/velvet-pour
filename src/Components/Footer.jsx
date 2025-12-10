import React, { useRef, useEffect } from "react";
import Container from "./Container";
import gsap from "gsap";


const Footer = () => {
  const contentRef = useRef(null);

  const storeInfo = {
    heading: "Where to Find Us",
    address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
    contact: {
      phone: "(555) 987-6543",
      email: "hello@jsmcocktail.com",
    },
  };

  const openingHours = [
    { day: "Mon–Thu", time: "11:00am – 12am" },
    { day: "Fri", time: "11:00am – 2am" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
  ];

  useEffect(() => {
    // Leaf float animation
    gsap.to(".f-leaf", {
      y: -40,
      rotation: 230,
      repeat: -1,
      yoyo: true,
      duration: 6,
      ease: "sine.inOut",
    });

    // Fade-in animation for content
    gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <footer id="contact" className="relative overflow-clip">
      <img
        src="/cocktail/images/leaf.png"
        alt="leaf"
        className="f-leaf absolute bottom-0 left-0 rotate-210 -translate-x-1/2 pointer-events-none w-1/3 lg:w-fit"
      />
      <img
        src="/cocktail/images/footer-drinks.png"
        alt=""
        className="absolute bottom-0 right-0 w-1/2 lg:w-fit pointer-events-none"
      />
      <Container className="relative md:mt-20 mt-0 px-4 text-center w-full overflow-hidden radial-gradient">
        <div
          className="content container mx-auto lg:py-14 2xl:py-32 py-16 flex flex-col justify-between gap-10"
          ref={contentRef}
        >
          <h2 className="lg:text-6xl 2xl:text-8xl text-5xl font-negra md:translate-y-0 translate-y-5">
            {storeInfo.heading}
          </h2>
          <div>
            <p className="text-2xl 2xl:text-3xl ">Visit our store</p>
            <p className="lg:text-2xl 2xl:text-3xl text-sm">
              {storeInfo.address}
            </p>
          </div>
          <div>
            <h3 className="uppercase text-2xl  mb-2">
              Contact us
            </h3>
            <p className="lg:text-2xl 2xl:text-3xl text-sm">
              {storeInfo.contact.phone}
            </p>
            <p className="lg:text-2xl 2xl:text-3xl text-sm">
              {storeInfo.contact.email}
            </p>
          </div>
          <div>
            <h3 className="uppercase text-2xl mb-2">
              Opening hours
            </h3>
            {openingHours.map((item, index) => (
              <p className="lg:text-2xl 2xl:text-3xl text-sm" key={index}>
                {item.day} {item.time}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
