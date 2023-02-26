import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "./AdminAuthContext";

const initial = {
  title: "",
  brand: "",
  endpoint: "",
  price: "",
  originalprice: "",
};

const AdminChangeDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { page, handlePageChange } = useContext(AdminAuthContext);
  const [endpoint, setEndPoint] = useState("mens");
  const [editID, setEditId] = useState(null);
  const [formData, setFormData] = useState(initial);
  const toast = useToast();
  const { title, brand, price, originalprice } = formData;

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    formData.endpoint = endpoint;

    const val = type === "number" ? Number(value) : value;

    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlepostData(formData, editID, endpoint);
    // console.log(formData, editID);
  };

  const handlepostData = (
    data = {
      title: "",
      brand: "",
      price: 0,
      originalprice: 0,
    },
    editID,
    endpoint
  ) => {
    fetch(`https://newjsonserver.onrender.com/${endpoint}/${editID}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: data.title,
        brand: data.brand,
        price: data.price,
        originalprice: data.originalprice,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => fetchData(page, endpoint))
      .then(() => setFormData(initial))
      .then(() => setEditId(null));
    toast({
      title: `Product added in the Data`,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const fetchData = (page, endpoint) => {
    setLoading(true);
    axios
      .get(`https://newjsonserver.onrender.com/${endpoint}`, {
        params: {
          _page: page,
          _limit: 10,
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
    fetchData(page, endpoint);
  }, [page, endpoint]);

  if (loading === true) {
    return (
      <>
        <Image
          src="https://i.stack.imgur.com/hzk6C.gif"
          alt="loading"
          margin="auto"
          paddingTop="90px"
          marginBottom="360px"
        />
      </>
    );
  }
  if (error === true) {
    return (
      <>
        <Image
          src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
          alt="error"
          margin="auto"
          paddingTop="30px"
        />
      </>
    );
  }

  return (
    <div>
      <Heading textAlign="center">Change Product Details</Heading>
      <br />
      <Center>
        <Select
          placeholder="Select Product Category"
          onChange={(e) => setEndPoint(e.target.value)}
        >
          <option value="mens">Mens Products</option>
          <option value="womens">Womens Products</option>
          <option value="kids">Kids Products</option>
          <option value="indie">Indie Products</option>
          <option value="homekitchen">Home & Kitchen Products</option>
        </Select>
      </Center>
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th>Product Image</Th>
              <Th>Product Title</Th>
              <Th>Product Brand</Th>
              <Th>Offer Price</Th>
              <Th>Original Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((el, i) => (
              <Tr key={i} textAlign="center">
                <Td>{el.id}.</Td>
                <Td>
                  {" "}
                  <Image src={el.image} alt={el.title} width="50px" />
                </Td>
                {editID === el.id ? (
                  <Td>
                    <Input
                      type="text"
                      name="title"
                      value={title}
                      onChange={handleChange}
                      placeholder={el.title}
                      border="1px solid black"
                    />
                  </Td>
                ) : (
                  <Td>{el.title}</Td>
                )}
                {editID === el.id ? (
                  <Td>
                    <Input
                      type="text"
                      name="brand"
                      value={brand}
                      onChange={handleChange}
                      placeholder={el.brand}
                      border="1px solid black"
                    />
                  </Td>
                ) : (
                  <Td>{el.brand}</Td>
                )}
                {editID === el.id ? (
                  <Td>
                    <Input
                      type="number"
                      name="price"
                      placeholder={el.price}
                      value={price}
                      onChange={handleChange}
                      border="1px solid black"
                    />
                  </Td>
                ) : (
                  <Td>{el.price}</Td>
                )}
                {editID === el.id ? (
                  <Td>
                    <Input
                      type="number"
                      name="originalprice"
                      value={originalprice}
                      onChange={handleChange}
                      placeholder={el.originalprice}
                      border="1px solid black"
                    />
                  </Td>
                ) : (
                  <Td>{el.originalprice}</Td>
                )}
                <Td>
                  <Button
                    colorScheme="teal"
                    variant="link"
                    onClick={() => setEditId(el.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    colorScheme="teal"
                    variant="link"
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box align="center" marginBottom="20px">
        <Button
          mt={8}
          size={"sm"}
          py={"4"}
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
          py={"5"}
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
    </div>
  );
};

export default AdminChangeDetails;
