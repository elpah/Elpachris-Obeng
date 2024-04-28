import { ImageCardProps } from '../types';

export default function ImageCard({media,title,author,link}:ImageCardProps) {
    return (
        <div className="shadow-md my-5 rounded-lg overflow-hidden bg-white w-full max-w-xs ">
        <div className="overflow-hidden h-2/3">
          <img
            className="w-full h-full object-cover transition-transform duration-200 transform hover:scale-105 "
            src={media}
            alt={title}
          />
        </div>
        <div className="px-2 py-4">
          <div className="font-bold text-l mb-1">{title}</div>
          <p className="text-gray-700 text-base">By: {author}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline cursor-pointer">View on Flickr</a>

        </div>
      </div>
    );
  }