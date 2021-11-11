import React from "react";
import "./style.css";
import tg from "./images/telegram-icon-png-1.jpg";
import insta from "./images/1409946.png";
import facebook from "./images/facebook.jpg";
import yTube from "./images/yTube.png";
import vK from "./images/VK.png";

function Page() {
  return (
    <div>
      {" "}
      <h1>Almaz's</h1>
      <h2>Social Medias</h2>
      <div className="container">
        <div className="feature-grid-container grid grid--columns">
          <div></div>
          <div className="grid feature-grid">
            <a href="https://id.vk.com/account/#/personal">
              <img className="vk" src={vK} alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UC2dVNy-lGWCWBFKjvZYioxQ">
              <img src={yTube} alt="" />
            </a>
            <a href="https://t.me/Almaz_Offical">
              <img src={tg} alt="" />
            </a>
            <a href="https://www.facebook.com/almaz.botirbekov.50/">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/almaz_batirbekov_history/">
              <img src={insta} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
