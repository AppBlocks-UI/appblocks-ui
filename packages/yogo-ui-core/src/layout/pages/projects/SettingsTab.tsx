import React from 'react'
import { 
  VStack,
  Card,
  CardHeader,
  Text,
  Box,
  HStack,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Checkbox,
  Button,
  Avatar,
 } from '@chakra-ui/react'
 
import { Switch } from '@/components/forms/Switch'

import { MyDatePickerDialog } from '@/components/inputs/MyDatePickerDialog';

const appblocksIcon = require('@/assets/appblocks-icon.png');

console.log('appblocksIcon', String(appblocksIcon.default.src))

export const SettingsTab = () => {

  return (
    <>
      <VStack w="100%" spacing={6} alignItems="flex-start">
        <VStack spacing={4} align="flex-start">
          <Text textStyle="h3" mb={2}>
            Project Logo
          </Text>
          <Avatar src={String(appblocksIcon.default.src)} size="2xl" />
          <Text textStyle="small">Allowed file types: PNG, JPG, JPEG</Text>
        </VStack>
        <Card w="100%" variant="filled">
          <CardHeader pb={5} borderWidth="1px" borderRadius="md">
            <Box>
              <Text textStyle="small" mb={2}>
                Project Name
              </Text>
              <Editable defaultValue="Cold Design" fontSize="md">
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
                Project Type
              </Text>
              <Editable defaultValue="Client Relationship" fontSize="md">
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
                Project Description
              </Text>
              <Editable
                defaultValue="Organize your thoughts with an outline. Here’s the outlining strategy I use. I promise it works like a charm. Not only will it make writing your blog post easier, it’ll help you make your message."
                fontSize="md"
              >
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
                Due Date
              </Text>
              <MyDatePickerDialog
              // mode="single"
              // selected={selected}
              // onSelect={setSelected}
              // footer={footer}
              />
            </Box>
          </CardHeader>
        </Card>

        <Card w="100%" variant="filled">
          <CardHeader pb={5} borderWidth="1px" borderRadius="md">
            <Box>
              <Text textStyle="small" mb={2}>
                Notifications
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
                Status
              </Text>
              <Switch id="allow-changes" label="Active" />
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
        <Button variant="solid">Save Changes</Button>
      </HStack>
    </>
  );
}