import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Image,
  Center
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const menuItems = [
      {
          "label": "Latest Jobs",
          "href": "jobs",
          "children": [],
      },
      {
          "label": "Resume",
          "href": "resume",
          "children": []
      },
      {
          "label": "Documents",
          "href": "license",
          "children": [
              {
                  "label": "License",
                  "href": "/license",
              },
              {
                  "label": "Newspaper Ads",
                  "href": "/newspaper",
              }
          ],
      },
      {
          "label": "About Us",
          "href": "about-us",
          "children": [
              {
                  "label": "About Nepal",
                  "href": "about-nepal",
              },
              {
                  "label": "Why Choose Us",
                  "href": "choose-us",
              }
          ],
      },
      {
          "label": "Gallery",
          "href": "gallery",
          "children": [],
      },
      {
          "label": "Contact Us",
          "href": "contact-us",
          "children": [],
      }
  ]

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate()
  const logoImageData = {
    image: "1.jpeg"
  }
const [navigation, setNavigation] = useState([]);
const [glob, setGlob] = useState([]);
const [parentId, setParentId] = useState(null)
const HeaderData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/globals/');
            // Handle the response data here
            response.data && setGlob(response.data[0]);

      
      const navigationResponse = await axios.get(
          "http://127.0.0.1:8000/api/navigations/",
          {
              params: {
                  parent_id: parentId,      // Set the parentId as a parameter
                  page_type: "Group",       // Filter by page_type        
              }
          }
      );

      if (navigationResponse.data) {
          const navigationData = navigationResponse.data.filter(
              (item) => item.status === "Publish"
          );
          setNavigation(navigationData);
      }
  }
  catch (error) {
      console.error("Error fetching data:", error);
  }
}
useEffect(() => {
  // Axios GET request to fetch data
  HeaderData();
}, [parentId]);

  return (
    <Box className='header'>
      <Flex
        bg={useColorModeValue('white', 'blue.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'70px'}
        py={{ base: 0 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderBottomColor={'blue.200'}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image
            src={`/uploads/logoImage/${logoImageData.image}`}
            alt="Logo"
            h={20}
            p={2}
            _hover={{
              textDecoration: 'none',
              cursor: "pointer"
            }}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            onClick={() => navigate("/")}
          />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <Center>
              <DesktopNav menuItems={menuItems} />
            </Center>
          </Flex>
        </Flex>

        {/* toggle dark/light modes */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav menuItems={menuItems} />
      </Collapse>
    </Box>
  )
}

const DesktopNav = (props) => {
  const textColorMode=useColorModeValue('blue.500', 'gray.300')
  const linkHoverColor = useColorModeValue('gray.200', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const navigate = useNavigate();
  // const menuHrefs = [
  //   {href: "jobs"},
  //   {href: "resume"},
  //   {href: "license",
  //   children: [
  //     {href: "license"},
  //     {href: "newspaper"},

  //     ]
  //   },
  //   {href: "about-us",
  //   children: [
  //     {href: "about-nepal"},
  //     {href: "choose-us"},
  //     ]
  //   },
  //   {href: "gallery"},
  //   {href: "contact-us"}
  // ]

  return (
    <Stack direction={'row'} spacing={4} fontWeight="bold"
      color={useColorModeValue('blue.500', 'gray.300')}
    >
      <Box
        p={2}
        fontSize={'md'}
        fontWeight={500}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
          bg: 'blue.400',
          rounded: '10px',
          shadow: 'md',
          cursor: "pointer"
        }}
        onClick={() => navigate("/")}
      >
        Home
      </Box>
      {props.menuItems.map((navItem, index) => (
        <Center>
        <Box key={navItem.label} fontWeight="bold">
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={menuItems[index].href}
                fontSize={'md'}
                fontWeight={500}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                  bg: 'blue.400',
                  rounded: '10px',
                  shadow: 'md'
                }}
                // onClick={() => navigate(navItem.urlPath || "/")}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children.length !== 0 && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                color={textColorMode}
                rounded={'10px'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child, childIndex) => (
                    <DesktopSubNav
                      key={child.label} {...child}
                      href={menuItems[index]?.children[childIndex]?.href}
                      _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                        bg: 'blue.400',
                        rounded: '10px',
                        shadow: 'md'
                      }}
                      // onClick={() => navigate("/" + menuHrefs[index]?.children?.href)}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
          
        </Box>
        </Center>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const linkHoverColor = useColorModeValue('gray.200', 'white')
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      color={'blue.500'}
      _hover={{ 
        color: linkHoverColor, 
      bg: useColorModeValue('blue.400', 'blue.400'), rounded: '10px' }}
      >
      <Stack direction={'row'} align={'center'}>
        <Box
        >
          <Text
            transition={'all 0.3s ease'}
            _groupHover={{ color: 'white.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'} color={'white.400'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'white.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}
const MobileNav = (props) => {
  const navigate = useNavigate()
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }} fontWeight="bold">
             <Box
        as="a"
        p={2}
        fontSize={'md'}
        fontWeight={500}
        _hover={{
          textDecoration: 'none',
          cursor: "pointer"
        }}
        onClick={() => navigate("/")}
        >
        Home
      </Box>
      {props.menuItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} onClick={navItem.slug} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()
  const linkHoverColor = useColorModeValue('gray.200', 'white')
  const navigate = useNavigate()


  return (
    <Stack spacing={4} onClick={children && onToggle}>

      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
        >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string,
  subLabel?: string,
  children?: Array<NavItem>
}

// const NAV_ITEMS: Array<NavItem> = [
//   {
//     label: 'Home',
//     href: '',
//     urlPath: "",
//   },

//   {
//     label: 'Jobs',
//     href: 'jobs',
//   },

//   {
//     label: 'Resume',
//     href: "resume"
//   },

//   {
//     label: 'Documentation',
//     href: 'license',
//     children: [
//       {
//         label: 'Licenses',
//         subLabel: '',
//         href: 'license',
//       },
//       {
//         label: 'Newspaper Ads',
//         subLabel: '',
//         href: 'newspaper',
//       },
//     ],
//   },
//   {
//     label: 'About Us',
//     href: 'about',
//     children: [
//       {
//         label: 'About Nepal',
//         subLabel: '',
//         href: 'about-nepal',
//       },
//       {
//         label: 'Why Choose Us',
//         subLabel: '',
//         href: 'choose-us',
//       },
//     ],
//   },

//   {
//     label: 'Gallery',
//     href: 'gallery',
//   },
//   {
//     label: 'Contact Us',
//     href: 'contact',
//   },

// ]