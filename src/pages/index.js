import { useState } from "react";
import Image from "next/image";
import Nav from "../Components/Nav";
import Bio from "@/Components/Bio";
import Members from "@/Components/Members";
import Fotos from "@/Components/Fotos";
import Videos from "@/Components/Videos";
import Music from "@/Components/Music";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Nav />}
      <div onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
        <Image src="/img/menu.png" alt="Menu Toggle" width={40} height={40} />
      </div>

      <section class="background-image">
        <Image
          src="/img/Logo_BR_Transparent.png"
          alt="Agent Hellfire Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </section>

      <Bio />

      <Members />

      <Fotos />

      <Videos />

      <Music />

      <Contact />

      <Footer />
    </>
  );
}
