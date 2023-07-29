import {
  GridItem,
  Input,
  Heading,
  List,
  ListItem,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import { ComponentOverviewItem } from '@root/components/docs-elements/component-overview-item'
import MDXLayout from '@root/components/docs-elements/layouts/mdx'
import { getGroupedComponents } from '@root/utils/contentlayer-utils'
import type { FrontmatterHeading } from '@root/types/frontmatter'
import { useState } from 'react'

type Component = {
  title: string
  url: string
  id: string
}

type Category = {
  id: string
  title: string
  components: Component[]
}

type Props = {
  categories: Category[]
  headings: FrontmatterHeading[]
}

export const ComponentsOverview = ({ categories, headings }: Props) => {
  const { filteredCategories, filterComponentsByTitle } =
    useComponentFilter(categories)
  return (
    <MDXLayout
      frontmatter={{
        title: 'Getting Started',
        slug: '/docs',
        headings,
      }}
    >
      <VStack w='full' mt={5} alignItems='stretch' spacing={12}>
        <Text lineHeight='tall'>
          Build your project faster with our list of pre-built components. Here is an overview of the component categories:
        </Text>
        <Heading as='h2' size='md' id={''} scrollMarginTop={24}>
          Installation
        </Heading>
      </VStack>
    </MDXLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const group = getGroupedComponents()

  const categories = Object.entries(group).reduce((acc, item) => {
    const [title, items] = item
    if (title === 'Layout') return acc
    const category: Category = {
      id: title.toLowerCase().replace(/ /g, '-'),
      title,
      // @ts-ignore
      components: items.map(({ title, slug, id }: any) => ({
        id,
        title,
        url: slug,
      })),
    }
    return acc.concat(category)
  }, [] as Category[])

  const headings = Object.entries(group).reduce((acc, item) => {
    const [title] = item
    if (title === 'Layout') return acc
    const heading: FrontmatterHeading = {
      id: title.toLowerCase().replace(/ /g, '-'),
      text: title,
      level: 2,
    }
    return acc.concat(heading)
  }, [] as FrontmatterHeading[])

  return {
    props: {
      categories,
      headings,
    },
  }
}

const useComponentFilter = (categories: Category[]) => {
  const [filteredCategories, setFilteredCategories] =
    useState<Category[]>(categories)

  const filterComponentsByTitle = (searchText: string) => {
    const filtered: Category[] = []
    categories.forEach((category) => {
      const matchingComponents = category.components.filter((component) =>
        component.title.toLowerCase().includes(searchText.toLowerCase()),
      )
      if (matchingComponents.length > 0) {
        const filteredCategory = { ...category, components: matchingComponents }
        filtered.push(filteredCategory)
      }
    })
    setFilteredCategories(filtered)
  }
  return {
    filteredCategories,
    filterComponentsByTitle,
  }
}

export default ComponentsOverview
