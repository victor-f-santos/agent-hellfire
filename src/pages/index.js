import Bio from "@/Components/Bio";
import Contact from "@/Components/Contact";
import Fotos from "@/Components/Fotos";
import Members from "@/Components/Members";
import Music from "@/Components/Music";
import Videos from "@/Components/Videos";
import Image from "next/image";
import { useState } from "react";
import Nav from "../Components/Nav";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Nav />}
      <div onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
        <Image src="/img/menu.png" alt="Menu Toggle" width={40} height={40} />
      </div>

      <div style={{ height: "100vh" }} />

      <Bio />

      <Members />

      <Fotos />

      <Videos />

      <Music />

      <Contact />
    </>
  );
}
