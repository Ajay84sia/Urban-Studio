import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Hide,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
} from "@chakra-ui/react";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import LightModeLogo from "./Images/LightModeLogo.png";
import DarkModeLogo from "./Images/DarkModeLogo.png";
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        px={5}
        boxShadow="md"
        position="fixed"
        width="100%"
        zIndex={3}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <NavLink to="/">
              <Image
                src={colorMode === "light" ? LightModeLogo : DarkModeLogo}
                alt="logo"
                width="180px"
                _hover={{ height: "52px" }}
              />
            </NavLink>
          </Box>

          <Show below="lg">
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Options
              </MenuButton>
              <MenuList>
                <MenuItem>
                  {" "}
                  <NavLink
                    to="/men"
                    style={({ isActive }) => ({
                      color:
                        isActive && colorMode === "light" ? "black" : "gray",
                      color:
                        isActive && colorMode === "dark" ? "white" : "gray",
                      fontWeight: isActive ? "bold" : null,
                    })}
                  >
                    MEN
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <NavLink
                    to="/women"
                    style={({ isActive }) => ({
                      color:
                        isActive && colorMode === "light" ? "black" : "gray",
                      color:
                        isActive && colorMode === "dark" ? "white" : "gray",
                      fontWeight: isActive ? "bold" : null,
                    })}
                  >
                    WOMEN
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <NavLink
                    to="/kids"
                    style={({ isActive }) => ({
                      color:
                        isActive && colorMode === "light" ? "black" : "gray",
                      color:
                        isActive && colorMode === "dark" ? "white" : "gray",
                      fontWeight: isActive ? "bold" : null,
                    })}
                  >
                    KIDS
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <NavLink
                    to="/indie"
                    style={({ isActive }) => ({
                      color:
                        isActive && colorMode === "light" ? "black" : "gray",
                      color:
                        isActive && colorMode === "dark" ? "white" : "gray",
                      fontWeight: isActive ? "bold" : null,
                    })}
                  >
                    INDIE
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <NavLink
                    to="/homekitchen"
                    style={({ isActive }) => ({
                      color:
                        isActive && colorMode === "light" ? "black" : "gray",
                      color:
                        isActive && colorMode === "dark" ? "white" : "gray",
                      fontWeight: isActive ? "bold" : null,
                    })}
                  >
                    DECOR
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <NavLink
                    to="/register"
                    style={({ isActive }) => ({
                      color:
                        isActive && colorMode === "light" ? "black" : "gray",
                      color:
                        isActive && colorMode === "dark" ? "white" : "gray",
                      fontWeight: isActive ? "bold" : null,
                    })}
                  >
                    Join Us
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <NavLink
                    to="/login"
                    style={({ isActive }) => ({
                      color:
                        isActive && colorMode === "light" ? "black" : "gray",
                      color:
                        isActive && colorMode === "dark" ? "white" : "gray",
                      fontWeight: isActive ? "bold" : null,
                    })}
                  >
                    Sign In
                  </NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </Show>

          <Hide below="lg">
            <Box
              display="flex"
              justifyContent="space-between"
              width="35%"
              paddingTop="25px"
            >
              <NavLink
                to="/men"
                style={({ isActive }) => ({
                  color: isActive && colorMode === "light" ? "black" : "gray",
                  color: isActive && colorMode === "dark" ? "white" : "gray",
                  fontWeight: isActive ? "bold" : null,
                })}
              >
                MEN
              </NavLink>
              <NavLink
                to="/women"
                style={({ isActive }) => ({
                  color: isActive && colorMode === "light" ? "black" : "gray",
                  color: isActive && colorMode === "dark" ? "white" : "gray",
                  fontWeight: isActive ? "bold" : null,
                })}
              >
                WOMEN
              </NavLink>
              <NavLink
                to="/kids"
                style={({ isActive }) => ({
                  color: isActive && colorMode === "light" ? "black" : "gray",
                  color: isActive && colorMode === "dark" ? "white" : "gray",
                  fontWeight: isActive ? "bold" : null,
                })}
              >
                KIDS
              </NavLink>
              <NavLink
                to="/indie"
                style={({ isActive }) => ({
                  color: isActive && colorMode === "light" ? "black" : "gray",
                  color: isActive && colorMode === "dark" ? "white" : "gray",
                  fontWeight: isActive ? "bold" : null,
                })}
              >
                INDIE
              </NavLink>
              <NavLink
                to="/homekitchen"
                style={({ isActive }) => ({
                  color: isActive && colorMode === "light" ? "black" : "gray",
                  color: isActive && colorMode === "dark" ? "white" : "gray",
                  fontWeight: isActive ? "bold" : null,
                })}
              >
                DECOR
              </NavLink>
            </Box>
          </Hide>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={15}>
              <Hide below="lg">
                <Box>
                  <Button
                    colorScheme={colorMode === "light" ? "black" : "white"}
                    variant="link"
                  >
                    <NavLink to="/register"> Join US </NavLink>{" "}
                  </Button>{" "}
                  /{" "}
                  <Button
                    colorScheme={colorMode === "light" ? "black" : "white"}
                    variant="link"
                  >
                    <NavLink to="/login"> Sign In </NavLink>{" "}
                  </Button>
                </Box>
              </Hide>

              <Hide below="lg">
                <Tooltip hasArrow label="Your Bag is Empty" bg="gray.400">
                  <Button bg={useColorModeValue("white")} isDisabled>
                    <FaShoppingBag />
                  </Button>
                </Tooltip>
              </Hide>
              {/* <Button
                colorScheme="gray"
                onClick={() => console.log("remove user!")}
                size="sm"
              >
                <Icon as={FiTrash2} fontSize="20" />
              </Button> */}
              <Button onClick={toggleColorMode} bg={useColorModeValue("white")}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
