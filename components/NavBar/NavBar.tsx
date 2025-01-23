"use client";

import Link from "next/link";

import Image from "next/image";
import TestImg from "./testImg.png";

import CornerBorder from "../Borders/CornerBorder";
import PageLink from "./PageLink";

import { FaFontAwesomeLogoFull, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";

import NavLogoContainer from "./NavLogoContainer";

import AcssLogo from "@/images/AcssLogo.png";

import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

function NavBar() {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 15;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);

  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <div className="overflow-hidden">
        <nav className="navbar flex justify-between items-center px-[2vw]  pt-[10px] w-screen">
          <Link
            href="../"
            className="hover:bg-jms-blue hover:text-white rounded scale-[.85] p-[5px] duration-200"
          >
            <CornerBorder
              className=" outline-black hidden "
              cornerSize="11px"
              borderThickness="2.5px"
              borderGap="3px"
            >
              <Image
                src={AcssLogo}
                alt="AcssLogo"
                className="max-h-[100px] max-w-[250px]"
              ></Image>
            </CornerBorder>
          </Link>

          <ul className="text-center list-none inline-flex">
            <PageLink text="About Us" link="/AboutPage" />
            <PageLink text="Events" link="/Events" />
            <PageLink text="Meet the Committee" link="/Committee" />
          </ul>
          <NavLogoContainer />
        </nav>
        <motion.div
          className="flex w-max"
          ref={ref}
          style={{ x: xTranslation }}
        >
          <div className="custom-diagonal-white-right-animated w-[98vw] h-[15px]  md:h-[23px] mt-2 "></div>
          <div className="custom-diagonal-white-right-animated w-[100vw] h-[15px]  md:h-[23px] mt-2 "></div>
        </motion.div>
      </div>
    </>
  );
}

export default NavBar;
