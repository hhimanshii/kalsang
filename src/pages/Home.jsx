import React from "react";
import bgImage from "../assets/images/bgImage.png";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import heroSection from "../assets/images/heroSection.png";

const HomePage = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".heading", {
      y: 60,
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
    })
      .from(".subheading", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(".heroImage", {
        x: 20,
        opacity: 0,
        duration: 1,
        rotate: 30,
        ease: "power3.out",
      })
      .from(".hot-fumes", {
        x: 0,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      });
  }, []);

  return (
    <>
      <div
       className="h-[100vh]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="w-full h-[70%] flex flex-row items-center justify-end mt-[8%]">
          <div className=" h-full flex flex-col items-start px-4 text-center">
            <p
              className="heading italic text-yellow-500 
                       text-4xl sm:text-6xl md:text-7xl lg:text-[200px]"
              style={{ fontFamily: "Allura" }}
            >
              Kalsang
            </p>
            <p
              className="subheading text-white
                       text-sm sm:text-base md:text-xl self-center"
                       style={{ fontFamily: "Montserrat" }}
            >
              Tibetean, Chinese and Thai cuisine
            </p>
          </div>

          <div className="h-full relative flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-end px-4 lg:pr-10">
            <svg
              className="hidden md:block absolute
                       right-[5%] lg:right-[15%] 
                       bottom-[300px] 
                       w-[160px] md:w-[200px] lg:w-[240px] 
                       h-[280px] md:h-[320px] lg:h-[380px]
                       z-10 hot-fumes"
              viewBox="0 -120 240 500"
              fill="none"
            >
              <g className="smoke-group">
                <path
                  d="M120 380 C60 300 180 260 120 200 C60 140 180 100 120 40"
                  className="smoke core"
                />
                <path
                  d="M120 380 C60 300 180 260 120 200 C60 140 180 100 120 100"
                  className="smoke soft"
                />
              </g>
              <g className="smoke-group">
                <path
                  d="M160 360 C120 300 200 250 160 200 C120 150 200 110 160 70"
                  className="smoke core medium"
                />
                <path
                  d="M160 360 C120 300 200 250 160 200 C120 150 200 110 160 70"
                  className="smoke soft medium"
                />
              </g>
              <g className="smoke-group">
                <path
                  d="M80 330 C40 280 120 240 80 200 C40 160 120 130 80 100"
                  className="smoke core small"
                />
                <path
                  d="M80 330 C40 280 120 240 80 200 C40 160 120 130 80 100"
                  className="smoke soft small"
                />
              </g>
            </svg>
            <img
              src={heroSection}
              alt="food"
              className="heroImage relative z-0
                       w-[100%] sm:w-[60%] md:w-[50%] lg:w-[100%]
                       h-auto "
            />
          </div>
        </div>
      </div>

      <div className="h-80 w-full bg-[#9b1915]"></div>
    </>
  );
};

export default HomePage;
