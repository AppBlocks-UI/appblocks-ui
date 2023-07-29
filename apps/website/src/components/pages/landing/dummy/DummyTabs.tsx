import React from 'react'
import {
    Flex,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
  } from "@chakra-ui/react";

const DummyTabs = () => {
  return (
    <Flex w={["290px", "400px"]}>
        <Tabs w="100%" variant="base" colorScheme="blackAlpha" >
            <TabList overflowX="scroll" >
              <Tab>Profile</Tab>
              <Tab>Projects</Tab>
              <Tab>Settings</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                First content
              </TabPanel>

              <TabPanel>
                Second content
              </TabPanel>

              <TabPanel>
                Settings content
              </TabPanel>

            </TabPanels>

            
          </Tabs>
    </Flex>
  )
}

export default DummyTabs