
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
        <div className="w-16 h-16 bg-[#c0017e] rounded-full flex items-center justify-center 
                     transition-transform duration-300 hover:scale-110 shadow-lg
                     cursor-pointer"
             onClick={onPlay}>
          <span className="text-2xl text-white" style={{ marginLeft: "4px" }}>▶</span>
        </div>
      </div>
    </div>
  );
}
