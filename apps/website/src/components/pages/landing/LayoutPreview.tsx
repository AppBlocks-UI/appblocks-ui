import React, { useRef, useEffect, useState } from "react";
import { VStack, Image, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

const mockup1 = require("@root/assets/mock_signin_1.png");
const mockup2 = require("@root/assets/mock_project_details_2.png");
const mockup3 = require("@root/assets/mock_onboarding_1.png");
const mockup4 = require("@root/assets/mock_project_1.png");
const mockup5 = require("@root/assets/mock_project_details_1.png");
const mockup6 = require("@root/assets/mock_404_1.png");

const CarouselContainer = chakra(motion.div, {
  baseStyle: {
    display: "flex",
    gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
    gridGap: "var(--chakra-space-4)",
    // w: "200%",
  },
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const CarouselChild = chakra(motion.div, {
  baseStyle: {
    flexShrink: 0,
    marginLeft: 9,
  },
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

export const LayoutPreview = () => {
  const containerRef = useRef(null);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  
  const layer_1 = [mockup1, mockup2, mockup3];
  const layer_2 = [mockup4, mockup5, mockup6];

  return (
    <>
      <VStack spacing={6}>
          <CarouselContainer
            initial={{ x: 0 }}
            animate={{ x: -windowSize.innerWidth/2 }}
            //@ts-ignore
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            {layer_1.map((item, index) => (
              // <CarouselChild >
                <Image
                  w={"50%"}
                  key={`${index}-layouts-1`}
                  objectFit="contain"
                  objectPosition="top"
                  rounded="md"
                  src={String(item.default.src)}
                  alt={`mockup`}
                />
            ))}
          </CarouselContainer>

        <CarouselContainer
          initial={{ x: -windowSize.innerWidth/2 }}
          animate={{ x: 0 }}
          //@ts-ignore
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          {layer_2.map((item, index) => (
              <Image
                key={`${index}-layouts-2`}
                w={"50%"}
                objectFit="contain"
                objectPosition="top"
                rounded="md"
                src={String(item.default.src)}
                alt={`mockup`}
              />
          ))}
        </CarouselContainer>
        
      </VStack>
    </>
  );
};


function getWindowSize() {
  if(typeof window === 'undefined') return ({innerWidth: 0, innerHeight: 0})
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}