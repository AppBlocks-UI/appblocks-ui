import { Badge, Box, Flex, chakra } from '@chakra-ui/react'
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav'
import { useRouter } from 'next/router'
import * as React from 'react'
import EditPageLink from '@root/components/docs-elements/edit-page-button'
import Footer from '@root/components/docs-elements/footer'
import Header from '@root/components/docs-elements/header'
import SEO from '@root/components/docs-elements/seo'
import TableOfContent from '@root/components/docs-elements/table-of-content'
import { convertBackticksToInlineCode } from '@root/utils/convert-backticks-to-inline-code'
import { t } from '@root/utils/i18n'
import { FrontmatterHeading } from '@root/types/frontmatter'
import { LandingNavbar } from '@root/components/navigation/LandingNavbar'
import { Container } from '@root/components/layout/Container'
// import { AdBanner } from './chakra-pro/ad-banner'

function useHeadingFocusOnRouteChange() {
  const router = useRouter()

  React.useEffect(() => {
    const onRouteChange = () => {
      const [heading] = Array.from(document.getElementsByTagName('h1'))
      heading?.focus()
    }
    router.events.on('routeChangeComplete', onRouteChange)
    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
    }
  }, [router.events])
}

interface PageContainerProps {
  frontmatter: {
    slug?: string
    title: string
    description?: string
    editUrl?: string
    version?: string
    headings?: FrontmatterHeading[]
  }
  hideToc?: boolean
  maxWidth?: string
  children: React.ReactNode
  leftSidebar?: React.ReactElement
  rightSidebar?: React.ReactElement
  pagination?: React.ReactElement
}

function PageContainer(props: PageContainerProps) {
  const {
    frontmatter,
    children,
    leftSidebar,
    rightSidebar,
    pagination,
    hideToc,
    maxWidth = '48rem',
  } = props

  useHeadingFocusOnRouteChange()

  if (!frontmatter) return <></>

  const { title, description, editUrl, version, headings = [] } = frontmatter

  return (
    <>
      <SEO title={title} description={description} />
      <SkipNavLink zIndex={20}>
        {t('component.page-container.skip-to-content')}
      </SkipNavLink>
      <Box>

      
      {/* <AdBanner /> */}
      <LandingNavbar />
      <Container as='main' className='main-content' w='full' maxW='8xl' mx='auto' mt={[0, 100]}>
        <Header />
        <Box display={{ md: 'flex' }}>
          {leftSidebar || null}
          <Box flex='1' minW='0'>
            <SkipNavContent />
            <Box id='content' px={[2, 5]} mx='auto' minH='76vh'>
              <Flex>
                <Box
                  minW='0'
                  flex='auto'
                  px={{ base: '4', sm: '6', xl: '8' }}
                  pt={[2, '10']}
                >
                  <Box maxW={maxWidth}>
                    <chakra.h1 tabIndex={-1} outline={0} textStyle="h3" apply='mdx.h1'>
                      {convertBackticksToInlineCode(title)}
                    </chakra.h1>
                    {version && (
                      <Badge colorScheme='teal' letterSpacing='wider'>
                        v{version}
                      </Badge>
                    )}
                    {children}
                    <Box mt='40px'>
                      {/* <Box>{editUrl && <EditPageLink href={editUrl} />}</Box> */}
                      {pagination || null}
                    </Box>
                    <Box pb='20'>
                      <Footer />
                    </Box>
                  </Box>
                </Box>
                {!hideToc && (
                  <TableOfContent
                    visibility={headings.length === 0 ? 'hidden' : 'initial'}
                    headings={headings}
                  />
                )}
                {rightSidebar}
              </Flex>
            </Box>
          </Box>
        </Box>
      </Container>
      </Box>
    </>
  )
}

export default PageContainer
