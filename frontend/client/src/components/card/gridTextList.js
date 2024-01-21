import React from "react";

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Spacer,
    Center,
    useColorModeValue
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'


export default function GridTextList(props) {



    return (
        <Box p={4} color={useColorModeValue('blue.700', 'gray.400')} justifySelf="center" >
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>{props.data1.name}</Heading>
                <Text color={useColorModeValue('blue.600', 'gray.400')} fontSize={'xl'}>
                {props.data1.caption}
                </Text>
            </Stack>
            <Spacer/>
            <br/>
            <Center>

            <Box maxW={"80%"} p={15}   >
                <Text color={useColorModeValue('blue.700', 'gray.400')} fontSize={'xl'} textAlign="center">
                {props.data1.short_desc1}                
                </Text>
            </Box>
            </Center>
        
            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} color={useColorModeValue('blue.700', 'gray.400')} pb={5}>
                 
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data2.name}</Text>
                                <Text  align={'left'}>{props.data2.short_desc1}</Text>
                            </VStack>
                        </HStack>
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data3.name}</Text>
                                <Text  align={'left'}>{props.data3.short_desc1}</Text>
                            </VStack>
                        </HStack>
                       
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data4.name}</Text>
                                <Text  align={'left'}>{props.data4.short_desc1}</Text>
                            </VStack>
                        </HStack>
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data5.name}</Text>
                                <Text  align={'left'}>{props.data5.short_desc1}</Text>
                            </VStack>
                        </HStack>
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data6.name}</Text>
                                <Text  align={'left'}>{props.data6.short_desc1}</Text>
                            </VStack>
                        </HStack>
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data7.name}</Text>
                                <Text  align={'left'}>{props.data7.short_desc1}</Text>
                            </VStack>
                        </HStack>
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data8.name}</Text>
                                <Text  align={'left'}>{props.data8.short_desc1}</Text>
                            </VStack>
                        </HStack>

                         <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data9.name}</Text>
                                <Text  align={'left'}>{props.data9.short_desc1}</Text>
                            </VStack>
                        </HStack>

                        
                  
                </SimpleGrid>
            </Container>
        </Box>
    )
}