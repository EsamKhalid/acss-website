"use client";
import React from "react";
import Image from "next/image";

import NavBar from "@/components/NavBar/NavBar";
import ProjectTile from "@/components/ProjectsSection/ProjectTile";
import SortableGrid from "@/components/ProjectsSection/SortableGrid";

import placeholder from "@/images/placeholder.avif";
import mascot from "@/images/mascotimg.jpg";

export default function Page() {
  const tilesList = [
    <ProjectTile
      className=""
      key={1}
      ProjectTitle="Event"
      ImageSource={mascot}
      ProjectType="University Assignment"
      EndDate={new Date("2024-02-21")}
    />,
    <ProjectTile
      className=""
      key={2}
      ProjectTitle="Event"
      ImageSource={mascot}
      ProjectType="Personal/Sixth Form Project"
      EndDate={new Date("2023-04-16")}
    />,
    <ProjectTile
      className=""
      key={3}
      ProjectTitle="Event"
      ImageSource={mascot}
      ProjectType="Personal Project"
      EndDate={new Date("2024-03-31")}
    />,
    <ProjectTile
      className=""
      key={4}
      ProjectTitle="Event"
      ImageSource={mascot}
      ProjectType="Personal Project"
      EndDate={new Date("2024-07-15")}
    />,
    <ProjectTile
      className=""
      key={5}
      ProjectTitle="Event"
      ImageSource={mascot}
      ProjectType="University Assignment"
      EndDate={new Date("2024-04-23")}
    />,
  ];

  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px] overflow-hidden">
        <h1 className="text-4xl">// Welcome to the official ACSS Website</h1>
        <p className="text-2xl text-justify mx-5 my-3"></p>

        <div className="flex justify-center">
          <SortableGrid>{tilesList}</SortableGrid>
        </div>
      </div>
    </>
  );
}
