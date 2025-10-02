"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative z-10 mt-48 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="space-y-4 sm:space-x-6">
            <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight">
              <span className="block font-black text-white"> Create. </span>
              <span className="block font-light italic text-purple-300">
                {" "}
                Publish.{" "}
              </span>
              <span className="block font-black bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                {" "}
                Grow.{" "}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl md:max-w-none">
              The AI-powered platform that turns your ideas into
              <span className="text-purple-300 font-semibold">
                {" "}
                engaging content{" "}
              </span>{" "}
              and helps you build a thriving creator business.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <Link href="/dashboard">
              <Button
                size="xl"
                variant="primary"
                className="rounded-full w-full sm:w-auto text-white"
              >
                Start Creating for free
                <ArrowRight className="h-4w-4" />
              </Button>
            </Link>
            <Link href="/feed">
              <Button
                size="xl"
                variant="outline"
                className="rounded-full w-full sm:w-auto"
              >
                Explore the Feed
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <Image
            src="/banner.png"
            alt="Platform Banner"
            width={500}
            height={700}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
