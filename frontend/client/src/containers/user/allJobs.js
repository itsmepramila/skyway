import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import {
    Box, Button, Heading, useColorModeValue, Grid, Image, Stack, Badge, Divider, ButtonGroup, Card, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, CardBody, CardFooter, AspectRatio, Flex, Center,
    StackDivider, Text, VStack, List, ListItem, SimpleGrid, Spinner
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
const AllJobs = ({ displayAll }) => {
    const location = useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalJobData, setModalJobData] = useState({})
    const [reqQualifications, setReqQualifications] = useState([])
    const [reqSkills, setReqSkills] = useState([])
    const [reqResponsiblities, setReqResponsiblities] = useState([])
    // const [data, setData] = useState([])
    const navigate = useNavigate()
    const baseUrl = process.env.REACT_APP_BASE_URL
    const selectedCategory = location.state?.selectedCategory;
    const data = [
        {
            "_id": "64fee2c0b18985ff229702f8",
            "landmark": "radiantInfoTech",
            "jobCode": "25792355",
            "jobImage": "1.jpeg",
            "jobTitle": "Head Chef",
            "salary": "AED 7,000 to 9,000",
            "category": "Hotel",
            "location": "UAE",
            "isFullTime": true,
            "workHours": "-",
            "daysOff": "1",
            "accomodation": true,
            "fooding": false,
            "shortDescription": "Create and continuously refine a diverse and culturally authentic Middle Eastern menu, featuring a range of traditional and modern dishes that resonate with the local palate.",
            "reqQualification": "Culinary degree or equivalent certification from a reputable culinary institute. Proven experience as a Head Chef, preferably in a Middle Eastern or similar themed restaurant, with knowledge of UAE cultural and culinary preferences.",
            "responsiblities": "Demonstrate exceptional proficiency in Middle Eastern culinary techniques, flavor profiles, and presentation, while maintaining consistency across all dishes. Oversee all aspects of kitchen operations, including food preparation, cooking, plating, and presentation. Monitor inventory levels, place orders, and manage suppliers to ensure the availability of fresh and high-quality ingredients while adhering to UAE import regulations. Lead, mentor, and manage a team of chefs, cooks, and kitchen staff, fostering a culture of creativity, excellence, and teamwork. Provide ongoing training and development opportunities to enhance culinary skills and knowledge. Conduct regular quality checks to ensure all dishes meet the restaurant's standards for taste, presentation, and authenticity, catering to the diverse clientele in UAE. Ensure compliance with all local health, safety, and sanitation regulations, including adherence to UAE food safety standards.",
            "skillsRequired": "Extensive knowledge of Middle Eastern cuisine, including traditional ingredients, spices, and cooking techniques. Strong leadership skills with the ability to manage and inspire a diverse culinary team. Excellent organizational and time management abilities. Proficiency in English. Knowledge of Arabic and familiarity with local dialects is a plus.",
            "createdAt": "2023-09-11T09:49:52.358Z",
            "updatedAt": "2023-09-11T09:49:52.358Z",
            "__v": 0
        },
        {
            "_id": "64fee2cfb18985ff22970302",
            "landmark": "radiantInfoTech",
            "jobCode": "25807022",
            "jobImage": "2.jpeg",
            "jobTitle": "Auto Mechanics",
            "salary": "USD 2,000 to 3,000",
            "category": "Engineering",
            "location": "Ireland",
            "isFullTime": true,
            "workHours": "-",
            "daysOff": "1",
            "accomodation": true,
            "fooding": true,
            "shortDescription": "To efficiently undertake the test inspection as per standard procedure.",
            "reqQualification": "A minimum equivalent Level 5 Quality and Qualifications Ireland (QQI) motor mechanical qualification, or above. At least two year’s post qualification experience in the repair and maintenance of light of light motor vehicles or higher. Customer Service Orientation. Good Communication Skills. Fully trained in Vehicle Inspection with minimum training of 117. Fully aware of the NCT Integrity Programme",
            "responsiblities": "Deal with customers, answer queries on test procedures and results in a pleasant and friendly manner. Maintain full records of testing work (including PC Entry) and administration. Undertake other duties as required to maintain an effective Test Centre.",
            "skillsRequired": "Present a professional image of the company through personal grooming and presentation. Responsible for own and others health & safety in the centre",
            "createdAt": "2023-09-11T09:50:07.025Z",
            "updatedAt": "2023-09-11T09:50:07.025Z",
            "__v": 0
        },
        {
            "_id": "64fee2ddb18985ff2297030c",
            "landmark": "radiantInfoTech",
            "jobCode": "25821206",
            "jobImage": "3.jpeg",
            "jobTitle": "Service Delivery Manager",
            "salary": "USD 1000 - 2000",
            "category": "management",
            "location": "Dubai, UAE",
            "isFullTime": true,
            "workHours": "-",
            "daysOff": "1",
            "accomodation": true,
            "fooding": false,
            "shortDescription": "The Service Delivery Manager has overall accountability for the delivery of passenger transport services and customer service strategy through the leadership of all customers facing roles and the management of safe operations and planning.",
            "reqQualification": "Bachelor’s degree in business administration or relevant field. Excellent communication and interpersonal skills, and a proven ability to effectively communicate with all levels of management, employees, customers, and stakeholders. Strong administrative and organisational skills. Ability to build and maintain strong relationships",
            "responsiblities": "Minimum of five years of experience in a managerial role within a large organisation. Sufficient experience in the transportation / mobility and education industry. Strong knowledge in relevant regulatory authorities’ laws and legislations. Valid UAE driving license. Quality customer service knowledge. Proven experience of managing large teams. Proven experience of successfully managing and delivering projects.",
            "skillsRequired": "Full professional fluency in English. Leadership and people management skills. Strong IT proficiency (incl. but not limited to Microsoft Office and advanced Excel). Professional business reporting and presentation skills. Problem solving and conflict resolution skills. Time management skills.",
            "createdAt": "2023-09-11T09:50:21.209Z",
            "updatedAt": "2023-09-11T09:50:21.209Z",
            "__v": 0
        },
        {
            "_id": "64fee2f4b18985ff22970316",
            "landmark": "radiantInfoTech",
            "jobCode": "25844074",
            "jobImage": "4.jpeg",
            "jobTitle": "Accountant",
            "salary": "AED 1000 - 2000",
            "category": "Finance",
            "location": "Oman",
            "isFullTime": true,
            "workHours": "In ullam adipisci ra",
            "daysOff": "1",
            "accomodation": true,
            "fooding": false,
            "shortDescription": "A Stock Accountant, also known as Inventory Accountant, is responsible for managing and accounting for an organization's inventory. This includes monitoring stock levels, reconciling discrepancies, and ensuring accurate financial reporting related to inventory transactions.",
            "reqQualification": "Bachelor's degree in Accounting, Finance, or a related field. Proven experience in inventory management or a similar role.",
            "responsiblities": "Familiarity with inventory management software and accounting systems. Knowledge of inventory valuation methods and financial accounting principles.",
            "skillsRequired": "Strong analytical and problem-solving skills. Excellent communication and interpersonal skills. Attention to detail and ability to work independently and collaboratively within a team.",
            "createdAt": "2023-09-11T09:50:44.078Z",
            "updatedAt": "2023-09-11T09:50:44.078Z",
            "__v": 0
        },
        {
            "_id": "64fee313b18985ff22970320",
            "landmark": "radiantInfoTech",
            "jobCode": "25875961",
            "jobImage": "5.jpeg",
            "jobTitle": "Staff Nurse",
            "salary": "AED 3000 - 4000",
            "category": "Hospitality",
            "location": "Dhahran, Saudi Arabia",
            "isFullTime": true,
            "workHours": "Voluptatem fugiat a",
            "daysOff": "28",
            "accomodation": true,
            "fooding": true,
            "shortDescription": "One of the leading healthcare facilities in Saudi Arabia - Eastern Province is looking for Staff Nurses in different specialties (Wound Care, CCU, Outpatients, Critical Care (ICU), Dialysis, Cardiac Care, OR, PACU/Day Surgery, OPPA, SPS, Home Healthcare, EMS, Medical/Surgical, Behavioral Health Unit, Oncology, Labor and Delivery Unit, NICU, PICU, Mother and Baby Unit, Pediatrics).",
            "reqQualification": "Basic Function Provides wide range of direct and complex nursing care to patients requiring advanced nursing skills. Responsible for ensuring that the nursing process of; diagnosis, assessment, planning, implementation and evaluation of the patient’s care is in collaboration with the family and is in accordance with the organizations policy and procedures and scope of service.",
            "responsiblities": "Recognizing the boundaries of your scope of practice and limits of own competence. Under supervision and collaboration with the interdisciplinary team ensures that the provision of individualized care from point of first contact throughout the episode of care, incorporates the continuum of care and rehabilitation goals.",
            "skillsRequired": " Identifying significant changes/deterioration with patient conditions, initiates appropriate action within scope of practice and escalates concerns timely and appropriately. Demonstrates a working knowledge of resource consumption and practices within a cost effective framework. Works closely with families to ensure they are involved within all aspects of care where appropriate.",
            "createdAt": "2023-09-11T09:51:15.966Z",
            "updatedAt": "2023-09-11T09:51:15.966Z",
            "__v": 0
        }
    ]
    const [jobs, setJob] = useState([])

    const AboutData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
            // Filter the response data by status and page_type
            if (response.data) {
                const DocumentData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Latest Jobs"
                );
                setJob(DocumentData);
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

    const handleApplyNowClick = (jobId) => {
        navigate(`/resume?jobId=${jobId}`);
    };
    // const itemsToDisplay = displayAll ? data : data.slice(0, 5)
    const itemsToDisplay = displayAll ? jobs : jobs.slice(0, 5)
    return (
        <>
            <Box
                bg={useColorModeValue('blue.500', 'gray.800')}
                color='gray.100'
            >
                <div>
                    {selectedCategory ? (<Heading fontSize={'4xl'} fontFamily={'body'} pt={5}>
                        Latest {selectedCategory} Jobs
                    </Heading>) : (<Heading fontSize={'4xl'} fontFamily={'body'} pt={5}>
                        Latest Jobs
                    </Heading>)}


                    {/* {data && data.length !== 0 ?  ( */}
                    <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr 1fr', '2xl': '1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>
                        <>{itemsToDisplay ? (itemsToDisplay.map((job, index) => {
                            return (<>
                                <Card maxW='sm' key={index} >
                                    <CardBody w='100%' h='10' bg='' >
                                        <AspectRatio>
                                            <Image
                                                src={job.bannerimage}
                                                alt={job.name}
                                                borderRadius='lg'
                                            />
                                        </AspectRatio>
                                        {
                                            new Date(job.updatedAt) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) ? (
                                                <Box display='flex' alignItems='baseline' p="2" >
                                                    <Badge borderRadius='full' colorScheme='red'>
                                                        New
                                                    </Badge>
                                                </Box>
                                            ) : (null)
                                        }
                                        <Stack mt='1' spacing='3'>
                                            <Heading size='md'>{job.name}</Heading>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter alignContent={'middle'} align="center">
                                        <ButtonGroup spacing='3' >
                                            <Center>
                                                <Button
                                                    variant='ghost'
                                                    colorScheme='blue'
                                                    rounded='full'
                                                    onClick={() => {
                                                        onOpen()
                                                        setModalJobData(job)
                                                        setReqQualifications(job.reqQualification)
                                                        setReqSkills(job.skillsRequired)
                                                        setReqResponsiblities(job.responsiblities)
                                                    }}
                                                >
                                                    Details
                                                </Button>
                                                <Button variant='solid' colorScheme='blue' rounded='full'
                                                    onClick={() => handleApplyNowClick(job.caption)}
                                                >
                                                    Apply now
                                                </Button>
                                            </Center>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            </>)
                        })) : <Spinner
                            thickness='4px'
                            speed='0.65s'
                            color='blue.500'
                            size='xl' />}
                        </>
                    </Grid>
                    {/* ) : (<Text>Jobs not available at this moment.</Text>) } */}

                    {displayAll === false && (<Flex w="full" alignItems="center" justifyContent="center">
                        <Box pb={"15px"}>
                            <Button
                                bg={'whiteAlpha.800'}
                                rounded={'full'}
                                color={'blue.500'}
                                _hover={{ bg: 'whiteAlpha.900', color: 'blue.600' }}
                                onClick={() => navigate("/jobs")}
                            >
                                View All Jobs
                            </Button>
                        </Box>
                    </Flex>)
                    }

                </div>
                {/* JOB DESCRIPTION MODAL */}
                <Box pos='relative' zIndex={"9999"} mt={"3%"}  >
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent minW={"80%"} >
                            <ModalBody>

                                <Box
                                    w={'100%'}
                                    rounded="10px"
                                    position="relative"
                                >
                                    <Box>
                                        <Center>
                                            <Image
                                                maxH={"md"}
                                                roundedTop={'md'}
                                                alt={modalJobData.name}
                                                src={modalJobData.bannerimage}
                                                fit={'cover'}
                                                align={'center'}
                                                w={{ sm: '90%', lg: '50%' }}
                                            />
                                        </Center>
                                    </Box>
                                    <Box px={{ base: '5', sm: '5', md: '20', lg: '250' }}
                                        py={5}
                                    >
                                        <Box mt="1" justifyContent="center" alignContent="center">
                                            <Box
                                                fontSize="2xl"
                                                fontWeight="semibold"
                                                as="h4"
                                                lineHeight="tight"
                                                textAlign="center"
                                            >
                                                <Stack spacing={{ base: 6, md: 10 }}>
                                                    <Box as={'header'}>
                                                        <Heading
                                                            lineHeight={1.1}
                                                            fontWeight={600}
                                                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                                                        >
                                                            {modalJobData.name}
                                                        </Heading>
                                                        <Text
                                                            fontSize={'md'}
                                                            fontWeight={'300'}>
                                                            Job code: {modalJobData.caption}
                                                        </Text>
                                                        {/* <Text
                                                            fontWeight={300}
                                                            fontSize={'2xl'}
                                                            pt={5}
                                                        >
                                                            {modalJobData.salary} per month
                                                        </Text> */}
                                                    </Box>

                                                    <Stack
                                                        spacing={{ base: 4, sm: 6 }}
                                                        direction={'column'}
                                                        divider={
                                                            <StackDivider borderColor='gray.200' />
                                                        }>
                                                        <VStack spacing={{ base: 4, sm: 6 }}>
                                                            <Text
                                                                fontSize={'xl'}
                                                                fontWeight={'300'}>
                                                                {modalJobData.short_desc}
                                                            </Text>

                                                        </VStack>
                                                        <Box textAlign={'left'}>
                                                            <Text
                                                                fontSize={{ base: '20px', lg: '24px' }}
                                                                fontWeight={'700'}
                                                                textTransform={'uppercase'}
                                                                mb={'4'}
                                                            >
                                                                Details
                                                            </Text>

                                                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} fontSize={{ base: '14px', lg: '18px' }}>
                                                                <List spacing={2}>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Country / City:
                                                                        </Text>{' '}
                                                                        {modalJobData.title}
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Field:
                                                                        </Text>{' '}
                                                                        {modalJobData.meta_title}
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Type:
                                                                        </Text>{' '}
                                                                        {modalJobData.isFulltime = true ? "Fulltime" : "Part-time"}
                                                                    </ListItem>
                                                                    {/* <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Work Hours:
                                                                        </Text>{' '}
                                                                        {modalJobData.workHours}
                                                                    </ListItem> */}

                                                                </List>
                                                                <List spacing={2}>
                                                                    {/* <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Day Off:
                                                                        </Text>{' '}
                                                                        Saturday, Sunday
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Housing:
                                                                        </Text>{' '}
                                                                        {modalJobData.housing = true ? "Yes" : "No"}
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Food:
                                                                        </Text>{' '}
                                                                        {modalJobData.fooding == true ? "Yes" : "No"}
                                                                    </ListItem> */}
                                                                </List>
                                                            </SimpleGrid>
                                                        </Box>

                                                        <Box textAlign={'left'}>
                                                            <Text
                                                                fontSize={{ base: '20px', lg: '24px' }}
                                                                fontWeight={'700'}
                                                                textTransform={'uppercase'}
                                                                mb={'4'}>
                                                                Qualifications Required
                                                            </Text>
                                                            <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                <Text alignItems="left" textAlign={"left"}>
                                                                    {modalJobData && modalJobData.short_desc1 ? (
                                                                        modalJobData.short_desc1
                                                                            .split(". ")
                                                                            .filter((sentence) => sentence.trim() !== "")
                                                                            .map((sentence, index) => (
                                                                                <p key={index}> {index + 1 + ". "} {sentence}</p>
                                                                            ))
                                                                    ) : (
                                                                        <span>No qualification information available</span>
                                                                    )}
                                                                </Text>
                                                            </VStack>
                                                        </Box>
                                                        <Box textAlign={'left'}>
                                                            <Text
                                                                fontSize={{ base: '20px', lg: '24px' }}
                                                                fontWeight={'700'}
                                                                textTransform={'uppercase'}
                                                                mb={'4'}>
                                                                Skills Required
                                                            </Text>
                                                            <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                <Text textAlign={"left"}>
                                                                    {modalJobData && modalJobData.short_desc2 ? (
                                                                        modalJobData.short_desc2
                                                                            .split(". ")
                                                                            .filter((sentence) => sentence.trim() !== "")
                                                                            .map((sentence, index) => (
                                                                                <p key={index}> {index + 1 + ". "} {sentence}</p>
                                                                            ))
                                                                    ) : (
                                                                        <span>No skills information available</span>
                                                                    )}
                                                                </Text>
                                                            </VStack>
                                                        </Box>
                                                        <Box textAlign={'left'}>
                                                            <Text
                                                                fontSize={{ base: '20px', lg: '24px' }}
                                                                fontWeight={'700'}
                                                                textTransform={'uppercase'}
                                                                mb={'4'}>
                                                                Responsiblities
                                                            </Text>
                                                            <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                <Text textAlign={"left"}>
                                                                    {modalJobData && modalJobData.short_desc3 ? (
                                                                        modalJobData.short_desc3
                                                                            .split(". ")
                                                                            .filter((sentence) => sentence.trim() !== "")
                                                                            .map((sentence, index) => (
                                                                                <p key={index}> {index + 1 + ". "} {sentence}</p>
                                                                            ))
                                                                    ) : (
                                                                        <span>No responsiblities information available</span>
                                                                    )}
                                                                </Text>
                                                            </VStack>
                                                        </Box>
                                                    </Stack>
                                                    <Box
                                                        align='center'
                                                    >
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                {/* </ScrollDiv> */}
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme='blue' rounded='30px' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='solid' colorScheme='blue' rounded='30px' size={'md'} onClick={() => handleApplyNowClick(modalJobData.jobCode)}>
                                    Apply now
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </Box>
        </>
    )
}

export default AllJobs