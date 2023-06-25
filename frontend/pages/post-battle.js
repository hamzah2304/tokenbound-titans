import React from "react";

const PostBattle = () => {
  const urlw = "/obs2.jpg";
  const urll = "/mon0.jpg";
  return (
    <div className="flex flex-col justify-center outerflexpost">
      {/* Winner Prize Card */}
      <div className="wineth flex items-center justify-center text-white font-bold py-2 px-4 rounded-lg text-2xl mr-4">
        <p>WINNER&nbsp;</p><span>+ 0.05 ETH</span>
      </div>
      <div className="flex mb-8 winnerwrapper">
        {/* Very Large Image Card */}
        <img src={urlw} alt="winner" className="winner w-full rounded-lg"/>
        <div className="statschange flex flex-col justify-center items-center text-white font-bold py-2 px-4 rounded-lg ml-4">
          <h3 class='leveluph3'>Level <span className="turq-col">up</span>&nbsp;!</h3>
          <ul className="titanstats text-blue-500">
            <li>Attack<span>+3</span></li>
            <li>Speed<span>+5</span></li>
            <li>Armour<span>+1</span></li>
          </ul>
        </div>
      </div>
      <div className="losewrapper flex mb-8 winnerwrapper">
        {/* Very small Image Card */}
        <img src={urll} alt="loser" className="loser w-full rounded-lg"/>
        <div className="losseth flex justify-center items-center font-bold py-2 px-4 rounded-lg ml-4">
          - 0.05 ETH
        </div>
      </div>

      <div className="flex justify-end absolute bottom-0 right-0 mr-16 mb-4">
        <button className="barracksbtn text-white font-bold py-4 px-8 rounded-lg text-xl shadow-md">
          <img src="/barracks-svgrepo-com.svg" alt='barracks'></img>
          <a href="http://localhost:3000/pre-battle">Go To Barracks</a>
        </button>
      </div>
    </div>
  );
};

export default PostBattle;
