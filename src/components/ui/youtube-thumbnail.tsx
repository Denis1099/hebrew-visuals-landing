
interface YouTubeThumbnailProps {
  thumbnailUrl: string;
  onPlay: () => void;
}

export function YouTubeThumbnail({ thumbnailUrl, onPlay }: YouTubeThumbnailProps) {
  return (
    <div
      className="w-full h-full bg-cover bg-center flex items-center justify-center"
      style={{ 
        backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : undefined,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div 
          className="w-16 h-16 bg-[#c0017e] rounded-full flex items-center justify-center 
                   transition-transform duration-300 hover:scale-110 shadow-lg
                   cursor-pointer"
          onClick={onPlay}
          aria-label="Play video"
        >
          {/* Use the same play icon for all devices */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="text-white"
            style={{ marginLeft: "3px" }}
          >
            <path 
              d="M6 4.75L17.25 12L6 19.25V4.75Z" 
              fill="currentColor" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
