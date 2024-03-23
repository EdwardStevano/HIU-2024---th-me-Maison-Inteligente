import React from "react";
import "./problem.scss";

import image1 from "../../../../../../assets/branding/img/400x500/img26.jpg";
import image2 from "../../../../../../assets/branding/img/400x500/img14.jpg";
import image3 from "../../../../../../assets/branding/img/400x500/img17.jpg";

import StyledCard from "./content/card/styledCard/StyledCard";
import { InView } from "react-intersection-observer";
import { gsap } from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";

const Problem = () => {
  const imgtab = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
  ];

  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  function FadeUp(view) {
    if (view) {
      const timeline = gsap.timeline();
      const timeline2 = gsap.timeline();

      timeline.to(".card-element", {
        y: -100,
        opacity: 1,
        stagger: 0.5,
        ease: "power2.inOut",
        duration: 1,
      });

      timeline2.to(".fusee", {
        motionPath: {
          path: "#Tracé_1",
          align: "#Tracé_1",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        transformOrigin: "50% 50%",
        duration: 5,
        ease: "power1",
      });
      ScrollTrigger.create({
        animation: timeline2,
        start: "top 200%",
        end: "bottom 200%",
        scrub: 0.5,
      });

      gsap.to(".blocLetters div", {
        opacity: 1,
        ease: "power1",
        stagger: 0.2,
      });
      gsap.to(".blocLetters .up", {
        y: -100,
        opacity: 1,
        stagger: 0.6,
        duration: 1,
        opacity: 1,
        ease: "power1",
      });
      gsap.to(".blocLetters .L", {
        delay: 10,
        skewX: 30,
        yoyo: true,
        repeat: -1,
        duration: 1,
        opacity: 1,
        ease: "power1",
        stagger: 0.1,
      });
      gsap.to(".blocLetters .e", {
        delay: 2,
        scale: 1.2,
        ease: "bounce",
        stagger: 10,
      });
      gsap.to(".blocLetters .s", {
        rotate: 360,
        delay: 3,
        duration: 2,
        ease: "bounce",
        stagger: 10,
      });
      gsap.to(".blocLetters .p .svgClock svg", {
        rotate: 360,
        scale: 1,
        delay: 3,
        duration: 3,
        repeat: 5,
        ease: "bounce",
        stagger: 0.7,
      });
      gsap.to(".blocLetters .o", {
        rotateY: 360,
        scale: 1,
        delay: 4,
        duration: 3,
        ease: "bounce",
        stagger: 0.7,
        repeat: -1,
      });
      gsap.to(".blocLetters .b", {
        rotateX: 360,
        scale: 1,
        delay: 4,
        duration: 3,
        ease: "elastic",
        stagger: 0.7,
      });
      gsap.to(".blocLetters .l", {
        rotateX: 360,
        scale: 1,
        delay: 4,
        duration: 3,
        ease: "elastic",
        stagger: 0.7,
      });
      gsap.to(".blocLetters .x", {
        rotate: 360,
        scale: 1,
        delay: 5,
        duration: 3,
        ease: "back.out",
        stagger: 0.7,
      });
      gsap.to(".blocLetters .t p", {
        rotate: 360,
        scale: 0,
        delay: 6,
        duration: 3,
        ease: "back.out",
        stagger: 0.7,
      });
      gsap.to(".blocLetters .t .cactus svg", {
        rotateY: 360,
        scale: 1,
        delay: 6,
        duration: 3,
        ease: "elastic",
        stagger: 0.7,
      });
    }
  }

  return (
    <InView onChange={FadeUp}>
      <div className="Problem-bloc">
        <div className="blocLetters">
          <div className="letters up L">L</div>
          <div className="letters down e">e</div>
          <div className="letters left s">s</div>
          <div className="letters rigth p">
            <div className="svgClock">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M597.678 480.76L390.797 333.998c-22.209-15.766-53-10.532-68.762 11.687l-2.04 2.871c-15.753 22.214-10.526 53 11.691 68.762l206.876 146.771c22.218 15.757 53 10.527 68.766-11.687l2.035-2.876c15.768-22.218 10.529-53.005-11.685-68.766z"
                  fill="#F39A2B"
                />
                <path
                  d="M585.066 423.392l-2.871-2.034c-22.218-15.763-53.004-10.527-68.766 11.687L279.007 763.472c-15.762 22.214-10.527 53.005 11.69 68.763l2.871 2.04c22.218 15.762 53.004 10.53 68.762-11.688l234.423-330.428c15.767-22.22 10.531-53.001-11.687-68.767z"
                  fill="#E5594F"
                />
                <path
                  d="M891.662 525.126c-0.363 50.106-8.104 91.767-27.502 142.522-13.232 34.625-44.231 82.177-70.529 111.108-62.993 69.31-152.478 113.292-240.772 121.615-100.773 9.501-189.621-17.478-271.287-78.551 7.65 5.723-7.536-6.408-7.061-6.009-4.562-3.821-8.967-7.82-13.369-11.824-8.803-8.003-17.105-16.535-25.225-25.224-18.148-19.432-26.188-30.526-41.439-54.866-27.11-43.264-40.704-80.283-51.007-132.536-4.015-20.354-5.395-39.803-5.586-66.233-0.531-73.33-114.29-73.381-113.758 0 1.607 222.487 154.098 420.146 370.093 475.715 216.482 55.697 449.039-49.258 553.91-245.54 37.754-70.664 56.715-150.224 57.293-230.179 0.526-73.379-113.231-73.328-113.761 0.002z"
                  fill="#4A5699"
                />
                <path
                  d="M137.884 501.467c0.362-50.104 8.103-91.762 27.502-142.52 13.233-34.621 44.233-82.173 70.53-111.108 62.993-69.309 152.472-113.29 240.768-121.615 100.773-9.5 189.626 17.479 271.292 78.554-7.652-5.721 7.532 6.408 7.057 6.01 4.563 3.819 8.968 7.821 13.371 11.823 8.803 8 17.108 16.535 25.228 25.225 18.147 19.43 26.187 30.526 41.438 54.866 27.111 43.264 40.709 80.28 51.009 132.533 4.014 20.352 5.396 39.804 5.586 66.232 0.529 73.33 114.287 73.384 113.76 0-1.608-222.489-154.107-420.144-370.099-475.715-216.482-55.7-449.036 49.26-553.905 245.541-37.753 70.664-56.715 150.219-57.292 230.174-0.534 73.384 113.225 73.33 113.755 0z"
                  fill="#C45FA0"
                />
              </svg>
            </div>
            P
          </div>
          <div className="letters up r">r</div>
          <div className="letters down o">o</div>
          <div className="letters rigth b">b</div>
          <div className="letters left l">
            <div className="coconut">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M948.1 702c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17s-20.7-9.8-25.7-17c-5.1-7.3-7.7-10.2-12.7-10.2-5 0-7.5 3-12.7 10.2-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17 13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8zM948.1 652c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17s-20.7-9.8-25.7-17c-5.1-7.3-7.7-10.2-12.7-10.2-5 0-7.5 3-12.7 10.2-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17 13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.6 8-8 8z"
                  fill="#9A2D2F"
                />
                <path
                  d="M339.1 102.3m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                  fill="#FFEB4D"
                />
                <path
                  d="M922.4 958.3h-824c-4.4 0-8-3.6-8-8s3.6-8 8-8h824c4.4 0 8 3.6 8 8s-3.6 8-8 8z"
                  fill="#9A2D2F"
                />
                <path
                  d="M486.6 270.2l22.8 2.1-37.3 678h-74.9z"
                  fill="#FFD7F5"
                />
                <path
                  d="M496.5 297.9l6.5-57.4s-169.2-39.8-254.6-4.9c-66.6 27.2-91.1 89.4-91.4 145.8 0 8.1 60.3-161.6 339.5-83.5z"
                  fill="#FFACC2"
                />
                <path
                  d="M498.7 275l4.9-39.6s-88.2-111.7-187.5-102.6c-84.2 7.8-117.6 55.9-137.6 91.1-10.3 18.2 150.8-107.3 320.2 51.1z"
                  fill="#FFEB4D"
                />
                <path
                  d="M498.8 297.8l-2.5-57.7s156.7-33.6 246.4 18.6c74 43.1 92.5 90 88.9 146.2-0.5 8.1-52.8-153.4-332.8-107.1z"
                  fill="#DAE5FF"
                />
                <path
                  d="M498.3 274.8l-2.1-39.8s98-95.9 197.1-85.7c82.4 8.5 110.5 60.6 128 97.1 9 18.8-142.9-117.7-323 28.4z"
                  fill="#A7F9CE"
                />
                <path
                  d="M689 878.3m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
                  fill="#A7F9CE"
                />
                <path
                  d="M765 950.3h-96v-16c0-26.4 21.6-48 48-48s48 21.6 48 48v16z"
                  fill="#F7D4FF"
                />
                <path
                  d="M699 949.9H571v-32c0-35.2 28.8-64 64-64s64 28.8 64 64v32z"
                  fill="#FFACC2"
                />
                <path
                  d="M744.5 885.6c0.3-2.4 0.5-4.8 0.5-7.3 0-30.9-25.1-56-56-56-19 0-35.8 9.5-45.9 24-2.6-0.3-5.3-0.5-8.1-0.5-39.7 0-72 32.3-72 72v32c0 4.4 3.6 8 8 8h95.4c0.8 0.3 1.7 0.4 2.6 0.4h96c4.4 0 8-3.6 8-8v-16c0-20.8-11.5-39-28.5-48.6zM689 838.3c22.1 0 40 17.9 40 40v1.3c-3.9-0.8-7.9-1.3-12-1.3-6.9 0-13.6 1.3-19.7 3.6-8.3-14.3-21.4-25.5-37-31.4 7.3-7.5 17.5-12.2 28.7-12.2z m-28 103.6h-82v-24c0-30.9 25.1-56 56-56h0.5c5.6 0 11 0.9 16.1 2.5 13.5 4.2 24.8 13.3 31.8 25.2 2.8 4.8 4.9 10.1 6.2 15.6 0.9 4.1 1.5 8.3 1.5 12.6v24H661z m96 0.4h-50v-24.4c0-1.3 0-2.6-0.1-3.8-0.3-6.1-1.4-11.9-3.1-17.5 4.1-1.5 8.6-2.3 13.2-2.3 2.8 0 5.6 0.3 8.3 0.9 5.4 1.1 10.3 3.3 14.7 6.4 10.3 7.2 17.1 19.2 17.1 32.7v8z"
                  fill="#9A2D2F"
                />
                <path
                  d="M316.8 140.8c-27.1 2.5-50.2 9.3-70 20.8 7.9 0.1 16.6-0.7 26.2-2.8 20.7-4.5 35 19.5 66.1 22 37 2.9 44.4-13.5 79.4 4.5 12 6.1 21.4 7.4 28.9 5.9-1.8-1.5-3.6-2.9-5.5-4.4-30.2-23.4-76.5-50.5-125.1-46zM562 195c-11.6 7.1-21.9 14.4-30.7 21 16.1 0.2 35.5-4.1 51.7-17.8 44-37.1 78-13.3 92-25.3 4.1-3.5 8.4-9.4 12.5-15.9-47.2-3.2-94.1 18.7-125.5 38z"
                  fill="#FFFFFF"
                />
                <path
                  d="M822.2 325.1c-14.7-26.5-39.8-49.8-76.5-71.2-32.4-18.9-75.9-29-129.7-30.3 24.8-6.2 50.1-8.4 75.6-6.5 53.1 4 93.4 24.9 112.7 34.8 3.8 1.9 6.8 3.5 9.1 4.5 2.4 1.1 8.2 3.6 12.6-0.7 1.1-1 4.3-4.8 1.4-10.8-9.4-19.5-21-42-41.3-61.4-24.2-23.1-54.6-36.3-93-40.2-42.3-4.4-91 9.5-140.8 40.1-23.4 14.4-41.8 29.2-52.5 38.4-9.7-10.8-26.7-28.3-48.9-45.5-28.8-22.4-57.7-37.4-85.7-44.8 7.9-7.3 12.8-17.7 12.8-29.3 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 9.6 3.4 18.4 9.1 25.4-27.7 3.4-52.1 11.6-73 24.3-3.4-2-7.5-3.3-12.6-3.3-13.8 0-20.7 9.8-25.7 17-5.1 7.3-7.7 10.2-12.7 10.2-5 0-7.5-3-12.7-10.2-5.1-7.2-12-17-25.7-17s-20.7 9.8-25.7 17c-5.1 7.3-7.7 10.2-12.7 10.2s-7.5-3-12.7-10.2c-5.1-7.2-12-17-25.7-17-4.4 0-8 3.6-8 8s3.6 8 8 8c5 0 7.5 3 12.7 10.2 5.1 7.2 12 17 25.7 17s20.7-9.8 25.7-17c5.1-7.3 7.7-10.2 12.7-10.2s7.5 3 12.7 10.2c5.1 7.2 12 17 25.7 17 3 0 5.6-0.5 7.9-1.3-8.3 10.7-15 21.4-20.6 31.4-0.6 1-1 2-1.2 2.9-3.3-0.4-5.5-3.4-9.5-9.8-4.6-7.3-10.9-17.4-23.8-17.4s-19.2 10.1-23.8 17.4c-4.3 6.9-6.5 9.9-10.2 9.9s-5.9-3-10.2-9.9c-4.6-7.3-10.9-17.4-23.8-17.4-4.4 0-8 3.6-8 8s3.6 8 8 8c3.7 0 5.9 3 10.2 9.9 4.6 7.3 10.9 17.4 23.8 17.4s19.2-10.1 23.8-17.4c4.3-6.9 6.5-9.9 10.2-9.9s5.9 3 10.2 9.9c4.6 7.3 10.9 17.4 23.8 17.4 7.5 0 12.7-3.3 16.7-7.6 1.8-0.7 3.9-1.6 6.3-2.7 20-8.6 61.7-26.5 114.9-26.8h1.4c26.8 0 53 4.5 78.5 13.5-62-4.9-110.2-0.5-143.4 13-32.7 13.3-57.7 35.4-74.5 65.5-14.1 25.3-21.7 55.6-21.9 87.6 0 3.8 2.4 7.1 6 8 0.8 0.2 1.6 0.3 2.4 0.3 4.6 0 7-4.1 8.8-7.3 18.1-31 43.9-55.2 76.7-71.7 28.3-14.3 61.2-22.7 98.1-24.9 40-2.4 84.9 2.5 133.7 14.5l-85.3 645.9c-0.3 2.3 0.4 4.6 1.9 6.3 1.5 1.7 3.7 2.7 6 2.7h74.9c4.2 0 7.8-3.3 8-7.6l35.7-644.4c95.7-13.6 173.8-3.7 232.5 29.5 48 27.2 67.5 61.6 73.9 72.9 2 3.5 4.4 7.7 9 7.7 0.6 0 1.3-0.1 2-0.2 3.5-0.8 6.1-3.9 6.3-7.6 2.2-32.4-3-58.6-16.3-82.4zM338.1 78.3c13.2 0 24 10.8 24 24s-10.8 24-24 24-24-10.8-24-24 10.7-24 24-24z m-28.7 109.5h-1.5c-49.7 0.3-89.5 14.9-112.7 24.5 8.2-12.3 18.5-24.9 32.1-36 23.6-19.2 52.6-30.2 88.6-33.5 48.6-4.5 94.8 22.5 125 46 20.2 15.7 36.2 31.9 45.7 42.3 0.6 0.6 1.7 1.9 1.7 1.9v25c-0.1-0.1-0.2-0.1-0.3-0.2-5.5-4.6-11-9-16.6-13.2-10.8-8.1-21.8-15.3-32.9-21.6-41-23.4-84.1-35.2-129.1-35.2z m-74.8 110.7c-27.2 13.8-50 32.4-68.1 55.5 3.1-18.3 8.9-35.3 17.3-50.4 15-26.8 37.4-46.5 66.6-58.5 24.9-10.2 57.5-13.7 91-13.7 31.9 0 64.5 3.2 91.8 7 15.2 8.9 30.1 19.5 44.7 31.8 3.7 3.1 7.4 6.4 11 9.7l-0.3 9.9c-4.4-1.2-8.7-2.2-13-3.3-97.2-23.8-178.2-19.8-241 12z m228.9 642.8h-58.2l83.9-634.8c1.4 0.4 2.8 0.7 4.2 1.1 1.2 0.3 2.4 0.4 3.6 0.1h1.6l-35.1 633.6zM510 234.4s2.8-2.4 4.4-3.7c10.6-8.9 26.9-21.5 46.7-33.7 32.5-20 81.6-42.7 130.4-37.7 63.8 6.6 93 39.6 112.3 74.4-22.4-11.2-61.1-28.7-110.9-32.5-43.9-3.4-86.8 4.6-128.4 23.8-12.3 5.7-24.5 12.3-36.5 19.9-6.6 4.2-13.1 8.6-19.6 13.3-0.1 0.1-0.2 0.1-0.3 0.2l1.9-24z m245.1 86.5c-44.1-25-98.3-37.5-161.7-37.5-24.5 0-50.5 1.9-77.8 5.6l-10.2 1.5 0.4-10.3c3.4-2.7 6.9-5.4 10.3-7.9 17.2-12.6 34.6-23.1 52.3-31.5 51.9-3.5 121.1-1.2 169.3 26.9 34.2 19.9 57.3 41.2 70.6 65.2 7.9 14.2 12.5 29.5 14.1 46.9-12.3-16.8-33.1-39.6-67.3-58.9z"
                  fill="#9A2D2F"
                />
                <path
                  d="M532.1 437.5l15.9 1.3-26.2 511h-52.5z"
                  fill="#DAE5FF"
                />
                <path
                  d="M538.9 458.8l4.6-40.2s-118.5-27.8-178.4-3.4c-46.6 19-63.8 62.6-64.1 102 0 5.7 42.3-113.1 237.9-58.4z"
                  fill="#FFACC2"
                />
                <path
                  d="M540.4 442.7l3.4-27.7s-61.8-78.2-131.4-71.8c-59 5.4-82.4 39.2-96.4 63.8-7.2 12.7 105.7-75.2 224.4 35.7z"
                  fill="#FFEB4D"
                />
                <path
                  d="M540.5 458.7l-1.7-40.4s109.8-23.6 172.7 13c51.9 30.2 64.8 63 62.3 102.4-0.4 5.6-37.1-107.5-233.3-75z"
                  fill="#DAE5FF"
                />
                <path
                  d="M540.1 442.6l-1.5-27.9s68.6-67.1 138.1-60c57.7 6 77.4 42.4 89.7 68 6.4 13.1-100.1-82.4-226.3 19.9z"
                  fill="#A7F9CE"
                />
                <path
                  d="M770 475.2c-10.5-19-28.4-35.6-54.5-50.8-21.1-12.3-47-18.2-72.3-20.5 52.7-6.8 93.5 14.2 111.1 23.3 2.7 1.4 4.8 2.5 6.5 3.2 1.8 0.8 7.2 3.2 11.5-1 2.1-2.1 3.6-5.9 1.5-10.4-6.6-13.9-15-29.8-29.5-43.6-17.1-16.3-39.5-26-66.6-28.8-30.2-3.1-64.8 6.7-100.1 28.4-15.3 9.4-27.6 19-35.3 25.6-7.1-7.7-18.5-19.2-33-30.4-33.2-25.8-66.9-38-97.4-35.2-67.6 6.2-92.2 49.4-102.7 67.8-2.5 4.3-1.2 8.2 0.7 10.4 4 4.4 9.5 2.4 11.4 1.8 1.7-0.6 3.9-1.6 6.7-2.8 18.4-7.9 61.2-26.3 113.9-15.2-28.6-0.8-57.7 1.5-79.7 10.5-23.4 9.6-41.4 25.3-53.4 46.9-10.1 18.1-15.5 39.7-15.7 62.5 0 3.8 2.4 7 5.9 8 0.8 0.2 1.6 0.3 2.4 0.3 4.5 0 6.8-4 8.2-6.3 12.5-21.3 30.2-37.9 52.8-49.3 40.8-20.7 94.2-23.2 158.7-7.6l-59.6 486.5c-0.3 2.3 0.4 4.6 1.9 6.3s3.7 2.7 6 2.7h52.5c4.3 0 7.8-3.3 8-7.6l24.9-485.6c65.6-9 119.2-2.1 159.5 20.6 33.1 18.7 46.5 42.3 50.9 50.1 1.4 2.5 3.7 6.6 8.4 6.6 0.6 0 1.3-0.1 2-0.2 3.5-0.8 6-3.8 6.3-7.5 1.3-22.8-2.5-41.6-11.9-58.7z m-94-112.5c39.4 4.1 59.5 22.9 72.8 44.1-16.3-7.7-41-17.2-71.4-19.5-30.9-2.4-61.2 3.2-90.6 16.6-12 5.5-23.8 12.3-35.5 20.3-0.2 0.1-0.3 0.2-0.5 0.3l-0.1 0.1s0.7-7.7 1-10.9c2.4-2 5.3-4.5 8.7-7.1C584.1 388 630.3 358 676 362.7z m-267.5 15.2h-1.1c-30.3 0.2-55.4 7.8-72.3 14.3 4.8-6.3 10.4-12.5 17.3-18.1 16.2-13.2 36-20.7 60.8-22.9 47.3-4.4 91.9 34.4 112.5 55.6 2 2.1 3.8 3.9 5.3 5.6 0.1 3.9 0.1 11.7 0.1 11.7-10.3-8.3-20.8-15.5-31.5-21.6-28.9-16.4-59.4-24.6-91.1-24.6zM355 455.6c-16.4 8.3-30.5 19-42.3 32.1 5.8-23.2 20.3-50.8 55.4-65.1 17.2-7 39.7-9.5 62.8-9.5 22 0 44.6 2.2 63.5 4.8 9.7 5.7 19.5 12.6 29.4 20.8 2.7 2.2 5.4 4.6 8.1 7l0.1 2.6v0.2c-3.1-0.8-6.1-1.5-9.1-2.2-67.5-16-123.9-12.9-167.9 9.3z m159.2 486.2h-35.8l58.2-475.4h0.2c0.6 0.2 1.2 0.2 1.7 0.3l-24.3 475.1zM722 471.3c-31.3-17.7-69.6-26.5-114.5-26.5-16.5 0-33.8 1.2-52 3.6-2.4 0.3-4.9 0.7-7.4 1l0.3-3.1c2.5-2 5-3.9 7.5-5.7 11.8-8.6 23.4-15.5 34.7-20.9 35.9-2.4 83.7-0.7 116.8 18.5C731 452 746.9 466.6 756 483c4 7.2 6.8 14.8 8.4 23.1-9.1-10.8-22.6-23.6-42.4-34.8z"
                  fill="#9A2D2F"
                />
              </svg>
            </div>
            l
          </div>
          <div className="letters up e">e</div>
          <div className="letters rigth m">m</div>
          <div className="letters down m">e</div>
          <div></div>
          <div className="letters left e"> E</div>
          <div className="letters rigth x">x</div>
          <div className="letters up i">i</div>
          <div className="letters down s">s</div>
          <div
            className="letters left t"
            style={{
              position: "relative",
            }}
          >
            <div className="cactus">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M513.92 68.71h12A116.59 116.59 0 0 1 642.5 185.3v728.84a41.15 41.15 0 0 1-41.15 41.15H438.48a41.15 41.15 0 0 1-41.15-41.15V185.3A116.59 116.59 0 0 1 513.92 68.71z"
                  fill="#4C9589"
                />
                <path
                  d="M424 752c-53.89 0-131.52-8.8-183.29-84.94-41.15-60.51-60.32-156.89-60.32-303.31a57.1 57.1 0 1 1 114.19 0c0 119.08 13.64 199.53 40.55 239.1 14.68 21.58 34.66 35 88.86 35A57.1 57.1 0 1 1 424 752zM603.83 584.48a57.1 57.1 0 0 1 0-114.19c50.76 0 78.59-8.07 96-27.86 24.69-28 37.2-87.16 37.2-175.79a57.1 57.1 0 1 1 114.19 0c0 120.56-20.88 200.4-65.72 251.29-51.96 58.98-124.38 66.55-181.67 66.55z"
                  fill="#4C9589"
                />
                <path
                  d="M438.25 175.29l33.56 0 0 83.94-33.56 0 0-83.94Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M232.017583 381.607965l33.493777-2.10725 5.270637 83.774363-33.493777 2.10725-5.270637-83.774363Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M220.695979 523.146565l32.46596-8.499119 21.257927 81.203597-32.46596 8.499118-21.257927-81.203596Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M290.392718 653.891246l16.78-29.063813 72.694172 41.97-16.78 29.063813-72.694172-41.97Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M733.163193 472.110713l15.584539 29.721975-74.340361 38.979922-15.584539-29.721974 74.340361-38.979923Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M788.434288 373.40643l31.341442 11.999483-30.013008 78.390962-31.341443-11.999482 30.013009-78.390963Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M763.93801 259.133152l33.412708 3.140781-7.855695 83.571596-33.412708-3.140781 7.855695-83.571596Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M438.25 386.54l33.56 0 0 83.94-33.56 0 0-83.94Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M438.25 599.7l33.56 0 0 83.94-33.56 0 0-83.94Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M438.25 810.96l33.56 0 0 83.94-33.56 0 0-83.94Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M507.72 110.58l33.56 0 0 83.94-33.56 0 0-83.94Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M507.72 321.84l33.56 0 0 83.94-33.56 0 0-83.94Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M507.72 534.99l33.56 0 0 83.94-33.56 0 0-83.94Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M507.72 746.25l33.56 0 0 83.94-33.56 0 0-83.94Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M568.62 194.32l33.56 0 0 83.94-33.56 0 0-83.94Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M568.62 405.58l33.56 0 0 83.94-33.56 0 0-83.94Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M568.62 618.74l33.56 0 0 83.94-33.56 0 0-83.94Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M568.62 829.99l33.56 0 0 83.94-33.56 0 0-83.94Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M183.54 250.68S200 328 239.21 328 299 263 299 263l-35.05 22.68-28.87-68-14.43 59.79z"
                  fill="#D77A88"
                />
              </svg>
            </div>
            <p>t</p>
          </div>
          <div className="letters rigth a">a</div>
          <div className="letters up n">n</div>
          <div className="letters down t">t</div>
        </div>
        <div className="fusee">
          <svg
            width="309.18"
            height="490.97"
            enable-background="new 0 0 512 512"
            version="1.1"
            viewBox="0 0 309.18317 490.96796"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-101 -2.2197)">
              <ellipse
                cx="254.92"
                cy="167.05"
                rx="53.153"
                ry="56.407"
                fill="#b2d7dc"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="9"
              />
              <g stroke-width="9">
                <path
                  d="m204.19 62.194c14.147-20.472 29.339-41.613 50.963-54.72 21.323 12.782 36.366 33.547 50.311 53.656 32.847 49.754 52.929 109.52 48.878 169.58 10.615 8.898 21.537 17.441 31.994 26.521 15.011 13.797 22.02 35.319 18.406 55.327-5.036 25.275-9.876 50.607-15.206 75.813-2.963 12.968-20.508 18.905-30.823 10.62-17.121-14.291-33.816-29.108-50.932-43.417-12.95 12.462-30.153 20.772-48.214 21.773-20.791 1.466-41.375-7.156-56.448-21.242-12.28 9.401-23.666 20.686-35.664 30.755-5.799 4.66-10.621 10.784-17.484 13.966-10.64 4.565-24.342-2.248-26.747-13.685-5.479-24.642-11.203-49.24-16.52-73.92-4.321-20.878 3.332-43.61 19.419-57.607 9.313-7.822 18.756-15.487 28.243-23.096 2.643-1.39 1.315-4.596 1.465-6.951-2.828-57.951 16.967-115.23 48.359-163.37zm16.803 76.332c-12.424 15.994-10.921 40.768 3.488 55.052 15.255 16.809 44.15 17.422 60.106 1.29 12.317-11.253 16.482-30.146 10.603-45.671-5.387-14.967-19.809-26.195-35.671-27.591-14.648-1.686-29.815 5.053-38.526 16.92z"
                  fill="#b23051"
                  stroke="#000"
                  stroke-width="9"
                />
              </g>
              <path
                d="m198.26 407.82c-0.213-7.266 8.83-12.262 14.942-8.417 25.87 13.32 58.027 13.314 83.896-7e-3 5.937-3.645 14.736 0.733 14.955 7.803 0.087 15.432 0.105 30.88 0.024 46.317 0.119 7.533-9.832 12.337-15.681 7.626-4.452-3.926-8.467-8.341-12.75-12.461-6.776 13.201-13.163 26.602-19.995 39.772-3.281 6.275-13.533 6.318-16.877 0.105-6.87-13.195-13.213-26.676-20.121-39.858-4.221 4.157-8.248 8.548-12.694 12.468-5.824 4.734-15.756-0.162-15.675-7.647-0.124-15.229-0.043-30.465-0.024-45.701z"
                fill="#dc9517"
              />
            </g>
          </svg>
        </div>
        <div className="chemin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1480.138"
            height="327.235"
            viewBox="0 0 1480.138 327.235"
          >
            <path
              id="Tracé_1"
              data-name="Tracé 1"
              d="M0,0S439.227,185.9,857.227,217.649c200.7,15.245-180.869-168.238-263.362-270.421C581.779-67.742,576.1-80.9,579.453-91.481c21.663-68.26,863.462,101.422,900.138,65.087"
              transform="translate(0.195 108.203)"
              fill="none"
              stroke="#707070"
              stroke-width="1"
            />
          </svg>
        </div>
        {/* <div className="card-content">
          {imgtab.map((imgElement) => (
            <div className="card-element">
              <StyledCard image={imgElement.img} />
            </div>
          ))}
        </div> */}
      </div>
    </InView>
  );
};

export default Problem;