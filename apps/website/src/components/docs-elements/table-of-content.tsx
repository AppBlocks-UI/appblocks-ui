import {
  Box,
  BoxProps,
  chakra,
  Link,
  Text,
  ListItem,
  OrderedList,
  useColorModeValue,
} from '@chakra-ui/react'
import { useScrollSpy } from '@root/hooks/use-scrollspy'
import type { FrontmatterHeading } from '@root/types/frontmatter'
import { t } from '@root/utils/i18n'
import { FigmaPluginAd } from './figma-plugin-ad'
import TocNav from './toc-nav'

interface TableOfContentProps extends BoxProps {
  headings: FrontmatterHeading[]
}

function TableOfContent(props: TableOfContentProps) {
  const { headings, ...rest } = props
  const activeId = useScrollSpy(
    headings.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: '0% 0% -24% 0%',
    },
  )
  const linkColor = useColorModeValue('gray.600', 'gray.400')
  const linkHoverColor = useColorModeValue('gray.900', 'gray.600')
  return (
    <TocNav title={"Content"} {...rest}>
      <OrderedList spacing={1} ml="0" mt="4" styleType="none">
        {headings.map(({ id, text, level }) => (
          <ListItem key={id} title={text} ml={level === "h3" ? "4" : undefined}>
            <Text
              as={chakra.a}
              href={`#${id}`}
              aria-current={id === activeId ? "location" : undefined}
              py="1"
              display="block"
              cursor="pointer"
              fontWeight={id === activeId ? "bold" : "medium"}
              _dark={{
                _hover: {
                  color: "gray.l80",
                },
                color: id === activeId ? "gray.l80" : "gray.l40",
              }}
            >
              {text}
            </Text>
          </ListItem>
        ))}
      </OrderedList>

      {/* <Box my='10'>
        <FigmaPluginAd medium='sidebar-ad' />
      </Box> */}
    </TocNav>
  );
}

export default TableOfContent
