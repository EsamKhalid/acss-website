import React from "react";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function NavLogoContainer() {
  return (
    <>
      <div className="NavLogoContainer justify-between">
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
    </>
  );
}
