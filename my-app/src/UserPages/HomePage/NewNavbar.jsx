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
  useColorMode,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  Hide,
  useToast,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import LightModeLogo from "./Images/LightModeLogo.png";
import DarkModeLogo from "./Images/DarkModeLogo.png";
import { FaShoppingBag } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

export default function NewNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuth, logout } = useContext(AuthContext);
  const toast = useToast();
  return (
    <Box style={{ position: "fixed", width: "100%", zIndex: "5" }}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <NavLink to="/">
            <Image
              src={colorMode === "light" ? LightModeLogo : DarkModeLogo}
              alt="logo"
              width="180px"
              _hover={{ transition: "3s", transform: "scale(1.05,1.05)" }}
            />
          </NavLink>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {isAuth === true ? (
            <NavLink to="/">
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"teal.400"}
                onClick={() => {
                  logout();
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
          ) : (
            <>
              <Hide below="md">
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/login"}
                >
                  Sign In
                </Button>
              </Hide>
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"teal.400"}
                href={"/register"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                Sign Up
              </Button>
            </>
          )}
          {/* <Hide below="md">
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              to={"/login"}
            >
              Sign In
            </Button>
          </Hide>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"teal.400"}
            to={"/register"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button> */}
          <Hide below="lg">
            <NavLink to="/cart">
              <Button bg={useColorModeValue("white")}>
                <FaShoppingBag />
              </Button>
            </NavLink>
          </Hide>
          <Button onClick={toggleColorMode} bg={useColorModeValue("white")}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={5} marginTop="25px" marginLeft="100px">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.to ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, to, subLabel }) => {
  return (
    <Link
      to={to}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, to }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={to ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.to}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "MEN",
    to: "/mens",
    children: [
      {
        label: "Western Wear",
        subLabel:
          "Jackets / Coats / Jeans / Shirts / Sweatshirts / Hoodies / Track Pants / Trousers / Pants / T-Shirts",
        to: "/mens",
      },
      {
        label: "Foot Wear",
        subLabel:
          "Casual / Shoes / Flip-Flops / Slippers / Formal Shoes / Sandals / Sneakers / Sports Shoes",
        to: "/mens",
      },
    ],
  },
  {
    label: "WOMEN",
    to: "/womens",
    children: [
      {
        label: "Fusion Wear",
        subLabel:
          "Dresses / Gowns / Kurtas / Kurtis / Pants / Shorts / Jackets / Shrugs / Shirts / Tops / Tunics",
        to: "/womens",
      },
      {
        label: "Foot Wear",
        subLabel:
          "Casual Shoes / Flat Sandals / Sports Shoes / Slippers / Heeled Sandals / Heeled Shoes / Boots",
        to: "/womens",
      },
    ],
  },
  {
    label: "KIDS",
    to: "/kids",
    children: [
      {
        label: "BOYS",
        subLabel:
          "Denims & Trousers / Joggers & Track Pants / Outerwear / Shirts / Shorts & 3/4ths / T-Shirts",
        to: "/kids",
      },
      {
        label: "GIRLS",
        subLabel:
          "Dresses & Frocks / Jeans & Jeggings / Leggings / Outerwear / Skirts & Shorts / Tops & T-Shirts",
        to: "/kids",
      },
    ],
  },
  {
    label: "INDIE",
    to: "/indie",
    children: [
      {
        label: "WOMENS WEAR",
        subLabel:
          "Sarees / Kurtas / Dresses / Tops & Tunics / Dupattas / Dress Materials / Blouses & Blouse Fabrics / Pants, Skirts & Palazzos",
        to: "/indie",
      },
      {
        label: "MENS WEAR",
        subLabel: "Kurtas / Shirts / Ethnic / Suits / Jacket / Accessories",
        to: "/indie",
      },
    ],
  },
  {
    label: "DECOR",
    to: "/homekitchen",
    children: [
      {
        label: "Kitchen",
        subLabel:
          "Cookware & Cutlery / Bakeware / Kitchen Tools / Kitchen Aprons, Gloves & Towel / Kitchen Organisers",
        to: "/homekitchen",
      },
      {
        label: "Home Decor",
        subLabel:
          "Window Curtains / Door Curtains / Cushions / Pillows / Cushion Covers / Pillow Covers",
        to: "/homekitchen",
      },
      {
        label: "Join Us",
        subLabel: "Register on Urban Studio",
        to: "/register",
      },
    ],
  },
];
