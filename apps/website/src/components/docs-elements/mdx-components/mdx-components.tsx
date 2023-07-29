import * as Chakra from '@chakra-ui/react'
import {
  ColorPalette,
  ColorPalettes,
  ColorWrapper,
} from '@root/components/docs-elements/color-palette'
import { JoinCommunityCards } from '@root/components/docs-elements/community-card'
import { FeaturesOverview } from '@root/components/docs-elements/features-overview'
import { FrameworkLinks } from '@root/components/docs-elements/framework-link'
import { Anchor } from '@root/components/docs-elements/mdx-components/anchor'
import { InlineCode } from '@root/components/docs-elements/mdx-components/inline-code'
import { LinkedHeading } from '@root/components/docs-elements/mdx-components/linked-heading'
import { Pre } from '@root/components/docs-elements/mdx-components/pre'
import { Table, TData, THead } from '@root/components/docs-elements/mdx-components/table'
import { PackageManagers } from '@root/components/docs-elements/package-managers'
import SandpackEmbed from '@root/components/docs-elements/sandpack-embed'
import { TutorialCodeBlock } from '@root/components/docs-elements/tutorial/tutorial-code-block'
import { TutorialFileAction } from '@root/components/docs-elements/tutorial/tutorial-file-action'
import NextImage from 'next/image'
import { FiFigma } from 'react-icons/fi'
import PropsTable from '@root/components/docs-elements/props-table'
import CarbonAd from './carbon-ad'
import CodeBlock from './codeblock/codeblock'
import ComponentLinks from './component-links'
import { FeaturesCourses } from './course-banner'
import IconsList from './icons-list'
import { VideoPlayer } from './video-player'

const { Alert, AspectRatio, Box, chakra, Kbd, Link } = Chakra

export const MDXComponents = {
  ...Chakra,
  FiFigma,
  Image: ({ ratio, border, src, ...props }: any) => (
    <AspectRatio
      my='5'
      position='relative'
      borderWidth={border ? '1px' : undefined}
      ratio={ratio}
    >
      <NextImage
        src={src}
        alt=''
        layout='fill'
        objectFit='contain'
        {...props}
      />
    </AspectRatio>
  ),
  LinkedImage: ({ href, ...props }: any) => (
    <Link display='block' my='10' href={href} isExternal>
      <MDXComponents.Image {...props} />
    </Link>
  ),
  h1: (props: any) => <chakra.h1 apply='mdx.h1' {...props} />,
  h2: (props: any) => <LinkedHeading apply='mdx.h2' {...props} />,
  h3: (props: any) => <LinkedHeading as='h3' apply='mdx.h3' {...props} />,
  h4: (props: any) => <LinkedHeading as='h4' apply='mdx.h4' {...props} />,
  hr: (props: any) => <chakra.hr apply='mdx.hr' {...props} />,
  strong: (props: any) => <Box as='strong' fontWeight='semibold' {...props} />,
  code: InlineCode,
  pre: (props: any) => {
    if (typeof props.children === 'string') return <Pre {...props} />
    if (props.children.props.type === 'tutorial') {
      const className = props.children.props.className || ''
      const code = props.children.props.children.trim() || ''
      const language = className.replace(/language-/, '')
      return (
        <TutorialCodeBlock
          language={language}
          code={code}
          path={props.children.props.path}
          showLineNumbers={props.showLineNumbers}
        />
      )
    }
    return <CodeBlock {...props} />
  },
  kbd: Kbd,
  br: ({ reset, ...props }: any) => (
    <Box
      as={reset ? 'br' : undefined}
      height={reset ? undefined : '24px'}
      {...props}
    />
  ),
  table: Table,
  th: THead,
  td: TData,
  a: Anchor,
  p: (props: any) => <chakra.p apply='mdx.p' {...props} />,
  ul: (props: any) => <chakra.ul apply='mdx.ul' {...props} />,
  ol: (props: any) => <chakra.ol apply='mdx.ul' {...props} />,
  li: (props: any) => <chakra.li pb='4px' {...props} />,
  blockquote: (props: any) => (
    <Alert
      mt='4'
      role='none'
      status='warning'
      variant='left-accent'
      as='blockquote'
      rounded='4px'
      my='1.5rem'
      {...props}
    />
  ),
  'carbon-ad': CarbonAd,
  ComponentLinks,
  IconsList,
  PropsTable,
  FrameworkLinks,
  VideoPlayer,
  AspectRatio,
  ColorPalette,
  ColorPalettes,
  ColorWrapper,
  FeaturesCourses,
  JoinCommunityCards,
  SandpackEmbed: (props: any) => (
    <Box my={6}>
      <SandpackEmbed {...props} />
    </Box>
  ),
  FeaturesOverview,
  TutorialFileAction,
  PackageManagers,
}
