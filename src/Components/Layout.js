import Image from "next/image";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <section class="background-image">
        <Image
          src="/img/Logo_BR_Transparent.png"
          alt="Agent Hellfire Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </section>
      <Footer />
    </>
  );
}
