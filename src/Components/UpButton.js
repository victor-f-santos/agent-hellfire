import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

function BackToTop() {
  const [BackToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {BackToTop && (
        <button className="goTop">
          <Image
            src="/img/up-button.png"
            alt="Go to top button"
            width={50}
            height={50}
            onClick={scrollUp}
          />
        </button>
      )}
    </>
  );
}

export default BackToTop;
