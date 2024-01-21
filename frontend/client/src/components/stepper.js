import React, { useState, useEffect } from 'react';
import { Text, Box, Grid  } from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons'
import axios from 'axios'

const Procedure1 = () => {
  const [banner, setBanner] = useState([])

  const AboutData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
      // Filter the response data by status and page_type
      if (response.data) {
        const DocumentData = response.data.filter(
          (item) => item.status === "Publish" && item.page_type === "Operating Procedure"
        );
        setBanner(DocumentData);
        // Assuming you want to slice the filtered data
      }
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Axios GET request to fetch data
    AboutData();
  }, []);
  

  const stepperData = [
    {
        "procedureText": "Receive Demand",
        "__v": 0
    },
    {
        "procedureText": "Candidate Acceptance",
        "__v": 0
    },
    {
        "procedureText": "Prescreening",
        "__v": 0
    },
    {
        "procedureText": "Client Interview",
        "__v": 0
    },
    {
        "procedureText": "Selection Results",
        "__v": 0
    },
    {
        "procedureText": "Sign Offer",
        "__v": 0
    },
    {
        "procedureText": "Medical & Documentation",
        "__v": 0
    },
    {
        "procedureText": "Receive Visa",
        "__v": 0
    },
    {
        "procedureText": "Orientation",
        "__v": 0
    },
    {
        "procedureText": "Preboarding",
        "__v": 0
    },
    {
        "procedureText": "Deployment",
        "__v": 0
    },
    {
        "procedureText": "Feedback",
        "__v": 0
    },
    {
        "procedureText": "Deployment",
        "__v": 0
    }
]

  const stepNumberToWord = (number) => {
    const words = [
      "First",
      "Second",
      "Third",
      "Fourth",
      "Fifth",
      "Sixth",
      "Seventh",
      "Eighth",
      "Ninth",
      "Tenth",
      "Eleventh",
      "Twelfth",
      "Thirteenth",
      "Fourteenth",
      "Fifteenth",
      "Sixteenth",
      "Seventeenth",
      "Eighteenth",
    ];
    
    return words[number - 1] || "";
  };



  return (
    <Box alignItems={'center'} px={10} pb={{ sm: '2', md: '7', lg: '10' }}>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1r', lg: '1fr 1fr 1fr 1fr 1fr 1fr' }} gap px={{ sm: '2', md: '10', lg: '15' }} alignContent='center' align='center' rowGap={20} maxW={'95%'}> 
        {banner.map((item, index) => {
          return (<>
            <Box >
              <CheckCircleIcon color={'green.400'} boxSize={10} />
              <Text fontSize={'2xl'} textAlign='center' fontWeight={'bold'} >
              {stepNumberToWord(index + 1)}
              </Text>
              <Text fontSize={'xl'} textAlign='center' >
                {item.title}
                
              </Text>
              </Box>
              
            </>)
        })} 
          </Grid > 
    </Box>
  )
}

export default Procedure1

