import React, { useState, useEffect } from 'react';

import
{ Box,
  Container,
  Stack,
  Text,
  Image,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react'
import axios from 'axios';

export default function AboutImageParagraphCard() {
  const [data1, setData] = useState({});
  const [key, setData1] = useState({});
  const [value, setData2] = useState({});
  const [point, setData3] = useState({});
  const [point1, setData4] = useState({});

    const AboutData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
            // Filter the response data by status and page_type
            if (response.data) {
                const DocumentData = response.data.find(
                    (item) => item.status === "Publish" && item.page_type === "About Nepal");
                setData(DocumentData); // Assuming you want to slice the filtered data
            }

            if (response.data) {
              const DocumentData = response.data.find(
                  (item) => item.status === "Publish" && item.page_type === "Key");
              setData1(DocumentData); // Assuming you want to slice the filtered data
          }

          if (response.data) {
            const DocumentData = response.data.find(
                (item) => item.status === "Publish" && item.page_type === "Value");
            setData2(DocumentData); // Assuming you want to slice the filtered data
        }

        if (response.data) {
          const DocumentData = response.data.find(
              (item) => item.status === "Publish" && item.page_type === "Point");
          setData3(DocumentData); // Assuming you want to slice the filtered data
      }
      if (response.data) {
        const DocumentData = response.data.find(
            (item) => item.status === "Publish" && item.page_type === "Point1");
        setData4(DocumentData); // Assuming you want to slice the filtered data
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

    const data = {
        heroImage: "1.jpeg",
        title1: "About Nepal",
        tagline: "A country of lovingkindness and compassion",
        shortDescription: "Middle Eastern countries continue to attract hundreds of thousands of Nepali migrant workers every year.",
        paragraph: "Nepal is a mountainous and a landlocked country situated between two giant neighbors, China to the North and India to the South, East, and West. Nepal boasts of having the highest peak of the world, Mount Everest, and visitors from all over the world visit the country to climb Mount Everest and to see the beautiful panorama, snow-capped mountains, and gorgeous historic monuments.\n\nMoreover, it should also be noted that Nepal is the 2nd richest country in the world in water resources with a substantial number of rivers & streams flowing towards the South from the high Himalayas. And the Tilicho Lake situated at the highest land of the world is also in Nepal. So the people who visit Nepal definitely get optimal gratification from its natural gorgeous scenery.",
        title2: "Demographics",
        key1: "Population:",
        value1: "29,164,578",
        key2: "Growth Rate:",
        value2: "0.92%",
        key3: "Migration Rate:",
        value3: "0.92%", 
        key4: " Birth Rate:",
        value4: "17.53 births/1,000 population",
        key5: "Official Language:",
        value5: "Nepali",
        point1: "Construction",
        point2: "Security",
        point3: "Cook",
        point4: "Waiter",
        point5: "Caretaker",
        point6: "Driver",
        point7: "Assistant ",
        point8: "Accountant ",
        title3: "Overseas Nepali Immigrant Professions"
    }

  return (
    <Container maxW={'7xl'} color={useColorModeValue('blue.700', 'gray.400')}>
     
        <Stack spacing={{ base: 6, md: 10 }}>
        <Image
            rounded={'md'}
            alt={'product image'}
            src={`/uploads/aboutNepalImage/${data.heroImage}`}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {data.title1}
            </Heading>
            <Text
              color={useColorModeValue('gray.400', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {data1.caption}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('blue.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                  {data1.title}
              </Text>
              <Text fontSize={'lg'}>
              {data1.short_desc1}              
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                {data1.meta_keyword}
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {key.name}
                  </Text>{' '}
                  {value.name}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                 {key.caption}
                  </Text>{' '}
                  {value.caption}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {key.title}
                  </Text>{' '}
                  {value.title}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {key.meta_keyword}
                  </Text>{' '}
                  {value.meta_keyword}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {key.meta_title}
                  </Text>{' '}
                  {value.meta_title}
                </ListItem>

              </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                {point.name}
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pb={10}>
                <List spacing={2}>
                  <ListItem>{point.caption}</ListItem>
                  <ListItem>{point.title}</ListItem>{' '}
                  <ListItem>{point.meta_keyword}</ListItem>
                  <ListItem>{point.meta_title}</ListItem>
                </List>
                <List spacing={2}>
                <ListItem>{point1.name}</ListItem>
                <ListItem>{point1.caption}</ListItem>
                <ListItem>{point1.title}</ListItem>
                <ListItem>{point1.meta_title}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>

        </Stack>
    </Container>
  )
}