import { keyframes } from '@chakra-ui/react';

const animationKeyframes = keyframes`
  0% { transform: translateY(10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

export const transition = `${animationKeyframes} .4s cubic-bezier(0.42, 0.0, 1.0, 1.0) forwards`;
export const transitionVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
    },

}