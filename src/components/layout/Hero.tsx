"use client";

import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/Typing";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="flex items-center min-h-screen px-20 bg-gradient-to-r from-gradientLeft to-gradientRight"
    >
      <div className="flex flex-row items-center w-full">
        <div className="flex flex-col z-20 pointer-events-none text-white w-3/5">
          <p className="text-[5vw] font-bold text-lightcyan w-full">
            Greetings, I&apos;m Miuler
          </p>
          <p className="text-[3vw]">
            a developer specializing in web applications with
            <Typing />
          </p>
          <div className="flex mt-6 justify-start w-[17vw]">
            <SocialMedia size={200} />
          </div>
        </div>
        <img
          className="w-2/5 object-contain self-center animate-scalepause"
          src="/portraitdummy.webp"
          alt="Portrait"
        />
      </div>
    </div>
  );
};

export default Hero;
