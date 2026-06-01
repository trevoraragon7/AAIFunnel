"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              AI Systems Built For <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-[#FF3B4F]">
                Real Business Operations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=720&fit=crop&q=80"
          alt="AI workflow dashboard showing automated business operations"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
