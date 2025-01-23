"use client";

import React, { ReactNode, useEffect, useState } from "react";

import Link from "next/link";

import { Children } from "react";

import EventTile from "../EventsSection/EventTile";

import placeholder from "../../Images/placeholder.avif";

interface DisplayGridProps {
  children: React.ReactNode;
}

export default function DisplayGrid({ children }: DisplayGridProps) {
  const [childList, setChildList] = useState<ReactNode[]>([]);

  function populateGrid() {
    const newChildList: ReactNode[] = [];
    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === EventTile) {
        newChildList.push(child);
      }
    });
    setChildList(newChildList);
  }

  useEffect(() => {
    populateGrid();
  }, [children]);

  return (
    <div className="w-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {childList}
      </div>
    </div>
  );
}
