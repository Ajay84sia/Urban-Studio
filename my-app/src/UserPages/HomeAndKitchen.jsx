import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Footer from "./HomePage/Footer";
import NewNavbar from "./HomePage/NewNavbar";
import ProductCard from "./ProductCard";

const HomeAndKitchen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const color2 = useColorModeValue("gray.900", "gray.50");
  const color3 = useColorModeValue("white", "gray.900");
  const { page, handlePageChange } = useContext(AuthContext);
  const [brand, setBrand] = useState("");
  const sort = "price";
  const [order, setOrder] = useState("");

  const fetchData = (page, sort, order, brand) => {
    setLoading(true);
    axios
      .get(`https://prickly-gold-robe.cyclic.app/homekitchen`, {
        params: {
          q: brand,
          // title:name,
          _sort: sort,
          _order: order,
          _page: page,
          _limit: 20,
        },
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
    fetchData(page, sort, order, brand);
  }, [page, sort, order, brand]);

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
        <Grid templateColumns="repeat(2, 1fr)" gap={6} paddingTop="85px">
          {/* <GridItem>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<Search2Icon color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Enter Product Name here"
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </GridItem> */}
          <GridItem>
            <Select
              placeholder="Filter By Brand"
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="Home Centre">HOME CENTRE</option>
              <option value="Homefab India">HOMEFAB INDIA</option>
              <option value="HOMEZ SPARROW">HOMEZ SPARROW</option>
              <option value="Market 99">Market 99</option>
              <option value="STELLAR HOME">STELLAR HOME</option>
            </Select>
          </GridItem>
          <GridItem>
            <Select
              placeholder={`Sort By Price : ${order==="asc"? "📈": order==="desc"? "📉" :""}`}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="asc">Price Low to High</option>
              <option value="desc">Price High to Low</option>
            </Select>
          </GridItem>
        </Grid>
      </Center>
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
          isDisabled={page === 3}
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

export default HomeAndKitchen;
