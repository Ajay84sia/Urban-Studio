import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import AdminAllProducts from "./AdminAllProducts";
import AdminFooter from "./AdminFooter";
import AdminNavbar from "./AdminNavbar";
import AdminRemoveProducts from "./AdminRemoveProducts";

const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <Box py={20} px={5}>
        <Tabs orientation='vertical' variant='solid-rounded'>
          <TabList  width='25%' boxShadow='md' py={5} px={4} borderRadius='10px'>
            <Tab height='50px'>All Products</Tab>
            <Tab height='50px'>Add Products</Tab>
            <Tab height='50px'>Remove Products</Tab>
            <Tab height='50px'>Change Product Details</Tab>
            <Tab height='50px'>Quantity Management</Tab>
            <Tab height='50px'>Order Management</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <AdminAllProducts/>
            </TabPanel>
            <TabPanel>
              <p>Add Products</p>
            </TabPanel>
            <TabPanel>
              <AdminRemoveProducts/>
            </TabPanel>
            <TabPanel>
              <p>Change Details</p>
            </TabPanel>
            <TabPanel>
              <p>Manage Quantity</p>
            </TabPanel>
            <TabPanel>
              <p>Manage Order</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <AdminFooter />
    </div>
  );
};

export default AdminDashboard;
