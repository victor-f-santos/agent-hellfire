import Image from "next/image";
import Footer from "./Footer";
import React from "react";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [imgSrc, setImgSrc] = useState("/img/Logo_BR_Transparent.png");
  const [imgToggle, setImgToggle] = useState(false);
  const updateSrc = "/img/Logo_BR_Transparent.png";
  const updateSrc2 = "/img/pentagram.png";
  const [BackToTop, setBackToTop] = useState(false);

  const changeImg = () => {
    setImgSrc(imgToggle ? updateSrc : updateSrc2);
    setImgToggle(!imgToggle);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);
  return (
    <>
      <main>{children}</main>
      <section class="background-image">
        <Image
          src={imgSrc}
          alt="Agent Hellfire Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </section>

      {BackToTop && (
        <button className="hellfire">
          <Image
            src="/img/pentagram.png"
            alt="Pentagram"
            width={50}
            height={50}
            onClick={changeImg}
          />
        </button>
      )}

      <Footer />
    </>
  );
}
