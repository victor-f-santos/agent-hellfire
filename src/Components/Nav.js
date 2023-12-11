import Link from "next/link";
import { useRef } from "react";

export default function Nav() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toogle("responsive_nav");
  };
  return (
    <nav class="nav-bar">
      <Link href="#bio">Bio</Link>
      <Link href="#members">Members</Link>
      <Link href="#fotos">Fotos</Link>
      <Link href="#videos">Videos</Link>
      <Link href="#music">Music</Link>
      <Link target="_blank" href="/shop">
        Shop
      </Link>
      <Link href="#contact">Contact</Link>
      <button onClick={showNav}></button>
    </nav>
  );
}
