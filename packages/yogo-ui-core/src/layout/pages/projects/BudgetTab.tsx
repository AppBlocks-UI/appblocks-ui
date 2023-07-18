import React from 'react'
import { 
  VStack, 
  Flex,
  SimpleGrid,
  Card,
  CardHeader,
  Text,
  CardBody,
  Box,
  useRadioGroup,
  HStack,
  Stack,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Checkbox,
  Button,
 } from '@chakra-ui/react'

import { RadioCard } from '@/components/cards/RadioCard'
import { Switch } from '@/components/forms/Switch'
import { ProgressBar } from '@/components/data/Progress'

export const BudgetTab = () => {
  const options = [
    {
      key: "precise",
      heading: "Precise Usage",
      content:
        "Withdraw money to your bank account per transaction under  $50,000 budget",
    },

    {
      key: "normal",
      heading: "Normal Usage",
      content:
        "Withdraw money to your bank account per transaction under  $50,000 budget",
    },

    {
      key: "extreme",
      heading: "Extreme Usage",
      content:
        "Withdraw money to your bank account per transaction under  $50,000 budget",
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "usage-rate",
    defaultValue: "precise",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <>
      <VStack w="100%" spacing={6} alignItems="flex-start">
        <SimpleGrid spacing={6} columns={1} w="100%">
          <Card variant="filled">
            <CardHeader mb={4}>
              <Flex w="100%" alignItems="center" justify="space-between">
                <Text textStyle="h3">Budget</Text>
                <Text textStyle="mid">$22,300 of 36,000 Used</Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Box w="100%" h="50px" mt={2}>
                <ProgressBar
                  progress={90}
                  height={2}
                />

                <Text textStyle="small">14 Targets are remaining</Text>
              </Box>
            </CardBody>
          </Card>
        </SimpleGrid>

        <Stack spacing={6} direction={["column", "row"]} w="100%" {...group}>
          {options.map((value) => {
            const key = value.key;
            const radio = getRadioProps({
              name: "usage-rate",
              defaultValue: "precise",
              onChange: console.log,
            });
            return <RadioCard key={key} {...radio} heading={value.heading} _key={key} content={value.content} />;
          })}
        </Stack>

        <Card w="100%" variant="filled">
          <CardHeader pb={5} borderWidth="1px" borderRadius="md">
            <Box>
              <Text textStyle="small" mb={2}>
                Budget Notes
              </Text>
              <Editable defaultValue="Take some chakra" fontSize="md">
                <EditablePreview />
                <EditableTextarea />
              </Editable>
            </Box>
          </CardHeader>
        </Card>

        <Card w="100%" variant="filled">
          <CardHeader pb={5} borderWidth="1px" borderRadius="md">
            <Box>
              <Text textStyle="small" mb={2}>
                Manage Budget
              </Text>
              <Editable defaultValue="$36000.00" fontSize="md">
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Box>
          </CardHeader>
        </Card>

        <Card w="100%" variant="filled">
          <CardHeader pb={5} borderWidth="1px" borderRadius="md">
            <Box>
              <Text textStyle="small" mb={2}>
                Overuse Notifications
              </Text>
              <HStack spacing={5} direction="row">
                <Checkbox colorScheme="teal" defaultChecked>
                  Email
                </Checkbox>
                <Checkbox colorScheme="teal" defaultChecked>
                  Phone
                </Checkbox>
              </HStack>
            </Box>
          </CardHeader>
        </Card>

        <Card w="100%" variant="filled">
          <CardHeader pb={5} borderWidth="1px" borderRadius="md">
            <Box>
              <Text textStyle="small" mb={2}>
                Allow Changes
              </Text>
              <Switch id="allow-changes" label="Allowed" />
            </Box>
          </CardHeader>
        </Card>
      </VStack>

      <HStack
        w={["100%", "calc(100% + 4rem)"]}
        borderTop="1px solid"
        borderTopColor="gray.10"
        justify="flex-end"
        spacing={6}
        ml={["0", "-2rem"]}
        mr={["0", "-2rem"]}
        mt={7}
        pt={5}
        pr={["0", "2rem"]}
        _dark={{
          borderTopColor: "gray.80",
        }}
      >
        <Button variant="customOutline">Cancel</Button>
        <Button variant="solid" >Save Changes</Button>
      </HStack>
    </>
  );
}