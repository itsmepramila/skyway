import React from 'react';

import {
    Image, useDisclosure, Modal, ModalOverlay, ModalContent, Center, ModalBody,
} from '@chakra-ui/react';

const GalleryPhotoCard = (props) => {
   
    return (
        <>
            {props.gallery.map((imageData, index) => (
                <GalleryImage key={imageData.imageId} imageData={imageData} />
            ))}
        </>
    );
};

const GalleryImage = ({ imageData }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Center>
                <Image
                    src={imageData.bannerimage}
                    alt="image"
                    rounded={"10px"}
                    border={"2px solid white"}
                    objectFit='stretch'
                    height="200px"
                    width="100%"
                    onClick={onOpen}
                />
            </Center>
            <Modal isOpen={isOpen} onClose={onClose} size='xl' zIndex={9999} >
                <ModalOverlay />
                <ModalContent maxW={'80%'}>
                    <ModalBody>
                        <Center>
                            <Image
                                rounded="10px"
                                py={3}
                                src={imageData.bannerimage}
                                alt="gallery image"
                                objectFit='contain'
                                // w='auto'
                                maxH='90vh'
                            />
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default GalleryPhotoCard;
