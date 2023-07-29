import { motion } from "framer-motion";
import {
  chakra,
  shouldForwardProp,
  Container,
  ContainerProps,
} from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

interface SectionProps extends ContainerProps {
  children: React.ReactNode;
  delay?: number;
}

export const Section = ({ children, delay = 0, ...props }: SectionProps) => (
  <Container {...props}>
    <StyledDiv
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </StyledDiv>
  </Container>
);
