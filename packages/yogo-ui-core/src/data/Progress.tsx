import React from "react";
import { Progress, ProgressProps } from "@chakra-ui/react";

interface ProgressBarProps extends ProgressProps {
  progress: number;
  height?: number;
}

export const ProgressBar = ({ progress, height = 1 }: ProgressBarProps) => {
  return (
    <>
      <Progress
        value={progress}
        w="100%"
        height={height}
        rounded="full"
        bgColor="brand.secondary.kappa50"
        colorScheme="purple"
      />
    </>
  );
};
