const Media = () => {
  return (
    <section id="media" className="py-20 px-4 bg-black text-white">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-3xl font-dungeonMode text-center mb-12 uppercase">
          MEDIA GALLERY
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 font-satoshi">Game Screenshot</span>
          </div>
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 font-satoshi">Game Screenshot</span>
          </div>
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 font-satoshi">Game Screenshot</span>
          </div>
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 font-satoshi">Game Screenshot</span>
          </div>
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 font-satoshi">Game Screenshot</span>
          </div>
        </div>
        <hr className="border-[#77888C] border-dotted border-2 w-2/3 mx-auto mt-16" />
      </div>
    </section>
  );
};

export default Media;
