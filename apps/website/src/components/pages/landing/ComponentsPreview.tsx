import React from "react";
import {
  Flex,
  Box,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { DummyTable } from "./dummy/DummyTable";
import DummyTabs from "./dummy/DummyTabs";
import { Search } from "@root/components/forms/Search";
import DummyBreadcrumbs from "./dummy/DummyBreadcrumbs";
import DummyForm from "./dummy/DummyForm";

const BouncingDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const bounce = {
  hidden: {
    y: 10,
  },
  visible: {
    y: 0,
  },
};

const bounceTransition = {
  duration: 1.2,
  ease: "easeOut",
  repeat: Infinity,
  repeatType: "reverse",
};

export const ComponentsPreview = () => {
  return (
    <Flex w="100%" position="relative" h={["840px", "500px"]} overflow="hidden">
      <Box position="absolute" top={0} left={["0", "22%"]}>
        <BouncingDiv
          initial={"hidden"}
          animate={"visible"}
          variants={bounce}
          // @ts-ignore
          transition={{
            delay: 0.9,
            ...bounceTransition,
          }}
        >
          <DummyBreadcrumbs />
        </BouncingDiv>
      </Box>

      <Box position="absolute" top="8%" left="25%">
        <BouncingDiv
          initial={"hidden"}
          animate={"visible"}
          variants={bounce}
          // @ts-ignore
          transition={{
            delay: 1.4,
            ...bounceTransition,
          }}
        >
          <Search />
        </BouncingDiv>
      </Box>

      <Box position="absolute" top={["15%", "20%"]} right={["0", "27%"]}>
        <BouncingDiv
          initial={"hidden"}
          animate={"visible"}
          variants={bounce}
          // @ts-ignore
          transition={{
            delay: 0.6,
            ...bounceTransition,
          }}
        >
          <DummyTabs />
        </BouncingDiv>
      </Box>

      <Box position="absolute" bottom={["1%", "15%"]} right={["", "30%"]}>
        <BouncingDiv
          initial={"hidden"}
          animate={"visible"}
          variants={bounce}
          // @ts-ignore
          transition={{
            delay: 0.4,
            ...bounceTransition,
          }}
        >
          <DummyTable />
        </BouncingDiv>
      </Box>

      <Box position="absolute" bottom={["15%", "0"]} left={["", "17%"]}>
        <BouncingDiv
          initial={"hidden"}
          animate={"visible"}
          variants={bounce}
          // @ts-ignore
          transition={{
            delay: 2,
            ...bounceTransition,
          }}
        >
          <DummyForm />
        </BouncingDiv>
      </Box>
    </Flex>
  );
};
