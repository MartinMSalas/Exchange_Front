"use client";
import Hero from "@/components/Home/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <NavBar />
      <Hero />
    </div>
  );
}
