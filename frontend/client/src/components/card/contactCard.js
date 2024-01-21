import axios from 'axios'
import React,{useState, useEffect} from 'react'
import {
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  Stack,
  VStack,
  Grid,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsWhatsapp, BsPerson, BsMessenger } from 'react-icons/bs'

const ContactCard = (props) => {
    const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
    const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false); // State for displaying the error message
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const showSuccessMessage = () => {
    setIsSuccessMessageVisible(true);
    // Set a timeout to hide the success message after 5 seconds (adjust as needed)
    setTimeout(() => {
      setIsSuccessMessageVisible(false);
    }, 5000);
  };
  const showErrorMessage = () => {
    setIsErrorMessageVisible(true);
    // Set a timeout to hide the error message after 5 seconds (adjust as needed)
    setTimeout(() => {
      setIsErrorMessageVisible(false);
    }, 5000);
  };
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.name && formData.email && formData.message) {
          try {
            const response = await axios.post(
              "http://127.0.0.1:8000/api/contacts/",
              
              formData
            );
            if (response.status === 201) {
              // Show a success message to the user
              showSuccessMessage(); // Call the function to show the success message
              // Optionally, reset the form fields
              setFormData({
                name: "",
                email: "",
                message: "",
              });
            } else {
              console.error("Form submission failed with status:", response.status);
              // Display a user-friendly error message here if needed
            }
          } catch (error) {
            console.error("Error submitting form:", error);
    
            if (error.response && error.response.status === 400) {
    
              console.log("Validation errors:", error.response.data);
    
            }
            else {
            }
          }
        }
        else {
          showErrorMessage();
        }
      }
  function openMessengerChat(recipientId) {
    // Replace 'your-app-id' with your Facebook App ID
    const messengerUrl = `https://m.me/${props.data.oneTapMessengerLink}`;
    window.open(messengerUrl, 'Messenger Chat', 'width=600,height=400');
  }

  function openFaceBookPage(recipientId) {
    // Replace 'your-app-id' with your Facebook App ID
    const facebookUrl = `https://facebook.com/${props.data.facebookId}`;
    window.open(facebookUrl, 'Facebook Page', 'width=600,height=400');
  }

  function openWhatsappChat(recipientId) {
    // Replace 'your-app-id' with your Facebook App ID
    const whatsappPhoneNumber = `https://wa.me/${props.data.whatsappId}`;
    window.open(whatsappPhoneNumber, 'Whatsapp Chat', 'width=600,height=400');
  }
 
     return (
    <Box maxW="full" mt={0} centerContent overflow="hidden">
      <Box
        bg={useColorModeValue('blue.600', 'gray.800')}
        color={'white'}
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        px={{ sm: 5, md: 5, lg: 16 }}>
        <Grid templateColumns={{ sm: '1fr', md: '1fr', lg: '1fr 1fr 1fr' }} p={10} gap={10}  >
          {/* LEFT */}
          <Box w={200} pt={3} alignSelf="center"  >
            <Heading fontSize="3xl" >{props.data.ContactTitle1}</Heading>
            <Text fontSize="md" mt={{ sm: 3, md: 3, lg: 5 }} color={useColorModeValue('grey.200', 'grey.200')}
            >
              {props.data.ContactTitle2}
            </Text>
            <Box py={{ base: 1, sm: 1, md: 2, lg: 3 }} color={useColorModeValue('grey.800', 'grey.100')} alignSelf={'center'} >
              <Stack pl={0} spacing={3} color={useColorModeValue('grey.800', 'grey.100')}>
                <Box pl={0} spacing={0} justifySelf="left" color={'white'}>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    leftIcon={<MdPhone color="white" size="20px" />}
                    color={'white'}
                  >
                    <a href={`tel:${props.data.SiteContact}`}>{props.data.SiteContact}</a>
                  </Button>
                  <Button
                    color={'white'}
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    leftIcon={<MdPhone color="white" size="20px" />}
                  >
                    <a href={`tel:${props.data.phoneNumber2}`}>{props.data.SiteContact1}</a>
                  </Button>
                </Box>
                <Button
                  color={'white'}
                  size="md"
                  height="48px"
                  width="200px"
                  variant="ghost"
                  _hover={{ border: '2px solid #1C6FEB' }}
                  leftIcon={<MdEmail color="white" size="20px" />}
                >
                  <a href={`mailto:${props.data.SiteEmail}`}>{props.data.SiteEmail}</a>
                </Button>
                <Button
                  color={'white'}
                  size="md"
                  height="48px"
                  width="200px"
                  variant="ghost"
                  _hover={{ border: '2px solid #1C6FEB' }}
                  leftIcon={<MdLocationOn color="white" size="20px" />}>
                  {props.data.SiteAddress}
                </Button>
              </Stack>
              <Stack
                direction={'horizontal'}
                mt={{ lg: 10, md: 10 }}
                spacing={2}
                px={0}
                alignSelf="center"
              >
                <IconButton
                  color={'white'}
                  aria-label="whatsapp"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsWhatsapp size="28px" />}
                  onClick={() => openWhatsappChat(props.data.Sitewhatsapplink)}

                />
                <IconButton
                  color={'white'}
                  aria-label="facebook"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<MdFacebook size="28px" />}
                  onClick={() => openFaceBookPage(props.data.Sitefacebooklink)}

                />

                <IconButton
                  color={'white'}
                  aria-label="messanger"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsMessenger size="28px" />}
                  onClick={() => openMessengerChat(props.data.Sitemessengerlink)}
                />

              </Stack>
            </Box>
          </Box>
          {/* MIDDLE */}
          <Box bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} h={{ base: '500px', sm: '450', md: '450' }} w={{ base: '300px', sm: '400px', md: '400px', lg: '350px', xl: '400px' }} borderRadius="lg" alignContent="center" >
            <Box m={8} color={'white'}>
              <VStack spacing={5}>
                <Text fontSize="xl"  color={useColorModeValue('grey.200', 'grey.200')}>Send us a direct message</Text>
                <form onSubmit={handleSubmit}>
                <FormControl id="name">
                  <FormLabel>Your Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <BsPerson color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" size="md" name="name" value={formData.name} onChange={handleInputChange}  />
                  </InputGroup>
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <MdOutlineEmail color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" size="md" name="email" value={formData.email} onChange={handleInputChange} required />
                  </InputGroup>
                </FormControl>
                <FormControl id="message" >
                  <FormLabel >Message</FormLabel>
                  <Textarea
                    borderColor="gray.300" type="text" name="message" value={formData.message} onChange={handleInputChange} required

                  />
                </FormControl>
                <FormControl id="name" float="right">
                  <Button type="submit" variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                  Send Message
                  </Button>
                </FormControl>
               {/* Display the error message */}
               {isErrorMessageVisible && (
                        <div className="text-red mt-4 text-center">
                            All fields must be filled.
                        </div>
                    )}

                    {/* Display the success message */}
                    {isSuccessMessageVisible && (
                        <div className="text-green-600 mt-4 text-center">
                            Submitted successfully! {/* Display your success message here */}
                        </div>
                    )}
                </form>
              </VStack>
             
            </Box>
          </Box>
          {/* RIGHT */}
          <Box overflow='hidden' borderRadius={10} w={{ base: '300px', sm: '400px', md: '400px', lg: '350px', xl: '400px' }} h={450}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.020088774581!2d85.34113409999999!3d27.7016894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1983ee163391%3A0x8cbc1871ad79125f!2sSKYWAY%20MANAGEMENT%20PVT.%20LTD.!5e0!3m2!1sen!2snp!4v1703396705561!5m2!1sen!2snp" 
            className='footer-map'
            width="400"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default ContactCard