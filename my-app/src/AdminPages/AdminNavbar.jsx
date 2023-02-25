import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  useToast,
  Center,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink, useParams } from "react-router-dom";
import LightModeLogo from "./Images/LightModeLogo.png";
import DarkModeLogo from "./Images/DarkModeLogo.png";
import { useContext } from "react";
import { AdminAuthContext } from "./AdminAuthContext";

export default function AdminNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const params = useParams();
  const toast = useToast();
  const { adminlogout, adminAuth } = useContext(AdminAuthContext);

  console.log(params);

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        px={4}
        position="fixed"
        width="100%"
        zIndex={3}
        boxShadow="md"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <NavLink to="/">
              <Image
                src={colorMode === "light" ? LightModeLogo : DarkModeLogo}
                alt="logo"
                width="180px"
                _hover={{ transition: "3s", transform: "scale(1.05,1.05)" }}
              />
            </NavLink>
          </Box>
          {adminAuth ? (
            <Center>
              <Heading>Admin Dashboard</Heading>
            </Center>
          ) : null}

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {adminAuth ? (
                <NavLink to="/">
                  <Button
                    as={"a"}
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"teal.400"}
                    onClick={() => {
                      adminlogout();
                      toast({
                        title: `Sign Out Successful`,
                        status: "success",
                        duration: 1000,
                        isClosable: true,
                      });
                    }}
                    href={"/"}
                    _hover={{
                      bg: "pink.300",
                    }}
                  >
                    Sign Out
                  </Button>
                </NavLink>
              ) : null}
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
