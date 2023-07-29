import React from 'react'

import { 
    Avatar, 
    Box, 
    Flex, 
    Heading, 
    Text, 
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export const FAQList = ({list}: any) => {
  return (
    <Accordion w="100%" allowToggle>
        {list.map((item: any, index: number) => (
            <AccordionItem key={`faq-${index}`}>
            <h2>
              <AccordionButton>
                <Text as="span" textStyle="h4" fontSize="18px" flex="1" textAlign="left">
                  {item.question}
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel as={Text} textStyle="mid" fontSize="17px" pb={4}>
              {item.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      
    </Accordion>
  );
}