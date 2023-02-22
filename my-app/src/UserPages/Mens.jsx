import { Center, Image, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./HomePage/Footer";
import NewNavbar from "./HomePage/NewNavbar";
import ProductCard from "./ProductCard";

const Mens = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`https://prickly-gold-robe.cyclic.app/mens`)
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
      <Center>
        <SimpleGrid columns={[1,2,3,4,4,4]} spacing={3} paddingTop="70px">
          {data?.map((el, i) => (
            <ProductCard key={i} data={el} />
          ))}
        </SimpleGrid>
      </Center>

      <Footer />
    </div>
  );
};

export default Mens;
