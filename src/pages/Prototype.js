import React, { useEffect } from 'react';
import Header from "../componnts/header";
import Fotter from "../componnts/footer";

const Prototype = () => {
  useEffect(()=>{
    document.title = 'Download Prototype | Web Game';
  },[]);
  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>Prototype Download</h2>
            <p>
            Prototype 1 Free Download PC game setup single direct link for windows. It’s an action and full time adventure game From prototype series
            </p>
              <div className="img">
              <img
              src="./img/Prototype/PROTOTYPE.png"
              alt=""
            />
              </div>
          </div>
          <div className="discription">
            <p>
            Prototype 1 is very interesting action game. If you love to play action and adventures games so Prototype 1 is one of the best option because you will also enjoy some adventures movements in this game. This game is developed by Radical Entertainment and published by Activision.  It was released on June 9 2009.
            </p>
          </div>
          <div className="imgGame1">
            <img
              src="./img/Prototype/71R0bB4akKS._AC_UF1000,1000_QL80_.jpg"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img
              src="./img/Prototype/41TV5Z7w2CL._AC_UF1000,1000_QL80_.jpg"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img
              src="./img/Prototype/41K8vIIg-zL._AC_UF894,1000_QL80_.jpg"
              alt=""
            />
          </div>
          <div className="contentGame" style={{textAlign: 'left'}}>
              <p>•	Operating System: Windows XP/ Windows Vista/ Windows 7/ Windows 8 and 8.1</p>
              <p>•	CPU: Core 2 Duo 2.4 GHz</p>
              <p>•	RAM: 1 GB</p>
              <p>•	Hard Disk Space: 8 GB</p>
          
            </div>
          <div className="download">
            <a href="https://s2.wifi4games.com/Prototype[wifi4games.com].rar">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
}

export default Prototype;
