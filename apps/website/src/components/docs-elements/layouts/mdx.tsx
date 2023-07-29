import PageContainer from '@root/components/docs-elements/page-container'
import Pagination from '@root/components/docs-elements/pagination'
import Sidebar from '@root/components/docs-elements/sidebar/sidebar'
import componentsSidebar from 'configs/components.sidebar.json'
import gettingStartedSidebar from 'configs/getting-started.sidebar.json'
import hooksSidebar from 'configs/hooks.sidebar.json'
import recipesSidebar from 'configs/recipes.sidebar.json'
import { ReactNode } from 'react'
import { findRouteByPath, removeFromLast } from '@root/utils/find-route-by-path'
import { getRouteContext, RouteItem } from '@root/utils/get-route-context'
import { Frontmatter } from '@root/types/frontmatter'

export function getRoutes(slug: string): RouteItem[] {
  // for home page, use docs sidebar
  if (slug === '/') {
    return gettingStartedSidebar.routes as RouteItem[]
  }

  const configMap = {
    '/getting-started': gettingStartedSidebar,
    '/docs/hooks': hooksSidebar,
    '/docs/components': componentsSidebar,
    '/recipes': recipesSidebar,
  }

  const [, sidebar] =
    Object.entries(configMap).find(([path]) => slug.startsWith(path)) ?? []

  const routes = sidebar?.routes ?? []
  return routes as RouteItem[]
}

interface MDXLayoutProps {
  frontmatter: Frontmatter
  children: ReactNode
  hideToc?: boolean
  maxWidth?: string
}

export default function MDXLayout(props: MDXLayoutProps) {
  const { frontmatter, children, hideToc, maxWidth } = props

  const routes = getRoutes(frontmatter.slug!)
  const route = findRouteByPath(removeFromLast(frontmatter.slug!, '#'), routes)
  const routeContext = getRouteContext(route, routes)

  return (
    <PageContainer
      hideToc={hideToc}
      maxWidth={maxWidth}
      frontmatter={frontmatter}
      leftSidebar={<Sidebar routes={routes} />}
      pagination={
        <Pagination
          next={routeContext.nextRoute}
          previous={routeContext.prevRoute}
        />
      }
    >
      {children}
    </PageContainer>
  )
}