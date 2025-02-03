import React from "react";
import Image from "next/image";

interface DynamicImageGridProps {
  images: string[];
}

const DynamicImageGrid: React.FC<DynamicImageGridProps> = ({ images }) => {
  // Ensure we only handle up to 4 images for this example
  const limitedImages = images.slice(0, 4);

  // Grid container classes:
  //  - Fixed max width (you can adjust the pixel size as needed)
  //  - Single column on small screens
  //  - Up to 2 columns on md+ if we have more than 1 image
  //  - 2 rows on md+ if we have more than 2 images
  //  - Gap between images
  const containerClasses = [
    "mx-auto",               // center horizontally
    "w-full",                // take full width (so it shrinks on small screens)
    "max-w-[800px]",         // fixed maximum width
    "grid",                  // activate CSS grid
    "gap-2",                 // gap between cells
    "grid-cols-1",           // default 1 column on small screens
    limitedImages.length > 1 ? "md:grid-cols-2" : "", // switch to 2 columns if >1 image
    limitedImages.length > 2 ? "md:grid-rows-2" : "md:grid-rows-1", // use 2 rows if >2 images
  ]
    .filter(Boolean)
    .join(" ");

  // Helper to assign row/col spans on medium+ screens
  // Only the 3-images layout needs a special T-shape:
  const getSpanClasses = (index: number, total: number) => {
    if (total === 3) {
      if (index === 0) {
        // First image spans 2 columns on md+, only 1 col on small screens
        return "md:col-span-2 md:row-span-1";
      } else {
        // The remaining two images fill each half of the second row
        return "";
      }
    }
    // For 1, 2, or 4 images, no special spanning is needed
    return "";
  };

  return (
    <div className={containerClasses}>
      {limitedImages.map((url, idx) => (
        // Use a relative parent so <Image /> with layout "fill" can cover it
        <div
          key={url}
          className={`relative h-48 md:h-auto overflow-hidden ${getSpanClasses(
            idx,
            limitedImages.length
          )}`}
        >
          <Image
            src={url}
            alt={`Grid Image ${idx + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicImageGrid;
