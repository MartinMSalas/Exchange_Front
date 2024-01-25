import React from "react";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Receive <span className="text-yellow-500">money</span>, swap your
          currency. Super fast, super easy, super{" "}
          <span className="text-yellow-500">secure</span>.
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Swapify is a platform that allows you to swap your currency for
          another currency, send or receive money in just minutes or hold your
          savings in dollars.
        </h2>
        <SignedIn>
          <h2 className="text-[20px] text-red-400 pr-20 mt-5">
            To get full access you need to complete the KYC verification!.
          </h2>
          <button
            className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white
         p-2 px-4 rounded-full mt-5 hover:scale-105 transition-all"
          >
            <a href="#">KYC verification</a>
          </button>
        </SignedIn>
        <SignedOut>
          <button
            className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white
         p-2 px-4 rounded-full mt-5 hover:scale-105 transition-all"
          >
            <a href="/Auth/sign-in">Register or login</a>
          </button>
        </SignedOut>
      </div>
      <div className="w-100">
        <div>
          <Image
            src="/coins-hero.svg"
            alt="Transferencias"
            width={400}
            height={500}
            className="w-full px-10 p-3 object-cover align-bottom hover:scale-105 transition-all"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
