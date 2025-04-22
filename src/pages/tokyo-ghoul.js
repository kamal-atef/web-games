import React from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";
import { useEffect } from 'react';

const TokyoGhoul = () => {
  useEffect(() => {
    document.title = 'Download Tokyo Ghoul:re CALL to EXIST | Web Game';
  }, []);
  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>Tokyo Ghoul:re CALL to EXIST Download</h2>
          
            <div className="img">
              <img src="./img/tokyo-ghoul/1.jpg" alt="" />
            </div>
          </div>
          <div className="discription">
            <p>
              It is a common assumption that the concept of a video game can be made off of a movie or show, which is a topic of such work that has 
              to be a miss or hit kind of a deal. While some of these projects inhale a fresh sense of life in a world that has a fantasy and follows 
              everything under it, all others can bring an impression to the name. It is quite unfortunate that is another side of such a situation when
               we talk about the Three Rings as well as the Tokyo Ghoul which is an anime-based game by the Bandai Namco.


            </p>
          </div>
          <div className="imgGame1">
            <img src="./img/tokyo-ghoul/2.jpg" alt="" />

          </div>
          <div className="imgGame1">
            <img src="./img/tokyo-ghoul/3.jpg" alt="" />

          </div>
          <div className="imgGame1">
            <img src="./img/tokyo-ghoul/4.jpg" alt="" />

          </div>
          <div className="contentGame" style={{ textAlign: 'left' }}>
            <p>•	Requires a 64-bit processor and operating system</p>
            <p>•	OS: Windows 7 SP1 64-bit </p>
            <p>•	Processor: Intel Core i5-2300 or AMD FX-4350</p>
            <p>•	Memory: 6 GB RAM</p>
            <p>•	Graphics: GeForce GTX 1050 or Radeon HD 7870</p>
            <p>•	DirectX: Version 11 </p>
            <p>•	Network: Broadband Internet connection</p>
            <p>•	Storage: 15 GB available space</p>
          </div>

          <div className="download">
            <a href="https://fs2.uploadbeast.com/games/Tokyo.Ghoul.ReCall.to.Exist(GamingBeasts.com).zip?id=153c1d99a82bfce1f87b&expires=1736467200">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default TokyoGhoul;
