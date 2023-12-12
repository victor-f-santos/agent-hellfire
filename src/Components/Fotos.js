import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Fotos() {
  const images = [
    {
      id: "img1",
      src: "/img/shooting/IMG_1306.jpg",
    },
    {
      id: "img2",
      src: "/img/shooting/IMG_1549.jpg",
    },
    {
      id: "img3",
      src: "/img/shooting/IMG_1619 (1).jpg",
    },
    {
      id: "img4",
      src: "/img/shooting/IMG_1642.jpg",
    },
    {
      id: "img5",
      src: "/img/shooting/IMG_6992 Kopie.jpg",
    },
    {
      id: "img6",
      src: "/img/shooting/IMG_7056 Kopie.jpg",
    },
    {
      id: "img7",
      src: "/img/shooting/IMG_7110 Kopie.jpg",
    },
    {
      id: "img8",
      src: "/img/shooting/P8230823 Agent Hellfire _20_0823_c.jpg",
    },
    {
      id: "img9",
      src: "/img/shooting/P8230947 Agent Hellfire _20_0823_bw.jpg",
    },
  ];

  const liveImages = [
    {
      id: "live1",
      src: "/img/live/Live rude.jpg",
      alt: "Gustavo Mansur and Adans Aldani playing on the stage at Rude Festival",
    },
    {
      id: "live2",
      src: "/img/live/Live rude_1.jpg",
      alt: "Victor Munhoz playing on the stage at Rude Festival",
    },
    {
      id: "live3",
      src: "/img/live/Live rude_2.jpg",
      alt: "Agent Hellfire playing on the stage at Rude Festival",
    },
    {
      id: "live4",
      src: "/img/live/Live rude_4.jpg",
      alt: "Adans Aldani and Victor Munhoz playing on the stage at Rude Festival",
    },
    {
      id: "live5",
      src: "/img/live/Live rude_5.JPG",
      alt: "Agent Hellfire and Sepultura on backstage at Rude Festival",
    },
    {
      id: "live6",
      src: "/img/live/Live sage.jpg",
      alt: "Agent Hellfire on stage at Sage Club",
    },
    {
      id: "live7",
      src: "/img/live/Live sage_1.jpg",
      alt: "Adans Aldani and Gustavo Mansur playing on stage at Sage Club",
    },
    {
      id: "live8",
      src: "/img/live/Live sage_2.jpg",
      alt: "Victor Munhoz playing on stage at Sage Club",
    },
    {
      id: "live9",
      src: "/img/live/Live sage_3.JPG",
      alt: "Adans Aldani playing on the stage at the Sage Club",
    },
    {
      id: "live10",
      src: "/img/live/Live stromgitarrenfest.jpg",
      alt: "Agent Hellfire playing on stage at Stromgitarrenfest",
    },
    {
      id: "live11",
      src: "/img/live/Live stromgitarrenfest_1.jpg",
      alt: "Victor Munhoz playing on stage at Stromgitarrenfest",
    },
    {
      id: "live12",
      src: "/img/live/Live stromgitarrenfest_3.jpg",
      alt: "Adans Aldani playing on stage at Stromgitarrenfest",
    },
    {
      id: "live13",
      src: "/img/live/Live stromgitarrenfest_4.jpg",
      alt: "Adans Aldani and Gustavo Mansur playing on stage at Stromgitarrenfest",
    },
  ];

  return (
    <>
      <h2 id="fotos">Fotos</h2>
      <h4>Foto Shooting</h4>
      <section>
        <Carousel className="carousel--img" infiniteLoop>
          {images.map((image) => {
            return (
              <Image
                src={image.src}
                key={image.id}
                alt="Agent Hellfire band photo"
                height={650}
                width={650}
              />
            );
          })}
        </Carousel>
      </section>
      <h4>Live</h4>
      <section>
        <Carousel className="carousel--img" infiniteLoop>
          {liveImages.map((image) => {
            return (
              <Image
                src={image.src}
                key={image.id}
                alt={image.alt}
                height={650}
                width={650}
              />
            );
          })}
        </Carousel>
      </section>
    </>
  );
}
