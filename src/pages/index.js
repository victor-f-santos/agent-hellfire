import { useState } from "react";
import Image from "next/image";
import Nav from "../Components/Nav";
import Bio from "@/Components/Bio";
import Members from "@/Components/Members";
import Fotos from "@/Components/Fotos";
import Videos from "@/Components/Videos";
import Music from "@/Components/Music";
import Contact from "@/Components/Contact";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <Nav />}
      <div onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
        <Image src="/img/menu.png" alt="Menu Toggle" width={40} height={40} />
      </div>

      <Bio />

      <Members />

      <Fotos />

      <Videos />

      <Music />

      <Contact />
    </>
  );
}
