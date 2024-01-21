
import React, { useState, useEffect } from 'react';
import {
  Box,
  Center,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaWhatsapp, FaFacebook, FaFacebookMessenger } from 'react-icons/fa'
import { ReactNode } from 'react'
import axios from 'axios';


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const Header = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [glob, setGlob] = useState([]);

  const HeaderData = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/globals/');
        // Handle the response data here
        response.data && setGlob(response.data[0]);

        // Fetch navigation data based on parentId and page_type
       
       
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}
useEffect(() => {
    // Axios GET request to fetch data
    HeaderData();
}, []);
// console.log(glob);
 

  const data ={
        "oneTapMessengerLink": "facebook.com/example",
        "regdField": "Regd.No. 66236/066/067",
        "licenseField": "Lic.No. 900/067/068",
        "email": "info@skywaynepal.com",
        "address": "Gaushala-8 Batissputali, Kathmandu, Nepal",
        "phoneNumber1": "+977-1-4460160",
        "phoneNumber2": "+977-1-4460697",
        "whatsappId": "+9779851041538",
        "facebookId": "Skywaymanagement",
        "viberId": "viber.com.id",
        "contactUsHeading": "Stay In Touch",
        "contactUsSubHeading": "Click to call, email or message us",
        "column1Line1": "Line 1",
        "column1Line2": "Line 2",
        "column1Line3": "Line 3",
        "fileDownloadText": "Download Brochure",
        "messengerId": "Skywaymanagement"
    }


  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint value if needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 

  function openMessengerChat(recipientId) {
    const messengerUrl = `https://m.me/${data.oneTapMessengerLink}`;
    window.open(messengerUrl, 'Messenger Chat', 'width=600,height=400');
  }

  function openFaceBookPage(recipientId) {
    const facebookUrl = `https://facebook.com/${data.facebookId}`;
    window.open(facebookUrl, 'Facebook Page', 'width=600,height=400');
  }

  function openWhatsappChat(recipientId) {
    const whatsappPhoneNumber = `https://wa.me/${data.whatsappId}`;
    window.open(whatsappPhoneNumber, 'Whatsapp Chat', 'width=600,height=400');
  }

  if (isMobileView) {
    return null; // Render nothing if in mobile view
  }

  

  return (
  <>
    <Box 
      bg={'gray.900'}
      color='gray.50'
      h={50}
      w="full"
      fontSize={{ sm: 'xxs', md: 'sm' }}
    >
      <Container
        as={Stack}
        maxW={'full'}
        maxH={50}
        py={2}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6}>
          <Text>{glob. SiteRegister}</Text>
          <Text>{glob.Sitelicence}</Text>
        </Stack>
        <Stack direction={'row'} spacing={6}>
          <Center>
          <a href={`mailto:${glob.SiteEmail}`}>{glob.SiteEmail}</a>
          </Center>
          <Center>
          <a href={`tel:${glob.SiteContact}`}>{glob.SiteContact}</a>
          </Center>
          <SocialButton label={glob.Sitewhatsapplink} href={glob.Sitewhatsapplink} >
            <FaWhatsapp onClick={() => openWhatsappChat(glob.Sitewhatsapplink)} />
          </SocialButton>
          <SocialButton label={glob.Sitefacebooklink} href={glob.Sitefacebooklink}  >
            <FaFacebook onClick={() => openFaceBookPage(glob.Sitefacebooklink)} />
          </SocialButton>
          <SocialButton label={glob.Sitemessengerlink} href={glob.Sitemessengerlink} >
            <FaFacebookMessenger onClick={() => openMessengerChat(glob.Sitemessengerlink)} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  </>
  )
}

export default Header