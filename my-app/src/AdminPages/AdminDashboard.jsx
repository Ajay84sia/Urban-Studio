import { Box, Center, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import AdminAddProducts from "./AdminAddProducts";
import AdminAllProducts from "./AdminAllProducts";
import AdminChangeDetails from "./AdminChangeDetails";
import AdminFooter from "./AdminFooter";
import AdminNavbar from "./AdminNavbar";
import AdminRemoveProducts from "./AdminRemoveProducts";

const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <Box py={20} px={5}>
        <Tabs orientation='vertical' variant='solid-rounded'>
          <TabList  width='20%' boxShadow='md' marginTop="58px" py={5} px={4} borderRadius='10px'>
            <Tab height='50px' fontSize={12}>All Products</Tab>
            <Tab height='50px' fontSize={12}>Add Products</Tab>
            <Tab height='50px' fontSize={12}>Remove Products</Tab>
            <Tab height='50px' fontSize={12}>Change Product Details</Tab>
            <Tab height='50px' fontSize={12}>Quantity Management</Tab>
            <Tab height='50px' fontSize={12}>Order Management</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <AdminAllProducts/>
            </TabPanel>
            <TabPanel>
              <AdminAddProducts/>
            </TabPanel>
            <TabPanel>
              <AdminRemoveProducts/>
            </TabPanel>
            <TabPanel>
              <AdminChangeDetails/>
            </TabPanel>
            <TabPanel>
              <Center>
                <Image src='https://horticulturedept.ap.gov.in/Horticulture/New_Home/img/construction.gif' alt='under Construction'/>
              </Center>
            </TabPanel>
            <TabPanel>
            <Center>
                <Image src='https://horticulturedept.ap.gov.in/Horticulture/New_Home/img/construction.gif' alt='under Construction'/>
              </Center>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <AdminFooter />
    </div>
  );
};

export default AdminDashboard;
