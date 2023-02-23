import { Box, Button, Center, Image, SimpleGrid,useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Footer from "./HomePage/Footer";
import NewNavbar from "./HomePage/NewNavbar";
import ProductCard from "./ProductCard";

const Kids = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const color2 = useColorModeValue("gray.900", "gray.50");
  const color3 = useColorModeValue("white", "gray.900");
  const { page, handlePageChange } = useContext(AuthContext);

  const fetchData = (page) => {
    setLoading(true);
    axios
      .get(`https://prickly-gold-robe.cyclic.app/kids`,{
        params : {
          _page:page,
          _limit: 20,
        }
      })
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
    fetchData(page);
  }, [page]);

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
      <Center>
        <SimpleGrid columns={[1, 2, 3, 4, 4, 4]} spacing={3} paddingTop="70px">
          {data?.map((el, i) => (
            <ProductCard key={i} data={el} />
          ))}
        </SimpleGrid>
      </Center>
      <Box align="center" marginBottom="20px">
        <Button
          mt={8}
          size={"sm"}
          py={"4"}
          bg={color2}
          color={color3}
          textTransform={"uppercase"}
          onClick={() => handlePageChange(-1)}
          isDisabled={page === 1}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
        >
          PREV
        </Button>
        <Button
          mt={8}
          size={"sm"}
          py={"4"}
          bg={color2}
          color={color3}
          textTransform={"uppercase"}
          isDisabled
          _hover={{
            boxShadow: "lg",
          }}
        >
          {page}
        </Button>
        <Button
          mt={8}
          size={"sm"}
          py={"4"}
          bg={color2}
          color={color3}
          textTransform={"uppercase"}
          onClick={() => handlePageChange(1)}
          isDisabled={page === 5}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
        >
          NEXT
        </Button>
      </Box>

      <Footer />
    </div>
  );
};

export default Kids;
