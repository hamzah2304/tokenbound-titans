const WinnerCard = () => {
  return (
    <div className="w-1/2 mb-8">
      {/* Very Large Image Card */}
      <div className="bg-gray-800 border border-black rounded-lg shadow-md p-8">
        <div className="mb-6">
          <img
            src="/path/to/very_large_image.jpg"
            alt="Very Large Image test"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
