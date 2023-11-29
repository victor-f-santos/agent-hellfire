import Image from "next/image";
import Nav from "../Components/Nav";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <main>
        <section class="background-image">
          <Image
            src="/img/Logo_BR_Transparent.png"
            alt="Agent Hellfire Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </section>
        <article class="band-bio">
          <h2>Bio</h2>
          <p class="band-bio">
            Agent Hellfire is a thrash metal band formed in the spring of 2019.
            The trio originally from Brazil gathered in Berlin to make an old
            school metal, mixing it with modern elements, creating something
            heavy and authentic. Powerful voices, fast guitars, thoughtful
            lyrics and heavy drums turn the band into a new experience for
            headbangers everywhere. Bands like Testament, Exodus, Metallica and
            even Sepultura are few of many influences to recreate that powerful
            sound that comes from the Bay Area. Its debut EP named "The Omen" is
            now available on your favorite streaming platform. Through pandemic
            times, the band managed to play a few concerts in Germany, the last
            one being at RUDE Festival in Saxony-Anhalt, sharing the stage with
            Brazilian metal’s greatest name: Sepultura. After the Guitar player
            parted ways with Agent Hellfire, the band started to look for a
            guitar player to join them and conquer the stages all over Europe.
          </p>
        </article>
        <article class="members">
          <h4>Adans Aldani</h4>
          <img
            src="/img/profile/Adans.jpg"
            alt="Adans Aldani playing bass at Sage Club in Berlin"
          />
          <p>Picture: Phillip DoK</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            repellendus facere voluptate maiores ab reiciendis placeat
            voluptatum nulla, fugit veniam unde doloremque numquam nihil
            delectus consequuntur aliquam quis et non aliquid sint officiis quod
            quos deleniti reprehenderit! Laboriosam dignissimos sapiente rerum
            itaque, laborum magnam hic placeat, nisi soluta facilis totam
            molestiae architecto quibusdam nihil, asperiores iusto deleniti
            maxime omnis eos corrupti. Mollitia accusantium debitis suscipit
            beatae nobis eaque quas officiis architecto at odit, qui
            necessitatibus nesciunt aspernatur? Quaerat laborum asperiores dicta
            obcaecati omnis soluta voluptates nemo libero reprehenderit fugit.
            Sed delectus nulla nostrum. A tenetur optio nihil modi
            exercitationem enim.
          </p>
          <a target="_blank" href="https://www.instagram.com/adans_ix/">
            <img
              class="img-icon"
              src="/img/logos/instagram_icon.png"
              alt="Instagram Logo"
            />
          </a>
        </article>
        <article class="members">
          <h4>Victor Munhoz</h4>
          <img
            src="/img/profile/Victor.jpg"
            alt="Victor Munhoz playing drums at RUDE Festival"
          />
          <p>Picture: http://www.fh-eventfotografie.de/</p>
          <p>
            Born and raised in São Paulo, Brazil, Victor started his journey on
            drums by the age of 14, taking classes at a local music school but
            his passion for making music started much earlier, when he had music
            classes in primary school. His first time on stage was three months
            after his first drum class, covering “when I come around” by Green
            Day, a few months later he was playing “I disappear” by Metallica.
            After being in a few college bands and hitting the stage a couple of
            times, he started the band Muqueta na Oreia, along with his high
            school friends, which turned out to be one of the biggest metal
            bands of Embu das Artes. The band is still active, releasing their
            3rd album in 2022. Years after moving to Germany and playing in
            different bands, Munhoz, Mansur and Aldani gathered to form Agent
            Hellfire in 2019. Check out what he’s been up to on his Instagram
            Account and Youtube Channel.
          </p>
          <a target="_blank" href="https://www.instagram.com/victormunhoz89/">
            <img
              class="img-icon"
              src="/img/logos/instagram_icon.png"
              alt="Instagram Logo"
            />
          </a>
          <a target="_blank" href="https://www.youtube.com/@victormunhoz89">
            <img
              class="img-icon"
              src="/img/logos/youtube_icon.png"
              alt="Youtube Logo"
            />
          </a>
        </article>
        <section class="fotos--shooting">
          <h4>Foto Shooting</h4>
          <img
            class="shooting-img"
            src="/img/shooting/IMG_1306.jpg"
            alt="Agent Hellfire band photo"
          />
          <img
            class="shooting-img"
            src="img/shooting/IMG_1549.jpg"
            alt="Agent Hellfire band photo"
          />
          <img
            class="shooting-img"
            src="img/shooting/IMG_1619 (1).jpg"
            alt="Agent Hellfire band photo"
          />
          <img
            class="shooting-img"
            src="img/shooting/IMG_1642.jpg"
            alt="Agent Hellfire band photo"
          />
          <img
            class="shooting-img"
            src="img/shooting/IMG_6992 Kopie.jpg"
            alt="Agent Hellfire band photo"
          />
          <img
            class="shooting-img"
            src="img/shooting/IMG_7056 Kopie.jpg"
            alt="Agent Hellfire band photo"
          />
          <img
            class="shooting-img"
            src="img/shooting/IMG_7110 Kopie.jpg"
            alt="Agent Hellfire band photo"
          />
          <img
            class="shooting-img"
            src="img/shooting/P8230823 Agent Hellfire _20_0823_c.jpg"
            alt="Agent Hellfire band photo"
          />
          <img
            class="shooting-img"
            src="img/shooting/P8230947 Agent Hellfire _20_0823_bw.jpg"
            alt="Agent Hellfire band photo"
          />
        </section>
        <section class="fotos--live">
          <h4>Live</h4>
          <img
            src="img/live/Live rude.jpg"
            alt="Gustavo Mansur and Adans Aldani playing on the stage at Rude Festival"
            class="shooting-img"
          />
          <img
            src="img/live/Live rude_1.jpg"
            alt="Victor Munhoz playing on the stage at Rude Festival"
            class="shooting-img"
          />
          <img
            src="img/live/Live rude_2.jpg"
            alt="Agent Hellfire playing on the stage at Rude Festival"
            class="shooting-img"
          />
          <img
            src="img/live/Live rude_4.jpg"
            alt="Adans Aldani and Victor Munhoz playing on the stage at Rude Festival"
            class="shooting-img"
          />
          <img
            src="img/live/Live rude_5.JPG"
            alt="Agent Hellfire and Sepultura on backstage at Rude Festival"
            class="shooting-img"
          />
          <img
            src="img/live/Live sage.jpg"
            alt="Agent Hellfire on stage at Sage Club"
            class="shooting-img"
          />
          <img src="" alt="" class="shooting-img" />
          <img
            src="img/live/Live sage_1.jpg"
            alt="Adans Aldani and Gustavo Mansur playing on stage at Sage Club"
            class="shooting-img"
          />
          <img
            src="img/live/Live sage_2.jpg"
            alt="Victor Munhoz playing on stage at Sage Club"
            class="shooting-img"
          />
          <img
            src="img/live/Live sage_3.JPG"
            alt="Adans Aldani playing on the stage at the Sage Club"
            class="shooting-img"
          />
          <img
            src="img/live/Live stromgitarrenfest.jpg"
            alt="Agent Hellfire playing on stage at Stromgitarrenfest"
            class="shooting-img"
          />
          <img
            src="img/live/Live stromgitarrenfest_1.jpg"
            alt="Victor Munhoz playing on stage at Stromgitarrenfest"
            class="shooting-img"
          />
          <img
            src="img/live/Live stromgitarrenfest_3.jpg"
            alt="Adans Aldani playing on stage at Stromgitarrenfest"
            class="shooting-img"
          />
          <img
            src="img/live/Live stromgitarrenfest_4.jpg"
            alt="Adans Aldani and Gustavo Mansur playing on stage at Stromgitarrenfest"
            class="shooting-img"
          />
        </section>
        <section class="videos">
          <h2>Videos</h2>
          <p>D.T. Official Music Video</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/teXqN9iXmbc?si=wSBASPC7KxRg8OGz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>Fateless Official Lyric Video</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Tgckq38wSlE?si=ioKLKfYEJzfLfjT3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
        <section class="music">
          <h2 id="music">Music</h2>
          <img
            class="music--album-cover"
            src="/img/covers/1-1_COVER_FINAL_LOGO_RGB (1).jpg"
            alt="The Omen EP cover"
          />
          <p>The Omen, released on October 30th</p>
          <img
            class="music--album-cover"
            src="img/covers/DT_Cover_art.jpg"
            alt="DT album cover"
          />
          <p>D.T., released on December 13th</p>
          <iframe
            class="music--spotify"
            src="https://open.spotify.com/embed/artist/4TGi2ZuKyxYQC2NeMOtu7Q?utm_source=generator&theme=0"
            width="100%"
            height="380"
            frameborder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </section>
        <section class="contact">
          <h2>Contact</h2>
          <p>
            For booking, requests, or if you're just bored and wanna waste your
            time and ours, be free to write us an e-mail so we properly ignore
            it.
          </p>
          <form action="">
            <label for="form-name">Name:</label>
            <input type="text" name="name" id="form-name" minlength="1" />
            <label for="form-email">E-mail:</label>
            <input type="email" name="e-mail" id="form-email" minlength="1" />
            <label for="form-subject">Subject:</label>
            <input type="text" name="Subject" id="form-subject" minlength="1" />
            <label for="form-message">Message</label>
            <textarea
              name="message"
              id="form-message"
              cols="30"
              rows="10"
              minlength="1"
              maxlength="1000"
            ></textarea>
            <input type="submit" name="submit" />
          </form>
        </section>
      </main>
      <footer>
        <a
          target="_blank"
          href="https://www.facebook.com/Agenthellfire/"
          class="footer--icon"
        >
          <img src="/img/logos/facebook_icon.png" alt="facebook icon" />{" "}
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/agenthellfire"
          class="footer--icon"
        >
          <img src="img/logos/instagram_icon.png" alt="instagram icon" />{" "}
        </a>
        <a href="https://soundcloud.com/agent-hellfire" class="footer--icon">
          <img src="img/logos/soundcloud_icon.png" alt="soundcloud icon" />{" "}
        </a>
        <a
          href="https://open.spotify.com/intl-de/artist/4TGi2ZuKyxYQC2NeMOtu7Q?si=d2W06jD4Tc6McP7xTKXEnA"
          class="footer--icon"
        >
          <img src="img/logos/spotify_icon.png" alt="spotify icon" />
        </a>
        <a href="https://www.tiktok.com/@agenthellfire" class="footer--icon">
          <img src="img/logos/tiktok_icon.png" alt="tiktok icon" />{" "}
        </a>
        <a href="https://twitter.com/hellfireagent" class="footer--icon">
          <img src="img/logos/twitter_icon.png" alt="twitter icon" />{" "}
        </a>
        <a
          href="https://www.youtube.com/channel/UCPXWgKGSyCf7fLLV9_1VLjw?sub_confirmation=1"
          class="footer--icon"
        >
          <img src="img/logos/youtube_icon.png" alt="" />
        </a>
      </footer>
    </>
  );
}
