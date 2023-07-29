import React from "react";
import NextLink from "next/link";
import {
  Flex,
  Card,
  CardBody,
  VStack,
  Text,
  useColorModeValue,
  Link,
  HStack,
  Stack,
  Button,
  Box,
  Textarea,
  Select,
} from "@chakra-ui/react";

import { RadioField } from "@root/components/forms/RadioField";
import { InputField } from "@root/components/forms/InputField";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { LineUpDownIcon } from "@root/components/base/Icons";

const DummyForm = () => {
  return (
    <Flex w={["290px", "400px"]}>
      <Card
        w={{
          base: "full",
          md: "600px",
        }}
        boxShadow={useColorModeValue(
          "0px 2px 40px rgba(224, 224, 224, 0.25)",
          "none"
        )}
        variant="filled"
        as="form"
      >
        <CardBody px={6} py={6} rounded="lg">
          <VStack spacing={6} align={["start", "center"]} w="100%">
            <VStack w="100%" spacing={5}>
              <Stack
                spacing={3}
                direction={["column", "row"]}
                w="100%"
                // {...group}
              >
                <InputField
                  label="Name On Card"
                  type="number"
                  variant="customOutline2"
                  isError={false}
                  errorMessage={"Field is compulsory"}
                />

                <InputField
                  label="Card Number"
                  type="text"
                  variant="customOutline2"
                  isError={false}
                  errorMessage={"Field is compulsory"}
                />
              </Stack>

              <Stack
                spacing={3}
                direction={["column", "row"]}
                w="100%"
                // {...group}
              >
                <Box w={["100%", "70%"]}>
                  <RadioField
                    label="Expiration Date"
                    isError={false}
                    errorMessage="Field is compulsory"
                  >
                    <HStack w="100%" spacing={3}>
                      <Select
                        placeholder="Month"
                        w="100%"
                        icon={<LineUpDownIcon />}
                      >
                        <option value="option1">Jan</option>
                        <option value="option2">Feb</option>
                        <option value="option3">Mar</option>
                        <option value="option1">Apr</option>
                        <option value="option2">May</option>
                        <option value="option3">Jun</option>
                        <option value="option1">Jul</option>
                        <option value="option2">Aug</option>
                        <option value="option3">Sep</option>
                        <option value="option1">Oct</option>
                        <option value="option2">Nov</option>
                        <option value="option3">Dec</option>
                      </Select>

                      <Select
                        placeholder="Day"
                        w="100%"
                        icon={<LineUpDownIcon />}
                      >
                        <option value="option1">1</option>
                        <option value="option2">2</option>
                        <option value="option3">3</option>
                      </Select>
                    </HStack>
                  </RadioField>
                </Box>
                <Box w={["100%", "30%"]}>
                  <InputField
                    label="CVV"
                    placeholder="CVV"
                    type="number"
                    variant="customOutline2"
                    isError={false}
                    errorMessage={"Field is compulsory"}
                  />
                </Box>
              </Stack>
            </VStack>

            <HStack w="100%">
              <Button variant="solid" onClick={undefined} w="100%">
                Complete Payment
              </Button>
            </HStack>
          </VStack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default DummyForm;
