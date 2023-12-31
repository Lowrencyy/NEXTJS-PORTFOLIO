"use client";

import React from "react";
import { color, motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="ml-small flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="box-top text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
         <span className="color"> Mark Laurence Laurio Tomenio</span>
          </h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
            <span >
            <span className="im">Hi I&#39;m</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Mark Laurence </span>
            Full Stack Web Developer!!
            </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          A Full Stack Web Developer With Experience In Creating Responsive Website. Check out my project and skills.
        </motion.p>
      
       <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center ml text-white cursor-pointer rounded-lg max-w-[200px] "
          href="https://www.dropbox.com/scl/fi/qhm9w8y6yw64ptzwb4cml/Mark-Laurence-Tomenio.pdf?rlkey=vvw3vsl0o85f0iotr38iulq78&dl=0"
          target="_blank"
        >
          Download my CV
        </motion.a>
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://github.com/Lowrencyy"
          target="_blank"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] ml-m"
         >
          GITHUB LINK
        </motion.a>
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://github.com/Lowrencyy"
          target="_blank"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] ml-l"
         >
          GET STARTED
        </motion.a>
       </div>
     

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;