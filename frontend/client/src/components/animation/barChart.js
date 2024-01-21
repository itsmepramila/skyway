import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useInView } from 'react-hook-inview';

const BarChart = () => {

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

  // const [barHeights, setBarHeights] = useState([0, 0, 0]);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [inViewRef, inView] = useInView();
  // const [barChartData, setBarChartData] = useState({})
  let labels = []
  barChartData &&
    (labels = [barChartData.column1Label, barChartData.column2Label, barChartData.column3Label])
  const bg = ['yellow.400', 'red.400', 'green.400']

  // const fetchBarChartData = async () => {
  //   try {
  //     const res = await axios.get(`${baseUrl}/get-stats`)
  //     const newData = await res.data.data
  //     setBarChartData(newData)
  //   } catch (error) {
  //     console.error("Error: ", error)
  //   }
  // }

  // useEffect(() => {
  //   fetchBarChartData()
  // }, [])


  
 const barHeights = [barChartData.column1height, barChartData.column2height, barChartData.column3height]

  useEffect(() => {
    if (inView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [inView, animationStarted]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      minHeight="200px"
      width="100%"
      marginBottom="20px"
      h={"30vh"}
      ref={inViewRef}
    >
      {barHeights.map((height, index) => (
        <Box
          key={index}
          width={'100px'}
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginX="30px"
        >

          <Box
            width="100%"
            minW={'50px'}
            height={`${animationStarted ? height : 0}px`}
            bg={bg[index]}
            transition="height 2s ease-in-out"
            shadow={"xl"}
          />
          <Text pt={5} fontSize={"md"} fontWeight={"bold"} color={bg[index]} textAlign={'center'}>{labels[index]}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default BarChart;
