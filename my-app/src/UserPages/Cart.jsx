import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./HomePage/Footer";
import NewNavbar from "./HomePage/NewNavbar";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const color = useColorModeValue("white");
  const color1 = useColorModeValue("#d1b080", "yellow");
  const color2 = useColorModeValue("gray.900", "gray.50");

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`https://serverjson-xw6d.onrender.com/cart`)
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

  useEffect(() => {
    fetchData();
  }, []);

  if (loading === true) {
    return (
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
    );
  }
  if (error === true) {
    return (
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
    );
  }
  return (
    <div>
      <NewNavbar />

      <Heading py="80px" textAlign={"center"}>
        Shopping Bag
      </Heading>
      {data.length === 0 ? (
        <Center>
          <Image
            src="https://www.eyecatchers.in/shop-online/images/cart-empty.jpg"
            alt="emptyCart"
            marginTop="-40px"
            marginBottom='50px'
          />
        </Center>
      ) : (
        <Box>
          <Grid>
            {data?.map((el, i) => (
              <GridItem key={el.id} padding='10px' border='1px solid grey' borderRadius='10px' width='80%' margin='auto' marginBottom='10px'>
                <Flex justifyContent="space-evenly">
                  <Image
                    src={el.image}
                    alt={el.tittle}
                    width="80px"
                    height="100px"
                    borderRadius="10px"
                  />
                  <Box width="260px">
                    <Text color={color1}>{el.brand}</Text>
                    <Text>{el.title}</Text>
                    <Text color={color2} fontWeight="bold">
                      ₹ {el.price}
                    </Text>
                  </Box>
                  <Box>
                    <Text marginBottom='5px'>Quantity</Text>
                    <Select placeholder="1">
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Select>
                  </Box>
                  <Button>
                    <DeleteIcon bg={color} />
                  </Button>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Box>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
