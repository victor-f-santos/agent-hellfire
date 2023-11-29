import Link from "next/link";

export default function Nav() {
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
