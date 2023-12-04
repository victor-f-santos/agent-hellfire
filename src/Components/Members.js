import Image from "next/image";

export default function Members() {
  return (
    <>
      <h2 id="members">Members</h2>
      <h4 className="members--name">Adans Aldani</h4>
      <article className="members--card">
        <Image
          className="members--img"
          src={"/img/profile/IMG_9488.jpg"}
          alt="Adans Aldani playing bass at Sage Club in Berlin"
          width={700}
          height={600}
        />

        <p className="members--text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          repellendus facere voluptate maiores ab reiciendis placeat voluptatum
          nulla, fugit veniam unde doloremque numquam nihil delectus
          consequuntur aliquam quis et non aliquid sint officiis quod quos
          deleniti reprehenderit! Laboriosam dignissimos sapiente rerum itaque,
          laborum magnam hic placeat, nisi soluta facilis totam molestiae
          architecto quibusdam nihil, asperiores iusto deleniti maxime omnis eos
          corrupti. Mollitia accusantium debitis suscipit beatae nobis eaque
          quas officiis architecto at odit, qui necessitatibus nesciunt
          aspernatur? Quaerat laborum asperiores dicta obcaecati omnis soluta
          voluptates nemo libero reprehenderit fugit. Sed delectus nulla
          nostrum. A tenetur optio nihil modi exercitationem enim.
        </p>
        <p>Picture: Kaie Orloff</p>
        <a target="_blank" href="https://www.instagram.com/adans_ix/">
          <Image
            class="img-icon"
            src="/img/logos/instagram_icon.png"
            alt="Instagram Logo"
            width={50}
            height={50}
          />
        </a>
      </article>
      <h4 className="members--name">Victor Munhoz</h4>
      <article>
        <section className="imageWrapper">
          <Image
            className="members--img"
            src="/img/profile/Agent Hellfire im Sage_-31.jpg"
            alt="Victor Munhoz playing drums at Sage Club"
            width={700}
            height={600}
          />
        </section>
        <p>
          Born and raised in São Paulo, Brazil, Victor started his journey on
          drums by the age of 14, taking classes at a local music school but his
          passion for making music started much earlier, when he had music
          classes in primary school. His first time on stage was three months
          after his first drum class, covering “when I come around” by Green
          Day, a few months later he was playing “I disappear” by Metallica.
          After being in a few college bands and hitting the stage a couple of
          times, he started the band Muqueta na Oreia, along with his high
          school friends, which turned out to be one of the biggest metal bands
          of Embu das Artes. The band is still active, releasing their 3rd album
          in 2022. Years after moving to Germany and playing in different bands,
          Munhoz, Mansur and Aldani gathered to form Agent Hellfire in 2019.
          Check out what he’s been up to on his Instagram Account and Youtube
          Channel.
        </p>
        <p>Picture: Kleber Nascimento</p>
        <a target="_blank" href="https://www.instagram.com/victormunhoz89/">
          <Image
            class="img-icon"
            src="/img/logos/instagram_icon.png"
            alt="Instagram Logo"
            width={50}
            height={50}
          />
        </a>
        <a target="_blank" href="https://www.youtube.com/@victormunhoz89">
          <Image
            class="img-icon"
            src="/img/logos/youtube_icon.png"
            alt="Youtube Logo"
            width={50}
            height={50}
          />
        </a>
      </article>
    </>
  );
}
