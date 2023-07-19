import * as React from 'react'
import {
  Flex,
  Grid,
  GridItem,
  HTMLChakraProps,
  ThemingProps,
  omitThemingProps,
} from '@chakra-ui/react'
import { AppPageProvider, useAppPage } from './app-page-context'
import { MotionBox } from "../motion-box";
import {
  pageTransition,
  pageTransitionReverse,
  slideInLeft,
  slideInRight,
} from "@yogo-ui/theme";

export interface AppPageProps
  extends HTMLChakraProps<'div'>,
    ThemingProps<'SuiAppShell'> {
  /**
   * The top header navigation
   */
  navbar?: React.ReactNode
  /**
   * Main sidebar, positioned on the left
   */
  leftSidebar?: React.ReactElement
  /**
   * Secondary sidebar, positioned on the right
   */
  rightSidebar?: React.ReactNode
  /**
   * The footer
   */
  footer?: React.ReactNode
  /**
   * The main content
   */
  children: React.ReactNode
}

/**
 * The App Shell defines the main structure of your app.
 *
 * @see Docs https://appblocks.xyz/docs/components/layout/app-page
 */
export const AppPage: React.FC<AppPageProps> = (props: AppPageProps) => {
  const { navbar, leftSidebar, rightSidebar, footer, children, ...containerProps } =
    omitThemingProps(props)

  const context = useAppPage({})
  const {isMobile, isLeftSidebarOpen, isRightSidebarOpen} = context

  const sidebarGridCssRules = () => {
    // define the css grid rules for the container if the sidebars are visible
    return `${isLeftSidebarOpen ? "210px" : ""} 1fr ${
      isRightSidebarOpen ? "280px" : ""
    }`;
  }

  return (
    <AppPageProvider value={context}>
      <Grid templateColumns={{ base: "1", md: sidebarGridCssRules() }}>
        {!isMobile && isLeftSidebarOpen && (
          <GridItem>
            <MotionBox
              transition={slideInLeft}
              duration={0.25}
              ease="linear"
              position="sticky"
              top={0}
              left={0}
              zIndex="sticky"
            >
              {leftSidebar}
            </MotionBox>
          </GridItem>
        )}

        <GridItem
          minHeight="100vh"
          w="100%"
          // overflow="visible"
          overflowX={["hidden", "visible"]}
        >
          <MotionBox
            transition={pageTransitionReverse}
            duration={0.45}
            ease="easeOut"
            position="sticky"
            top={0}
            left={0}
            zIndex="sticky"
          >
            {navbar}
          </MotionBox>
          <MotionBox transition={pageTransition}>
            <Flex p={"2rem"} w="100%">
              {children}
            </Flex>
          </MotionBox>
        </GridItem>

        {!isMobile && isRightSidebarOpen && (
          <GridItem>
            <MotionBox
              transition={slideInRight}
              duration={0.25}
              ease="linear"
              position="sticky"
              top={0}
              left={0}
              zIndex="sticky"
            >
              {rightSidebar}
            </MotionBox>
          </GridItem>
        )}
      </Grid>
    </AppPageProvider>
  );
}

AppPage.displayName = 'AppPage'
