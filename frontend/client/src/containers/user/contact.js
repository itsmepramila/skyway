import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ContactCard from "../../components/card/contactCard"
import {Grid, HStack, useColorModeValue, Center
} from '@chakra-ui/react'

const Contact = () => {
   
    const [glob, setContact] = useState([]);
    const AboutData = async () => {
        try {
          
          const response1 = await axios.get('http://127.0.0.1:8000/api/globals/');
          if (response1.data && response1.data.length > 0) {
            setContact(response1.data[0]);          
          }}
          catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      useEffect(() => {
        // Axios GET request to fetch data
        AboutData();
      }, []);

  const contactUsData = {
        oneTapMessengerLink: "facebook.com/example",
        landmark: "radiantInfoTech",
        regdField: "Regd.No. 1234567890",
        licenseField: "Lic.No. 900/067/068",
        email: "info@skywaynepal.com",
        address: "Gaushala-8 Batissputali, Kathmandu, Nepal",
        phoneNumber1: "+977-1-4460160",
        phoneNumber2: "+977-1-14460697",
        whatsappId: "+9779818368104",
        facebookId: "fb",
        viberId: "viber.com.id",
        contactUsHeading: "Stay In Touch",
        contactUsSubHeading: "Click to call, email or message us",
        column1Line1: "Line 1",
        column1Line2: "Line 2",
        column1Line3: "Line 3",
        fileDownloadText: "Download Brochure",
        messengerId: "hello"
    }
 
    return(
        <Center bg={useColorModeValue('blue.500', 'blue.800')} w={'full'}>
            
            <HStack bg={useColorModeValue('blue.500', 'gray.1000')} color={'white'}>

                    <Grid  gap={5} p={1} align="center" rowGap={5}>
                        <ContactCard data={glob} />
                    </Grid >
            </HStack>
        </Center>
    )
}

export default Contact