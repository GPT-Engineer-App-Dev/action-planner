import React, { useState } from "react";
import { Box, Flex, Image, Text, IconButton, Button, HStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
      <Flex justify="center" align="center" direction={["column", "row"]} my={8}>
        <IconButton icon={<FaArrowLeft />} aria-label="Previous Image" mr={[0, 4]} mb={[4, 0]} />
        <Box textAlign="center">
          <Button onClick={() => setIsOpen(true)}>
            <Image src={images[photoIndex].thumbnail} alt={images[photoIndex].caption} objectFit="cover" />
          </Button>
          <Text mt={2}>{images[photoIndex].caption}</Text>
        </Box>
        <IconButton icon={<FaArrowRight />} aria-label="Next Image" ml={[0, 4]} mt={[4, 0]} />
      </Flex>
      <HStack justify="center" spacing={2} mb={8}>
        {[...Array(images.length)].map((_, index) => (
          <Box key={index} w={2} h={2} borderRadius="full" bg={index === photoIndex ? "blue.500" : "gray.300"} />
        ))}
      </HStack>

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
