import React from "react";
import { Box, Flex, Heading, Hide, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ProductCard = (data) => {
  console.log(data.data);
  return (
    <NavLink to={`/${data?.data?.endpoint}/${data?.data?.id}`}>
    <Box height="auto" width={['50vw','30vw',"30vw", "20vw","20vw"]} paddingTop="20px" paddingBottom="20px">
      <Box border="2px solid white" boxShadow='2xl' align="center" padding="10px"  borderRadius='15px' cursor='pointer' _hover={{transition:'3s' , transform:'scale(1.05,1.05)'}}>
        <Image
          src={data?.data?.image}
          alt={data?.data?.title}
          width="75%"
          height="200px"
          borderRadius="15px"
        />
        <Text color="#CBBBA3" fontSize='12px' fontWeight='bold'>{data?.data?.brand}</Text>
        <Heading
          color="grey"
          as="h6"
          size="xs"
          white-space="nowrap"
          overflow="hidden"
          text-overflow="ellipsis"
          height="20px"
        >
          {data?.data?.title}
        </Heading>
        <Flex justifyContent='space-evenly' width='78%'>
        <span>
          <Heading as="h6" size="xs">
            ₹{data?.data?.price}
          </Heading>
        </span>
        <Hide below="lg">
        <span>
            <Heading  as="h6" fontSize="13px"  color='gray.600' textDecoration='line-through'> ₹{data?.data?.originalprice}</Heading>
        </span>
        <span>
            <Heading  as="h6" fontSize="12px" color="#CBBBA3"> ₹{data?.data?.discount}</Heading>
        </span>
        </Hide>
        </Flex>
        <Heading  as="h6" fontSize="10px" marginTop='5px' color="#83D18C">Offer price ₹{data?.data?.offerprice}</Heading>
      </Box>
    </Box>
    </NavLink>
  );
};

export default ProductCard;
