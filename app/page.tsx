"use client";
import React from "react";
import Image from "next/image";

import NavBar from "@/components/NavBar/NavBar";
import EventTile from "@/components/EventsSection/EventTile";
import SortableGrid from "@/components/EventsSection/SortableGrid";

import placeholder from "@/images/placeholder.avif";
import mascot from "@/images/mascotimg.jpg";

export default function Page() {
  const tilesList = [
    <EventTile
      className=""
      key={1}
      EventTitle="Event"
      ImageSource={mascot}
      EventType="Social Event"
      EndDate={new Date("2024-02-21")}
    />,
    <EventTile
      className=""
      key={2}
      EventTitle="Event"
      ImageSource={mascot}
      EventType="Technical Talk"
      EndDate={new Date("2023-04-16")}
    />,
    <EventTile
      className=""
      key={3}
      EventTitle="Event"
      ImageSource={mascot}
      EventType="ACSS Outing"
      EndDate={new Date("2024-03-31")}
    />,
    <EventTile
      className=""
      key={4}
      EventTitle="Event"
      ImageSource={mascot}
      EventType="Social Event"
      EndDate={new Date("2024-07-15")}
    />,
    <EventTile
      className=""
      key={5}
      EventTitle="Event"
      ImageSource={mascot}
      EventType="Technical Talk"
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
