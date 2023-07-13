import { useState } from "react";
import PhotoItem from "./PhotoItem";
import GalleryModal from "./GalleryModal";
import data from "../Data/images.json";

const PhotoInfo = () => {
  type photoGallery = {
    src: string;
    id: string;
    datetime: string;
    channel: string;
    location: string;
  };

  const [modal, setModal] = useState<boolean>(false);
  const [currentPhoto, setCurrentPhoto] = useState<photoGallery | null>(null);

  const handleImageClick = (photo: photoGallery) => {
    setCurrentPhoto(photo);
    setModal(true);
  };

  const turnOffModal = () => {
    setModal(false);
  };
  return (
    <>
      {modal && <GalleryModal onClick={turnOffModal} currentPhoto={currentPhoto} />}

      <div className="flex flex-wrap justify-start gap-3 mt-32 p-2">
        {data.map((photo, index) => (
          <div onClick={() => handleImageClick(photo)}>
            <PhotoItem
              key={index}
              src={photo.src}
              datetime={photo.datetime}
              channel={photo.channel}
              location={photo.location}
            ></PhotoItem>
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoInfo;
