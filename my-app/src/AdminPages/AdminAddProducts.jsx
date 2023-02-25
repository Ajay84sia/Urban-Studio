import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const initial = {
  title: "",
  image: "",
  brand: "",
  endpoint: "",
  price: 0,
  originalprice: 0,
};

const AdminAddProducts = () => {
  const [formData, setFormData] = useState(initial);
  const [endpoint, setEndPoint] = useState("mens");
  const toast = useToast();

  const handlepostData = (
    data = {
      title: "",
      image: "",
      brand: "",
      endpoint: endpoint,
      price: 0,
      originalprice: 0,
    }
  ) => {
    // axios.post(url, config)
    axios({
      method: "post",
      url: `https://newjsonserver.onrender.com/${endpoint}`,
      data: data,
    });
    setFormData(initial)
    toast({
      title: `Product added in the Data`,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    formData.endpoint = endpoint;

    const val = type === "number" ? Number(value) : value;

    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlepostData(formData);
    console.log(formData);
  };

  const { title, image, brand, price, originalprice } = formData;
  return (
    <div>
      <Heading textAlign="center">Add Products</Heading>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Product Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              placeholder="Enter Product Title here"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input
              type="text"
              name="image"
              value={image}
              onChange={handleChange}
              placeholder="Enter Product URL here"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Brand Name</FormLabel>
            <Input
              type="text"
              name="brand"
              value={brand}
              onChange={handleChange}
              placeholder="Enter Product Brand Name here"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Select Product Category</FormLabel>
            <Select
              placeholder="Select Product Category"
              name="endpoint"
              value={endpoint}
              onChange={(e) => setEndPoint(e.target.value)}
            >
              <option value="mens">Mens Products</option>
              <option value="womens">Womens Products</option>
              <option value="kids">Kids Products</option>
              <option value="indie">Indie Products</option>
              <option value="homekitchen">Home & Kitchen Products</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Product Original Price</FormLabel>
            <Input
              type="number"
              name="originalprice"
              value={originalprice}
              onChange={handleChange}
              placeholder="Enter Product Original Price here"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Product Offer Price</FormLabel>
            <Input
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              placeholder="Enter Product Offer Price here"
            />
          </FormControl>
          <Stack spacing={10}>
            <Button
              bg={"blue.400"}
              color={"white"}
              onClick={handleSubmit}
              _hover={{
                bg: "blue.500",
              }}
            >
              Add Product
            </Button>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default AdminAddProducts;
