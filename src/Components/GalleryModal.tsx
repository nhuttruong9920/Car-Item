import { ReactComponent as CloseIcon } from "../../public/ModalIcons/CloseIcon.svg";
import { ReactComponent as DownloadIcon } from "../../public/ModalIcons/DownloadIcon.svg";
import { ReactComponent as LeftArrowIcon } from "../../public/ModalIcons/LeftArrowIcon.svg";
import { ReactComponent as PlayIcon } from "../../public/ModalIcons/PlayIcon.svg";
import { ReactComponent as RightArrowIcon } from "../../public/ModalIcons/RightArrowIcon.svg";
import { useEffect, useState } from "react";
import "../App.css";

import IconText from "./IconText";
import data from "../Data/images.json";

type photoGallery = {
  src: string;
  id: string;
  datetime: string;
  channel: string;
  location: string;
};

const GalleryModal = ({
  onClick,
  currentPhoto,
}: {
  onClick: () => void;
  currentPhoto: photoGallery | null;
}) => {
  const [showedPhoto, setShowedPhoto] = useState<photoGallery | null>(
    currentPhoto
  );
  const [indexPhoto, setIndexPhoto] = useState<number>(
    data.findIndex((i) => i.id === showedPhoto!.id)
  );

  const [startSlideshow, setStartSlideshow] = useState<boolean>(false);

  const handleClickLeft = () => {
    setIndexPhoto((prevIndex) => {
      const newIndex = prevIndex === 0 ? data.length - 1 : prevIndex - 1;
      setShowedPhoto(data[newIndex]);
      return newIndex;
    });
  };

  const handleClickRight = () => {
    setIndexPhoto((prevIndex) => {
      const newIndex = (prevIndex + 1) % data.length;
      setShowedPhoto(data[newIndex]);
      return newIndex;
    });
  };

  const handleClickOnImageLine = (image: photoGallery) => {
    setShowedPhoto(image);
    setIndexPhoto(data.findIndex((i) => i.id === image.id));
  };

  const handleStartSlideshow = () => {
    setStartSlideshow((prevValue) => !prevValue);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (startSlideshow) {
      timer = setInterval(() => {
        handleClickRight();
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [startSlideshow]);

  return (
    <>
      <div className="backdrop"></div>
      {showedPhoto ? (
        <div className="z-50 fixed m-16 top-0 flex flex-col gap-24 left-0 right-0">
          {/* header */}
          <div className="flex justify-between">
            <p className="text-white">{`${showedPhoto.id}/${data.length}`}</p>
            <div className="flex gap-6">
              <PlayIcon
                className="cursor-pointer"
                onClick={handleStartSlideshow}
              ></PlayIcon>
              <a href={showedPhoto.src} download>
                <DownloadIcon className="cursor-pointer"></DownloadIcon>
              </a>
              <CloseIcon
                onClick={onClick}
                className="cursor-pointer"
              ></CloseIcon>
            </div>
          </div>
          {/* main-photo */}
          <div className="flex justify-between items-center">
            <LeftArrowIcon
              className="cursor-pointer"
              onClick={handleClickLeft}
            ></LeftArrowIcon>
            <div className="rounded-xl overflow-hidden">
              <img
                src={showedPhoto.src}
                alt="photo"
                style={{ width: "750px", height: "430px" }}
                className="w-3/5"
              />
              <div>
                <div
                  className="flex items-center justify-center p-2 gap-6"
                  style={{ backgroundColor: "#EFF1F1" }}
                >
                  <IconText
                    datetime={showedPhoto.datetime}
                    channel={showedPhoto.channel}
                    location={showedPhoto.location}
                    short={false}
                  ></IconText>
                </div>
              </div>
            </div>
            <RightArrowIcon
              className="cursor-pointer"
              onClick={handleClickRight}
            ></RightArrowIcon>
          </div>
          {/* photo-line */}
          <div className="overflow-x-auto">
            <div className="photo-line flex gap-3">
              {data.map((image) => (
                <img
                  src={image.src}
                  alt=""
                  className={
                    image.id === showedPhoto.id
                      ? "image-line current-photo"
                      : "image-line"
                  }
                  onClick={() => handleClickOnImageLine(image)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default GalleryModal;
