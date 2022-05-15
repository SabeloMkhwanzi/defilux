import React from "react";
import {
  chakra,
  HStack,
  Link,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";

import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";

//import { Logo } from "../../public"

function Navbar() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const BgNarbar = useColorModeValue("blue.500", "gray.900");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  // Color mode hooks
  const ButtonColorMode1 = useColorModeValue("gray.600", "#303E46");

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={BgNarbar}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Bridge Quote
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );

  return (
    <React.Fragment>
      <chakra.header
        ref={ref}
        shadow="xl"
        transition="box-shadow 0.2s"
        bg={BgNarbar}
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <Link href="/">
                <HStack>{/* <Logo /> */}</HStack>
              </Link>
            </Flex>

            <Flex>
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <Button
                  borderRadius="2xl"
                  w="full"
                  variant="outlne"
                  color="#EEEEEE"
                >
                  <Link href="/">
                    <Text letterSpacing={3}>Bridge Quote</Text>
                  </Link>
                </Button>
                <Button
                  borderRadius="2xl"
                  w="full"
                  variant="outlne"
                  color="#EEEEEE"
                >
                  <Link href="/">
                    <Text letterSpacing={3}>Home</Text>
                  </Link>
                </Button>
                <Button
                  borderRadius="2xl"
                  w="full"
                  variant="outlne"
                  color="#EEEEEE"
                >
                  <Link href="/">
                    <Text letterSpacing={3}>Home</Text>
                  </Link>
                </Button>
              </HStack>
            </Flex>
            <Spacer />
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <Button
                  colorScheme="#EEEEEE"
                  variant="solid"
                  w="4xs"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{ base: "md", md: "lg" }}
                  cursor="pointer"
                  color="#EEEEEE"
                >
                  Sign in
                </Button>
                <Button
                  color="blue.300"
                  w="4xs"
                  bg={ButtonColorMode1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{ base: "md", md: "lg" }}
                  cursor="pointer"
                  shadow="xl"
                >
                  Connect Wallet
                </Button>
              </HStack>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
}

export default Navbar;
