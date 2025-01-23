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
              className="hover:outline-black outline-white mb-[15px] [&_*]:hover:"
              cornerSize="9px"
              borderThickness="2px"
              borderGap="3px"
            >
              <CornerBorder
                className=" outline-black"
                cornerSize="9px"
                borderThickness="2px"
                borderGap="3px"
              >
                <Image src={AcssLogo} alt="AcssLogo" className="h-fit"></Image>
              </CornerBorder>
            </CornerBorder>
          </Link>

          <ul className="text-center list-none inline-flex">
            <PageLink text="About Us" link="/AboutPage" />
            <PageLink text="Events" link="/Events" />
            <PageLink text="Meet the Committee" link="/Committee" />
          </ul>
          <div className="NavLogoContainer sm:flex justify-between hidden ">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/esam-khalid-49648728b/"
            >
              <FaLinkedin className="NavLogo" />
            </Link>
            <Link target="_blank" href="https://github.com/EsamKhalid">
              <FaInstagram className="NavLogo" />
            </Link>
            <Link target="_blank" href="https://discord.gg/yseNncdr">
              <FaDiscord className="NavLogo" />
            </Link>
          </div>
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
