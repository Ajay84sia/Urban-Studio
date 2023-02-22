import React from "react";
import { Route, Routes } from "react-router-dom";
import Mens from "../UserPages/Mens";
import Register from "../UserPages/Register";
import Login from "../UserPages/Login";
import Womens from "../UserPages/Womens";
import Indie from "../UserPages/Indie";
import Kids from "../UserPages/Kids";
import HomeAndKitchen from "../UserPages/HomeAndKitchen";
import Home from "../UserPages/HomePage/Home";
import NotFound from "../UserPages/NotFound";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element={<Mens />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/indie" element={<Indie />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/homekitchen" element={<HomeAndKitchen />}></Route>
        <Route path="/women" element={<Womens />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
