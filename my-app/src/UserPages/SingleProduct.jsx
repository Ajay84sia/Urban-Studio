import React, { useEffect, useState } from "react";
import Footer from "./HomePage/Footer";
import NewNavbar from "./HomePage/NewNavbar";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import axios from "axios";
import { useToast } from "@chakra-ui/react";


export default function SingleProduct() {
  const { endpoint, id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const color1 = useColorModeValue("#d1b080", "yellow");
  const color2 = useColorModeValue("gray.900", "gray.50");
  const color3 = useColorModeValue("white", "gray.900");
  // const { handleCart } = useContext(AuthContext);
  const toast = useToast();
  const fetchData = (endpoint, id) => {
    setLoading(true);
    axios
      .get(`https://newjsonserver.onrender.com/${endpoint}/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setError(true);
        setLoading(false);
      });
  };

  const AddCart = (
    data = { id: "", title: "", image: "", brand: "", price: "", quantity: 1 }
  ) => {
    return axios({
      method: "post",
      url: "https://newjsonserver.onrender.com/cart",
      data: data,
    });
  };

  useEffect(() => {
    fetchData(endpoint, id);
  }, [endpoint, id]);

  return loading ? (
    <>
      <NewNavbar />
      <Image
        src="https://i.stack.imgur.com/hzk6C.gif"
        alt="loading"
        margin="auto"
        paddingTop="90px"
        marginBottom="360px"
      />
      <Footer />
    </>
  ) : error ? (
    <>
      <NewNavbar />
      <Image
        src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
        alt="error"
        margin="auto"
        paddingTop="30px"
      />
      <Footer />
    </>
  ) : (
    <>
      <NewNavbar />
      <Container maxW={"6xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={data?.image}
              // fit={"cover"}
              align={"center"}
              w={"90%"}
              h={{ base: "100%", sm: "400px", lg: "450px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={500}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {data?.title}
              </Heading>
              <Text
                color={color1}
                fontWeight={600}
                fontSize={"3xl"}
                textAlign="center"
                marginTop="25px"
              >
                {data?.brand}
              </Text>
              <Text
                color={color2}
                fontWeight={600}
                fontSize={"2xl"}
                textAlign="center"
              >
                GRAB AT - ₹ {data?.price} /-
              </Text>
              <Text
                color={color1}
                fontWeight={600}
                fontSize={"2xl"}
                textAlign="center"
              >
                MRP{" "}
                <span style={{ textDecoration: "line-through" }}>
                  {" "}
                  ₹ {data?.originalprice}
                </span>
                {data?.discount}
              </Text>
            </Box>
            <Center>
              <Button
                w={"full"}
                mt={8}
                width="350px"
                size={"lg"}
                py={"7"}
                bg={color2}
                color={color3}
                textTransform={"uppercase"}
                onClick={() => {
                  toast({
                    title: "Product Added in the Cart",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                  });

                  let obj = {
                    title: data.title,
                    image: data.image,
                    brand: data.brand,
                    price: data.price,
                    originalprice : data.originalprice,
                    quantity: 1,
                  };
                  AddCart(obj);
                }}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                <FaShoppingBag /> &nbsp; ADD TO BAG
              </Button>
            </Center>
            <Center>
              <NavLink to={`/${endpoint}`}>
                <Button
                  size={"md"}
                  width="150px"
                  py={"7"}
                  bg={color2}
                  color={color3}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  Go Back
                </Button>
              </NavLink>
            </Center>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
}
