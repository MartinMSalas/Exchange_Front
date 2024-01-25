import React from "react";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

function navbar() {
  return (
    <div className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]">
      <Image
        className="hover:scale-105"
        src="/swapify-light.svg"
        alt="Swapify"
        width={150}
        height={100}
      />
      <div className="hidden md:flex gap-5">
        <h2 className="hover:bg-yellow-300 p-2 px-3 cursor-pointer rounded-full hover:text-white">
          <a href="/">Home</a>
        </h2>
        <h2 className="hover:bg-yellow-300 p-2 px-3 cursor-pointer rounded-full hover:text-white">
          History
        </h2>
        <h2 className="hover:bg-yellow-300 p-2 px-3 cursor-pointer rounded-full hover:text-white">
          <a></a>Contact Us
        </h2>
        <SignedIn>
          <h2 className="hover:bg-yellow-300 p-2 px-3 cursor-pointer rounded-full hover:text-white">
            <a href="/contacts">Contacts</a>
          </h2>
          <h2 className="hover:bg-yellow-300 p-2 px-3 cursor-pointer rounded-full hover:text-white">
            Wallet
          </h2>
          <h2 className="hover:bg-yellow-300 p-2 px-3 cursor-pointer rounded-full hover:text-white">
            User panel
          </h2>
        </SignedIn>
      </div>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default navbar;
