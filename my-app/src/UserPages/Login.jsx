import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {  useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import Footer from "./HomePage/Footer";
import NewNavbar from "./HomePage/NewNavbar";


export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const {login, isAuth} = useContext(AuthContext)
  const color1 = useColorModeValue("gray.50", "gray.800")
  const color2 = useColorModeValue("white", "gray.700")


  const handlepostData = (data) => {
    fetch("https://reqres.in/api/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.token);
        login(data.token)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if(isAuth===true){
    return <Navigate to='/'/>
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlepostData(formData);
  };

  const { email, password } = formData;
  return (
    <>
      <NewNavbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        paddingTop="25px"
        bg={color1}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to grab the amazing deals 🛍️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={color2}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  onClick={handleSubmit}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
