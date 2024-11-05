import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaBars } from "react-icons/fa";
import {
  Box,
  Flex,
  Button,
  IconButton,
  Icon,
  VStack,
  Link,
} from "@chakra-ui/react";

function Sidebar({
  isOpen,
  setIsOpen,
  isNarrowScreen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNarrowScreen: boolean;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newIsNarrowScreen = width <= 1650;
      if (newIsNarrowScreen) setIsOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);

  const handleNavigation = (path: string): void => {
    navigate(path);
    if (isNarrowScreen) setIsOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="Toggle Sidebar"
        onClick={() => setIsOpen(!isOpen)}
        position="fixed"
        top="1rem"
        left="1rem"
        zIndex="20"
        size="lg"
        color={isOpen ? "gray.100" : "gray.800"}
        _hover={{
          color: isOpen ? "gray.400" : "gray.500",
        }}
      >
        <FaBars />
      </IconButton>

      <Box
        bg="gray.800"
        color="white"
        w="64"
        minH="100vh"
        p="4"
        pos="fixed"
        top="0"
        left="0"
        zIndex="9"
        transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
        transition="transform 0.3s ease-in-out"
      >
        <VStack align="stretch" mt="10">
          <Button
            variant="ghost"
            w="full"
            justifyContent="flex-start"
            onClick={() => handleNavigation("/")}
            color="gray.100"
            _hover={{ color: "gray.400" }}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            w="full"
            justifyContent="flex-start"
            onClick={() => handleNavigation("/skills")}
            color="gray.100"
            _hover={{ color: "gray.400" }}
          >
            Skills
          </Button>
          <Button
            variant="ghost"
            w="full"
            justifyContent="flex-start"
            onClick={() => handleNavigation("/works")}
            color="gray.100"
            _hover={{ color: "gray.400" }}
          >
            Works
          </Button>
        </VStack>
        <Flex position="absolute" bottom="4" left="4">
          <Link
            href="https://github.com/muhi111"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon w={6} h={6} color="gray.400" _hover={{ color: "gray.200" }}>
              <FaGithub />
            </Icon>
          </Link>
        </Flex>
      </Box>
    </>
  );
}

export default Sidebar;
