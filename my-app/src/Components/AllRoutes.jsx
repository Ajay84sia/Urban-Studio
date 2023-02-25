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
import SingleProduct from "../UserPages/SingleProduct";
import AdminDashboard from "../AdminPages/AdminDashboard";
import Cart from "../UserPages/Cart";
import Payment from "../UserPages/Payment";
import Final from "../UserPages/Final";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/mens"
          element={
            <PrivateRoute>
              <Mens />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/indie"
          element={
            <PrivateRoute>
              <Indie />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/kids"
          element={
            <PrivateRoute>
              <Kids />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/homekitchen"
          element={
            <PrivateRoute>
              <HomeAndKitchen />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womens"
          element={
            <PrivateRoute>
              <Womens />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/final" element={<Final />}></Route>
        <Route path="/:endpoint/:id" element={<SingleProduct />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
