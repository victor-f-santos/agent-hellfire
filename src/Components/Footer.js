import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <Link
          target="_blank"
          href="https://www.facebook.com/Agenthellfire/"
          class="footer--icon"
        >
          <Image
            src="/img/logos/facebook_icon.png"
            alt="facebook icon"
            width={40}
            height={40}
          />{" "}
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/agenthellfire"
          class="footer--icon"
        >
          <Image
            src="/img/logos/instagram_icon.png"
            alt="instagram icon"
            width={40}
            height={40}
          />{" "}
        </Link>
        <Link href="https://soundcloud.com/agent-hellfire" class="footer--icon">
          <Image
            src="/img/logos/soundcloud_icon.png"
            alt="soundcloud icon"
            width={40}
            height={40}
          />{" "}
        </Link>
        <Link
          href="https://open.spotify.com/intl-de/artist/4TGi2ZuKyxYQC2NeMOtu7Q?si=d2W06jD4Tc6McP7xTKXEnA"
          class="footer--icon"
        >
          <Image
            src="/img/logos/spotify_icon.png"
            alt="spotify icon"
            width={40}
            height={40}
          />
        </Link>
        <Link href="https://www.tiktok.com/@agenthellfire" class="footer--icon">
          <Image
            src="/img/logos/tiktok_icon.png"
            alt="tiktok icon"
            width={40}
            height={40}
          />{" "}
        </Link>
        <Link href="https://twitter.com/hellfireagent" class="footer--icon">
          <Image
            src="/img/logos/twitter_icon.png"
            alt="twitter icon"
            width={40}
            height={40}
          />{" "}
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCPXWgKGSyCf7fLLV9_1VLjw?sub_confirmation=1"
          class="footer--icon"
        >
          <Image
            src="/img/logos/youtube_icon.png"
            alt="youtube icon"
            width={40}
            height={40}
          />
        </Link>
      </footer>
    </>
  );
}
