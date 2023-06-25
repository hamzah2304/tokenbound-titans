import React from "react";

const PostBattle = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex mb-8">
        {/* Winner Prize Card */}
        <div className="flex flex-col items-center justify-center bg-green-500 text-white font-bold py-2 px-4 rounded-lg text-2xl mr-4">
          + 0.5 ETH
        </div>

        {/* Very Large Image Card */}
        <div className="bg-gray-800 border border-black rounded-lg shadow-md p-8">
          <div className="mb-6">
            <img
              src="/path/to/very_large_image.jpg"
              alt="Very Large Image"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Stats Change Card */}
        <div className="flex flex-col items-center justify-center bg-green-500 text-white font-bold py-2 px-4 rounded-lg ml-4">
          Stats Change
        </div>
      </div>

      {/* Vertical whitespace */}
      <div className="h-8" />

      <div className="flex">
        {/* Loser Prize Card */}
        <div className="flex flex-col items-center justify-center bg-red-500 text-white font-bold py-2 px-4 rounded-lg mr-4">
          - 0.5 ETH
        </div>

        {/* Small Image Card */}
        <div className="bg-gray-800 border border-black rounded-lg shadow-md p-8">
          <div className="mb-4">
            <img
              src="/path/to/small_image.jpg"
              alt="Small Image"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Stats Change Card */}
        <div className="flex flex-col items-center justify-center bg-green-500 text-white font-bold py-2 px-4 rounded-lg ml-4">
          Stats Change
        </div>
      </div>

      {/* Vertical whitespace */}
      <div className="h-8" />

      <div className="flex justify-end absolute bottom-0 right-0 mr-16 mb-4">
        <button className="bg-blue-500 text-white font-bold py-8 px-16 rounded-lg text-xl shadow-md">
          Go to Barracks
        </button>
      </div>
    </div>
  );
};

export default PostBattle;
