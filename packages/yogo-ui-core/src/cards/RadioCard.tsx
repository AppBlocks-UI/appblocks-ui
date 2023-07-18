import { Box, useRadio, Card, CardHeader, Icon, Flex, Text, CardBody } from "@chakra-ui/react"

import { FiCheckCircle, FiCircle } from 'react-icons/fi'

interface RadioCardProps {
  _key: any;
  heading: string;
  content?: string;
  icon?: any;
  variant?: string;
}

export const RadioCard = ({_key, heading, content, icon, variant}: RadioCardProps) => {
    // const {key, heading, content} = props.content
    const {state, getInputProps, getCheckboxProps } = useRadio(_key) //it's supposed to be getRadioProps, but it's throwing a not defined error
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    if(variant === "basic") {
      return (
        <>
          <Card as="label" w="100%" variant="filled">
            <CardHeader
              {...checkbox}
              py={3}
              cursor="pointer"
              borderWidth="1px"
              borderRadius="md"
              h="100%"
              _checked={{
                borderWidth: "2px",
                borderColor: "brand.primary.alpha",
                _dark: {
                  borderColor: "brand.secondary.f",
                },
              }}
              _focus={{
                boxShadow: "outline",
              }}
            >
              <input {...input} />
                <Flex align="center" justify="center">
                  <Box>
                    <Text textStyle="h4">
                      {heading}
                    </Text>
                  </Box>
                </Flex>
            </CardHeader>
          </Card>
        </>
      );
    }

    if(variant === "withIcon") {
      return (
        <>
          <Card as="label" w="100%" variant="filled">
            <CardHeader
              {...checkbox}
              pb={5}
              cursor="pointer"
              borderWidth="1px"
              borderRadius="md"
              h="100%"
              _checked={{
                borderWidth: "2px",
                borderColor: "brand.primary.alpha",
                _dark: {
                  borderColor: "brand.secondary.f",
                },
              }}
              _focus={{
                boxShadow: "outline",
              }}
            >
              <input {...input} />

              <Box>
                <Flex align="start" justify="flex-start">
                  <Icon
                    as={icon? icon: FiCheckCircle }
                    color={state.isChecked ? "brand.primary.alpha" : "gray.20"}
                    _dark={{
                      color: state.isChecked ? "brand.secondary.f" : "gray.l20",
                    }}
                    mt={1}
                    mr={[2, 4]}
                  />
                  <Box>
                    <Text textStyle="h4" mb={1}>
                      {heading}
                    </Text>
                    <Text textStyle="mid">{content && content}</Text>
                  </Box>
                </Flex>
              </Box>
            </CardHeader>
          </Card>
        </>
      );
    }
  
    return (
      <>
        <Card as="label" w="100%" variant="filled">
          <CardHeader
            {...checkbox}
            pb={5}
            cursor="pointer"
            borderWidth="1px"
            borderRadius="md"
            _checked={{
              borderWidth: "2px",
              borderColor: "brand.secondary.f",
            }}
            _focus={{
              boxShadow: "outline",
            }}
          >
            <input {...input} />

            <Box>
              <Flex align="center" justify="space-between">
                <Text textStyle="h4" mb={1}>{heading}</Text>
                <Icon 
                  as={state.isChecked ? FiCheckCircle : FiCircle}
                  color= {state.isChecked ? "brand.secondary.f" : "gray.20"}
                  _dark={{
                    color: state.isChecked ? "brand.secondary.f" : "gray.l20"
                  }}
                  />
              </Flex>
              <Text textStyle="mid">{content}</Text>
            </Box>
          </CardHeader>
        </Card>
      </>
    );
  }