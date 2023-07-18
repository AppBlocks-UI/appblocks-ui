import React, { useContext, ReactNode } from "react";
import { Flex, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
// import { SidebarContext } from "./SidebarContext";
// import { PageMeta } from "./PageMeta";
import Layout from "../layout/Layout";
import { pageTransition, pageTransitionReverse, slideInLeft, slideInRight } from "@/theme/animations";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  navbar: ReactNode,
  leftSidebar: ReactNode,
  rightSidebar: ReactNode,
}

export const AppPage = ({
  title = "Yogo UI Kit by AppBlocks",
  description = "Shave off 100 hours with an AppBlocks UI Kit",
  navbar,
  leftSidebar,
  rightSidebar,
  children,
}: PageProps) => {
  const isMobile = useBreakpointValue(
    {
      base: true,
      sm: true,
      md: false,
      lg: false,
    },
    {
      ssr: true,
    }
  );

  const [sidebarState] = useContext("SidebarContext")

  const sidebarGridCssRules = () => {

    // define the css grid rules for the container if the sidebars are visible
    return `${sidebarState.leftSidebar ? "210px" : ""} 1fr ${
      sidebarState.rightSidebar ? "280px" : ""
    }`;
  }

  return (
    <>
      {/* <PageMeta title={title} description={description} /> */}

      <Grid
        templateColumns={{ base: "1", md: sidebarGridCssRules() }}
      >
        {!isMobile && sidebarState.leftSidebar && (
          <GridItem>
            <Layout
              transition={slideInLeft}
              duration={0.25}
              ease="linear"
              position="sticky"
              top={0}
              left={0}
              zIndex="sticky"
            >
              {leftSidebar}
            </Layout>
          </GridItem>
        )}

        <GridItem
          minHeight="100vh"
          w="100%"
          // overflow="visible"
          overflowX={["hidden", "visible"]}
        >
          <Layout
              transition={pageTransitionReverse}
              duration={0.45}
              ease="easeOut"
              position="sticky"
              top={0}
              left={0}
              zIndex="sticky"
            >
              {navbar}
          <Layout transition={pageTransition}>
            <Flex 
              p={"2rem"} 
              w="100%"
            >
              {children}
            </Flex>
          </Layout>
        </GridItem>

        {!isMobile && sidebarState.rightSidebar && (
          <GridItem>
            <Layout
              transition={slideInRight}
              duration={0.25}
              ease="linear"
              position="sticky"
              top={0}
              left={0}
              zIndex="sticky"
            >
              {rightSidebar}
            </Layout>
          </GridItem>
        )}
      </Grid>
    </>
  );
}