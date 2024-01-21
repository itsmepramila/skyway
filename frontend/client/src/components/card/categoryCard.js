// import { useNavigate } from 'react-router-dom'
// import { Image, Stack, Heading, Box, Badge, Divider, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

// const CategoryCard = (props) => {
//     console.log
//     const navigate = useNavigate()
//     return (
//         <>
//             {data.map((job, index) => {
//                 return (<>
               
//                     <Card maxW='sm' >
//                         <CardBody w='100%' h='10' bg='' >
//                             <Image
//                                 src={job.src}
//                                 alt={job.alt}
//                                 borderRadius='lg'
//                             />
//                             <Box display='flex' alignItems='baseline' p="2">
//                             <Badge borderRadius='full' colorScheme='teal'>
//                                 New
//                             </Badge>
//                         </Box>
//                             <Stack mt='1' spacing='3'>
//                                 <Heading size='md'>{job.alt}</Heading>
//                             </Stack>
//                         </CardBody>
//                         <Divider />
//                         <CardFooter alignContent={'middle'} align="center">
//                             <ButtonGroup spacing='3' >
//                                 <Button variant='ghost' colorScheme='blue' rounded='full' onClick={() => navigate("/job-description")}>
//                                     Details
//                                 </Button>
//                                 <Button variant='solid' colorScheme='blue' rounded='full' onClick={() => navigate("/resume")}>
//                                     Apply now
//                                 </Button>
//                             </ButtonGroup>
//                         </CardFooter>
//                     </Card>
//                 </>)
//             })}
            
//         </>
//     )
// }

// export default CategoryCard