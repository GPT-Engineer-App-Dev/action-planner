import React, { useState } from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  {
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    fullSize: "https://picsum.photos/id/1018/1500/1000/",
    caption: "Image 1",
  },
  {
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    fullSize: "https://picsum.photos/id/1015/1500/1000/",
    caption: "Image 2",
  },
  {
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    fullSize: "https://picsum.photos/id/1019/1500/1000/",
    caption: "Image 3",
  },
  {
    thumbnail: "https://picsum.photos/id/1016/250/150/",
    fullSize: "https://picsum.photos/id/1016/1500/1000/",
    caption: "Image 4",
  },
];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <Box>
      <SimpleGrid columns={[2, null, 4]} spacing="40px">
        {images.map((image, index) => (
          <Box
            key={index}
            cursor="pointer"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <Image src={image.thumbnail} alt={image.caption} objectFit="cover" />
            <Text mt={2} textAlign="center">
              {image.caption}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {isOpen && <Lightbox mainSrc={images[photoIndex].fullSize} nextSrc={images[(photoIndex + 1) % images.length].fullSize} prevSrc={images[(photoIndex + images.length - 1) % images.length].fullSize} onCloseRequest={() => setIsOpen(false)} onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)} onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)} imageCaption={images[photoIndex].caption} />}
    </Box>
  );
};

export default ImageGallery;
