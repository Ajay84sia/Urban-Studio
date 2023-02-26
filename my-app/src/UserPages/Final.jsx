import { Box, Button, Center, Image } from "@chakra-ui/react";

import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./HomePage/Footer";
import NewNavbar from "./HomePage/NewNavbar";

const Final = () => {
  return (
    <div>
      <NewNavbar />
      <Box py={16} bg="white">
        <Center>
          <Image
            src="https://buy-digital.netlify.app/Images/order/Checkmark2.gif"
            alt="checkmark"
            width="200px"
          />
        </Center>
        <Center>
          <Image
            src="https://buy-digital.netlify.app/Images/order/ordergifimage.gif"
            alt="ordergif"
          />
        </Center>
        <Center>
          <Button
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
          >
            <NavLink to="/">Go Back To Home</NavLink>
          </Button>
        </Center>
      </Box>
      <Footer />
    </div>
  );
};

export default Final;
