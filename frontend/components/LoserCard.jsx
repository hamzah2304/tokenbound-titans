const LoserCard = () => {
  return (
    <div className="w-1/8 mb-8">
      {/* Smaller Image Card */}
      <div className="bg-gray-800 border border-black rounded-lg shadow-md p-8">
        <div className="mb-4">
          <img
            src="/path/to/smaller_image.jpg"
            alt="Smaller Image test"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LoserCard;
