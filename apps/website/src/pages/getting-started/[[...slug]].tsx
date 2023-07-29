import { MDXComponents } from '@root/components/docs-elements/mdx-components'
import { allGuides, Guide } from '@contentlayer/generated'
import MDXLayout from '@root/components/docs-elements/layouts/mdx'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { toArray } from '@root/utils/js-utils'

export default function Page({
  doc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(doc.body.code)
  return (
    <MDXLayout frontmatter={doc.frontMatter}>
      <Component components={MDXComponents as any} />
    </MDXLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allGuides
    .map((t: any) => t._id.replace('getting-started/', '').replace('.mdx', ''))
    .map((id: any) => ({ params: { slug: id === 'index' ? [] : id.split('/') } }))
  return { paths, fallback: false }
}

export const getStaticProps = async (ctx: any) => {
  const params = toArray(ctx.params.slug)

  let doc: Guide
  if (params.length === 0) {
    // @ts-ignore
    doc = allGuides.find((t: any) => t._id === 'getting-started/index.mdx')
  } else {
    // @ts-ignore
    doc = allGuides.find((guide: any) =>
      guide._id.endsWith(`${params.join('/')}.mdx`),
    )
  }
  return { props: { doc } }
}
