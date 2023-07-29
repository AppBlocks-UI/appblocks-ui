import {
  Badge,
  Box,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Fragment, useRef } from 'react'
import { convertBackticksToInlineCode } from '@root/utils/convert-backticks-to-inline-code'
import { RouteItem, Routes } from '@root/utils/get-route-context'
import SidebarCategory from './sidebar-category'
import SidebarLink from './sidebar-link'

const sortRoutes = (routes: RouteItem[]) => {
  return routes.sort(({ title: titleA }, { title: titleB }) => {
    if (titleA < titleB) return -1
    if (titleA > titleB) return 1
    return 0
  })
}

export type SidebarContentProps = Routes & {
  pathname?: string
  contentRef?: any
}

function NewBadge() {
  return (
    <Badge
      ml='2'
      lineHeight='tall'
      fontSize='10px'
      variant='solid'
      colorScheme='purple'
    >
      New
    </Badge>
  )
}

export function SidebarContent({
  routes,
  pathname,
  contentRef,
}: SidebarContentProps) {
  return (
    <>
      {routes.map((lvl1, idx) => {
        return (
          <VStack spacing={3} w="100%" key={idx}>
            {lvl1.heading && (
              <Text
                textStyle="sectionSubHeading"
                fontSize='sm'
                fontWeight='bold'
                my='4'
                textTransform='uppercase'
                letterSpacing='wider'
              >
                {lvl1.title}
              </Text>
            )}

            {lvl1.routes!.map((lvl2, index) => {
              if (!lvl2.routes) {
                return (
                  <SidebarLink
                    ml='-3'
                    mt='2'
                    key={lvl2.path}
                    href={lvl2.path}
                    isExternal={lvl2.external}
                  >
                    {lvl2.title}
                  </SidebarLink>
                )
              }

              const selected = pathname!.startsWith(lvl2.path!)
              const opened = selected || lvl2.open

              const sortedRoutes = lvl2.sort
                ? sortRoutes(lvl2.routes)
                : lvl2.routes

              return (
                <SidebarCategory
                  contentRef={contentRef}
                  key={lvl2.path! + index}
                  title={lvl2.title}
                  selected={selected}
                  opened={opened}
                >
                  {sortedRoutes.map((lvl3) => (
                    <SidebarLink key={lvl3.path} href={lvl3.path}>
                      <span>{convertBackticksToInlineCode(lvl3.title)}</span>
                      {lvl3.new && <NewBadge />}
                    </SidebarLink>
                  ))}
                </SidebarCategory>
              )
            })}
          </VStack>
        )
      })}
    </>
  )
}

const Sidebar = ({ routes }: any) => {
  const { pathname } = useRouter()
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Box
      ref={ref}
      aria-label='Main Navigation'
      as='nav'
      pos='sticky'
      overscrollBehavior='contain'
      w='280px'
      h='calc(100vh - 8.125rem)'
      pr='8'
      pb='6'
      pl='6'
      pt='4'
      overflowY='auto'
      className='sidebar-content'
      flexShrink={0}
      display={{ base: 'none', md: 'block' }}
    >
      <SidebarContent routes={routes} pathname={pathname} contentRef={ref} />
    </Box>
  )
}

export default Sidebar
