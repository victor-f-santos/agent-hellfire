import Link from "next/link";
import { useRef } from "react";

export default function Nav() {
  document.querySelectorAll(".nav-bar a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("currenttarget", e.target.href.split("/")[3]);
      const links = e.target.href.split("/")[3];
      links.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <nav class="nav-bar">
      <Link href="#bio">Bio</Link>
      <Link href="#members">Members</Link>
      <Link href="#fotos">Fotos</Link>
      <Link href="#videos">Videos</Link>
      <Link href="#music">Music</Link>
      <Link href="#store">Store</Link>
      <Link href="#contact">Contact</Link>
    </nav>
  );
}
