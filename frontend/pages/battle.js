import React from "react";
import TitanBattleCard from "../components/TitanBattleCard";
import loadScript from '../hooks/loadScript';

var loaded =false;
const Battle = () => {
  loadScript('http://localhost:3000/script.js');
  return (
    <div className="flex justify-center items-start pt-20">
      <div className="w-1/3"></div> {/* Left-side whitespace */}
      <TitanBattleCard name="Obsidion" level="1" owner="0x0000" id="hero-bar" idtxt="hero-bar-txt" url="/obs1.jpg" eq1="/sword.jpg" eq2="/plate.jpg"/>
      <div className="skip w-1/3 flex flex-col items-center justify-center">
        <p id="msg"></p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          <a href="http://localhost:3000/post-battle">Skip</a>
        </button>
      </div>{" "}
      {/* Button Section */}
      <TitanBattleCard name="Private MonKey" level="0" owner="0x0001" id="villain-bar" idtxt="villain-bar-txt" url="/mon0.jpg" eq1="/empty.png" eq2="/empty.png" />
      <div className="w-1/3"></div> {/* Right-side whitespace */}
    </div>
  );
};

export default Battle;
