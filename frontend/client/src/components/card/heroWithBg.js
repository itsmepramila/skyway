import { Stack, Flex, Button, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const HeroWithBg = (props) => {
const navigate = useNavigate()
  return (
    <>
   {props.data &&( <>
    <Flex
      className='hero-pic'
      w={'full'}
      backgroundImage={props.data.bannerimage}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      h={400}>
      <VStack
        w={'full'}
        justify={'center'}
        px={6}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize="6xl">
            {props.data.name}
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
              onClick={()=>navigate("/jobs")}>
              See all jobs
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
              onClick={()=>navigate("/resume")}>
              Apply now
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    </>)}
    </>
  )
}
export default HeroWithBg