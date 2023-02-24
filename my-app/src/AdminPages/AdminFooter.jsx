import {
  Box,
  Container,
  Link,
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
        className="scaleImg"
        src="https://assets.ajio.com/cms/AJIO/WEB/13102020-D-unisex-ajiocares-strip.jpg"
        alt="above footer2"
        width="100vw"
      />
      <Image
        className="scaleImg"
        src={Forfooter}
        alt="above footer1"
        width="100vw"
      />
      <Center>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Urban Studio</ListHeader>
              <Link href={"#"}>Who We Are</Link>
              <Link href={"#"}>Join Our Team</Link>
              <Link href={"#"}>Terms & Conditions</Link>
              <Link href={"#"}>Fees & Payments</Link>
              <Link href={"#"}>Returns & Refunds</Link>
              <Link href={"/admin"}>Admin</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Help</ListHeader>
              <Link href={"#"}>Track Your Order</Link>
              <Link href={"#"}>FAQs</Link>
              <Link href={"#"}>Returns</Link>
              <Link href={"#"}>Cancellations</Link>
              <Link href={"#"}>Payments</Link>
              <Link href={"#"}>Customer Care</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Shop by</ListHeader>
              <Link href={"/mens"}>Men</Link>
              <Link href={"/womens"}>Women</Link>
              <Link href={"/kids"}>Kids</Link>
              <Link href={"/indie"}>Indie</Link>
              <Link href={"/homekitchen"}>Home Decor</Link>
              <Link href={"/"}>Stores</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}>Instagram</Link>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>Pinterest</Link>
              <Link href={"#"}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Center>
      <Box py={10}>
        <Image
          className="scaleImg"
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
