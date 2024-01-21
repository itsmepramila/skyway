import React, {useState, useEffect} from 'react';
import { Grid, Box, Stack } from '@chakra-ui/react';
import CountUp from 'react-countup';
import { useInView } from 'react-hook-inview';
import axios from 'axios'
const StatisticsCard = () => {
  // const [barChartData, setBarChartData] = useState({})
  const [inViewRef, inView] = useInView();
  const [isCounting, setIsCounting] = useState(false);
const [data, setData] = useState([]);
const [data1, setData1] = useState([]);
const [data2, setData2] = useState([]);
const AboutData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
    // Filter the response data by status and page_type
    if (response.data) {
      const DocumentData = response.data.filter(
        (item) => item.status === "Publish" && item.page_type === "Countries");
      setData(DocumentData[0]); // Assuming you want to slice the filtered data

      if (response.data) {
        const DocumentData = response.data.filter(
          (item) => item.status === "Publish" && item.page_type === "Sectors");
        setData1(DocumentData[0]); // Assuming you want to slice the filtered data

      }

      if (response.data) {
        const DocumentData = response.data.filter(
          (item) => item.status === "Publish" && item.page_type === "Clients");
        setData2(DocumentData[0]); // Assuming you want to slice the filtered data
     
     
    }}}
    catch (error) {
    console.error("Error fetching data:", error);
  }
};

useEffect(() => {
  // Axios GET request to fetch data
  AboutData();
}, []);


  const barChartData = {
    "column1Label": "Countries",
    "column2Label": "Sectors",
    "column3Label": "Clients",
    "column1height": "200",
    "column2height": "250",
    "column3height": "300",
    "box1TopText": "We have employed",
    "box2TopText": "Partners in",
    "box3TopText": "We epmploy in",
    "box1NumberData": 1234,
    "box2NumberData": 89,
    "box3NumberData": 246,
    "box1BottomText": "Nepalese",
    "box2BottomText": "countries",
    "box3BottomText": "sectors",
  }

  useEffect(() => {
    if (inView) {
      setIsCounting(true);
    }
  }, [inView]);

  return (
    <Grid
    ref={inViewRef}
      templateColumns={{ base: '1fr', md: '1fr', lg: '1fr 1fr 1fr' }}
      templateRows={{ base: '1fr 1fr 1fr',  md: '1fr 1fr 1fr',lg: '1fr' }}
      pb={{md: "600px", lg: '0px'}}
      gap={5}
      alignItems="center"
      justifyItems="center"
      maxH={{ sm: '75vh', md: '30vh' }}
      marginBottom="20px"
      color={'white'}
    >
      <Box bg="yellow.400" w={320} h={200} p={4} rounded={'xl'} shadow={'xl'}>

        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {data.name}
          </text></Stack>
          {isCounting && (<CountUp end={data.caption} duration={4} style={{ color: "white", fontSize: "70px", fontWeight: "bold" }} />)}
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {data.title}
          </text></Stack>
      </Box>
      <Box bg="red.400" w={320} h={200} p={4} rounded={'xl'} shadow={'xl'}>
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {data1.name}
          </text></Stack>
          {isCounting && (<CountUp end={data1.caption} duration={4} style={{ color: "white", fontSize: "70px", fontWeight: "bold" }} />)}
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {data1.title}
          </text></Stack>
      </Box>
      <Box bg="green.400" w={320} h={200} p={4} rounded={'xl'} shadow={'xl'}>
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {data2.name}
          </text></Stack>
          {isCounting && ( <CountUp end={data2.caption} duration={4} style={{ color: "white", fontSize: "70px", fontWeight: "bold" }} />)}
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {data2.title}
          </text></Stack>
      </Box>
    </Grid>
  );
};

export default StatisticsCard;
