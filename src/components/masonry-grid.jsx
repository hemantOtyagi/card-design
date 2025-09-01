import MediaCard from "./media-card";
import { mediaItems } from "./media-card";

const MasonryGrid = () => {
  return (
    <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 space-y-2 bg-white p-3 rounded-xl shadow-lg max-h-[510px] overflow-y-auto">
      {mediaItems.map((item, idx) => (
        <MediaCard key={idx} item={item} index={idx} />
      ))}
    </div>
  );
};

export default MasonryGrid;
