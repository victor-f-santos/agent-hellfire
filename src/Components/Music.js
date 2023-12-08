import Image from "next/image";

export default function Music() {
  return (
    <section class="music">
      <h2 id="music">Music</h2>
      <Image
        class="music--album-cover"
        src="/img/covers/1-1_COVER_FINAL_LOGO_RGB (1).jpg"
        alt="The Omen EP cover"
        width={350}
        height={350}
      />
      <p>The Omen, released on October 30th</p>
      <Image
        class="music--album-cover"
        src="/img/covers/DT_Cover_art.jpg"
        alt="DT album cover"
        width={350}
        height={350}
      />
      <p>D.T., released on December 13th</p>
      <iframe
        class="music--spotify"
        src="https://open.spotify.com/embed/artist/4TGi2ZuKyxYQC2NeMOtu7Q?utm_source=generator&theme=0"
        width="90%"
        height="380"
        frameborder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </section>
  );
}
