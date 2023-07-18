import React from "react";
import { HStack, Box } from "@chakra-ui/react";

interface PasswordStrengthIndicatorProps {
  password: string;
}
export const PasswordStrengthIndicator = ({
  password,
}: PasswordStrengthIndicatorProps) => {
  const initPwdChecker = () => {
    let pwdCheck = 0;
    let validateRegex = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    validateRegex.forEach((regex, i) => {
      if (new RegExp(regex).test(password)) {
        pwdCheck += 1;
      }
    });
    switch (pwdCheck) {
      case 0:
        return {
          strength: 0,
          val: "",
        };
      case 1:
        return {
          strength: 1,
          val: "weak",
        };
      case 2:
        return {
          strength: 2,
          val: "good",
        };
      case 3:
        return {
          strength: 3,
          val: "strong",
        };
      default:
        return null;
    }
  };
  return (
    <>
      <HStack spacing={2} mb={2}>
        {[0, 1, 2, 3].map((i, key) => {
          if (initPwdChecker()!.strength > i) {
            return (
              <Box
                key={`key-${key}`}
                h={1}
                w="100%"
                rounded="md"
                bg="brand.primary.alpha"
                _dark={{
                  bg: "brand.secondary.g",
                }}
              />
            );
          } else {
            return (
              <Box
                key={`key-${key}`}
                h={1}
                w="100%"
                rounded="md"
                bg="gray.10"
                _dark={{
                  bg: "gray.l10",
                }}
              />
            );
          }
        })}
      </HStack>
    </>
  );
};
