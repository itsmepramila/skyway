import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
export default function HeroWithBgButton(props) {
  const navigate = useNavigate()
  return (
    <Flex
      w={'full'}
      backgroundImage={
        props.imageUrl
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      h={850}
      >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'4xl'} align={'flex-start'} spacing={6}>
          
        <Heading
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                pt={2}
                color={'gray.100'}
            >
                Sky Way Nepal{' '}
                <Text as={'span'} color={'blue.300'}>
                    at a glance
                </Text>
            </Heading>
          <Stack direction={{base:'column', sm:'column', md:'column', lg:'row', xl:'row'}}>
          

          <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
              onClick={()=>navigate("/license")}
              >
              View legal documents
            </Button>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
              onClick={()=>navigate("/newspaper")}
              >
              View newspaper Ads
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
