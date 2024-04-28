export default function ImageCard() {
    return (
        <div className="shadow-md my-5 rounded-lg overflow-hidden bg-white w-full max-w-xs ">
        <div className="overflow-hidden h-2/3">
          <img
            className="w-full h-full object-cover transition-transform duration-200 transform hover:scale-105 "
            src="https://live.staticflickr.com/65535/53681196392_016b8a4ab0_m.jpg"
            alt="Image"
          />
        </div>
        
        <div className="px-2 py-4">
          <div className="font-bold text-l mb-1">Title</div>
          <p className="text-gray-700 text-base">Author: El-Pachris</p>
          <a href="/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline cursor-pointer">View on Flickr</a>

        </div>
      </div>
    );
  }