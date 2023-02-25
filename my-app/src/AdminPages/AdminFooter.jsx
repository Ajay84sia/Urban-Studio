import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Center,
} from "@chakra-ui/react";
// import { ReactNode } from 'react';
import Forfooter from "./Images/Forfooter.png";
import FooterEnd from "./Images/FooterEnd.png";
import { NavLink } from "react-router-dom";


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function AdminFooter() {
  return (
    <Box
      bg={useColorModeValue("gray.600", "gray.900")}
      color={useColorModeValue("gray.200", "gray.200")}
    >
      <Image
        src="https://assets.ajio.com/cms/AJIO/WEB/13102020-D-unisex-ajiocares-strip.jpg"
        alt="above footer2"
        width="100vw"
      />
      <Image src={Forfooter} alt="above footer1" width="100vw" />
      <Center>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Urban Studio</ListHeader>
              <NavLink to={"#"}>Who We Are</NavLink>
              <NavLink to={"#"}>Join Our Team</NavLink>
              <NavLink to={"#"}>Terms & Conditions</NavLink>
              <NavLink to={"#"}>Fees & Payments</NavLink>
              <NavLink to={"#"}>Returns & Refunds</NavLink>
              <NavLink to={"/"}>HomePage</NavLink>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Help</ListHeader>
              <NavLink to={"#"}>Track Your Order</NavLink>
              <NavLink to={"#"}>FAQs</NavLink>
              <NavLink to={"#"}>Returns</NavLink>
              <NavLink to={"#"}>Cancellations</NavLink>
              <NavLink to={"#"}>Payments</NavLink>
              <NavLink to={"#"}>Customer Care</NavLink>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Shop by</ListHeader>
              <NavLink to={"/mens"}>Men</NavLink>
              <NavLink to={"/womens"}>Women</NavLink>
              <NavLink to={"/kids"}>Kids</NavLink>
              <NavLink to={"/indie"}>Indie</NavLink>
              <NavLink to={"/homekitchen"}>Home Decor</NavLink>
              <NavLink to={"/"}>Stores</NavLink>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow Us</ListHeader>
              <NavLink to={"#"}>Facebook</NavLink>
              <NavLink to={"#"}>Instagram</NavLink>
              <NavLink to={"#"}>Twitter</NavLink>
              <NavLink to={"#"}>Pinterest</NavLink>
              <NavLink to={"#"}>NavLinkedIn</NavLink>
            </Stack>
          </SimpleGrid>
        </Container>
      </Center>
      <Box py={10}>
        <Image
          marginTop="-30px"
          src={FooterEnd}
          alt="above footer1"
          width="100vw"
          marginBottom="-40px"
        />
      </Box>
    </Box>
  );
}
