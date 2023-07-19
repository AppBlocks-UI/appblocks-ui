import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface MotionBoxProps extends BoxProps {
    transition: any;
    delay?: any;
    duration?: any;
    ease?: string;
    children: ReactNode;
}

export const MotionBox = ({
  transition,
  delay = 0,
  duration = 0.65,
  ease = "easeInOut",
  children,
  ...props
}: MotionBoxProps) => (
  <Box {...props}>
    <motion.div
      initial={transition.hidden}
      animate={transition.visible}
      exit={transition.hidden}
      transition={{
        type: ease,
        duration: duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  </Box>
);