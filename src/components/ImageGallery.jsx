import React, { useState } from "react";
import { Box, Image, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

const images = [
  {
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    fullSize: "https://picsum.photos/id/1018/1500/1000/",
    caption: "Image 1",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1544288158-cb8e0fea6f6d?w=250&h=150&fit=crop",
    fullSize: "https://images.unsplash.com/photo-1544288158-cb8e0fea6f6d?w=1500&h=1000&fit=crop",
    caption: "Cute Llama",
  },
  {
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    fullSize: "https://picsum.photos/id/1015/1500/1000/",
    caption: "Image 2",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=250&h=150&fit=crop",
    fullSize: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=1500&h=1000&fit=crop",
    caption: "Llama in Field",
  },
  {
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    fullSize: "https://picsum.photos/id/1019/1500/1000/",
    caption: "Image 3",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1519744346376-e6e68a2e022a?w=250&h=150&fit=crop",
    fullSize: "https://images.unsplash.com/photo-1519744346376-e6e68a2e022a?w=1500&h=1000&fit=crop",
    caption: "Llama Portrait",
  },
  {
    thumbnail: "https://picsum.photos/id/1016/250/150/",
    fullSize: "https://picsum.photos/id/1016/1500/1000/",
    caption: "Image 4",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=250&h=150&fit=crop",
    fullSize: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1500&h=1000&fit=crop",
    caption: "Llama Closeup",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?w=250&h=150&fit=crop",
    fullSize: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?w=1500&h=1000&fit=crop",
    caption: "Baby Llama",
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

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{images[photoIndex].caption}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={images[photoIndex].fullSize} alt={images[photoIndex].caption} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}>Previous</Button>
            <Button onClick={() => setPhotoIndex((photoIndex + 1) % images.length)}>Next</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ImageGallery;
