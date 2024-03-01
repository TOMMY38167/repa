import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Redes from "./components/Footer/Footer";
import { FaDrum } from "react-icons/fa";
import useSound from "use-sound";
import Bombo from "../src/sonidos/bombo-repa.wav";
import Show from "./img/oscar-cantando.jpg";
import Videos from "./img/oscar-celu.jpg";
import Parulo from "./img/parulo.jpg";
import React from "react";

export default function App() {
  const [playSound] = useSound(Bombo);
  return (
    <div className="Bodys">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="Historia">
          <p>
            La Repandilla es una reconocida banda de cumbia originaria de
            Argentina. Han sido populares en la escena de la cumbia por sus
            pegajosos ritmos y sus canciones animadas que han alcanzado gran
            popularidad en diversos países de habla hispana.{" "}
          </p>
        </div>
        <div className="Primero">
          <figure href="#">
            <div className="Capa">
              <strong><h1>SHOWS</h1></strong>
            </div>
            <img className="Cards" src={Show} alt="" />
          </figure>

          <iframe
            className="Spotify"
            src="https://open.spotify.com/embed/artist/4TeM4orWQq9H1Wj2intCub?utm_source=generator&theme=0"
            width="40%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <figure href="#">
            <img className="Cards" src={Videos} alt="" />
            <div className="Capa"><h1>VIDEOS</h1></div>
          </figure>
        </div>
        <div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/8oSEfSEMnS0?si=zqDmI-MTP280_crM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            
          </div>
        </div>
        <a onClick={playSound}>
          <FaDrum />
        </a>
      </div>

      <div>
        <Redes />
      </div>
    </div>
  );
}
