import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import test from "node:test";

export default function Home() {
  return (
    <>
      <Link href="test">Click Here</Link>
      <FaGithub />
    </>
  );
}
