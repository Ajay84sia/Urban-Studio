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
  useToast,
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
  const toast = useToast();
  const [cartTotal, setCartTotal] = useState(0)
  
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

  const handleQty = (value, id) => {
    toast({
      title: `Quatity has changed to ${value}`,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    fetch(`https://serverjson-xw6d.onrender.com/cart/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        quantity: value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => fetchData());
  };

  const handleCartTotal = () =>{

    const total = data.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    

    setCartTotal(total)
  }

  useEffect(()=>{
    handleCartTotal()
  })

  const handleDeleteItem = (id) => {
    fetch(`https://serverjson-xw6d.onrender.com/cart/${id}`,
    { method: 'DELETE' })
   .then(() => fetchData());
   toast({
    title: `Product removed from the cart`,
    status: "info",
    duration: 1000,
    isClosable: true,
  });
  }

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
            marginBottom="50px"
          />
        </Center>
      ) : (
        <Box>
          <Grid>
            {data?.map((el, i) => (
              <GridItem
                key={el.id}
                padding="10px"
                border="1px solid grey"
                borderRadius="10px"
                width="80%"
                margin="auto"
                marginBottom="10px"
              >
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
                    <Text marginBottom="5px">Quantity Selected : {el.quantity}</Text>
                    <Select
                      placeholder="Update Quantity"
                      onChange={(e) => handleQty(e.target.value, el.id)}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </Select>
                  </Box>
                  <Button onClick={()=>handleDeleteItem(el.id)}>
                    <DeleteIcon bg={color} />
                  </Button>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Box>
      )}

      

      <Box>
        <Flex>
          <Heading>Bag Total : {cartTotal}</Heading>
        </Flex>
      </Box>


      <Footer />
    </div>
  );
};

export default Cart;
