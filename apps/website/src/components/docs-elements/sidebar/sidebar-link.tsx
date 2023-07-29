import { PropsOf, chakra, useColorModeValue, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef, Ref, useEffect, useRef } from 'react'

const StyledLink = forwardRef(function StyledLink(
  props: PropsOf<typeof chakra.a> & { isActive?: boolean, isExternal?: boolean },
  ref: Ref<any>,
) {
  const { isActive, isExternal = false, ...rest } = props

  return (
    <Link
      as={NextLink}
      position="relative"
      bg={
        isActive
          ? "gray.5"
          : "transparent"
      }
      fontSize="sm"
      target={isExternal ? '_blank' : undefined}
      aria-current={isActive ? 'page' : undefined}
      ref={ref}
      _hover={{
        cursor: "pointer",
        bgColor: "gray.5",
        _dark: {
          bgColor: "gray.l5",
        },
      }}
      w="100%"
      py={2}
      px={5}
      marginTop="0"
      rounded="md"
      fontWeight={
        isActive
          ? "semibold"
          : "normal"
      }
      _dark={{
        bgColor: isActive
          ? "gray.l5"
          : "transparent",
      }}
      {...rest}
    />
  )
})

type SidebarLinkProps = PropsOf<typeof chakra.div> & {
  href?: string
  icon?: React.ReactElement
  isExternal?: boolean
}

function checkHref(href: string, slug: string | string[]) {
  const _slug = Array.isArray(slug) ? slug : [slug]
  const path = href.split('/')
  const pathSlug = path[path.length - 1]
  return _slug.includes(pathSlug)
}

const SidebarLink = ({ href, children, isExternal = false, ...rest }: SidebarLinkProps) => {
  const router = useRouter()
  const isActive = checkHref(href!, router.query.slug!) || href === router.asPath

  const link = useRef<HTMLAnchorElement>()

  useEffect(() => {
    if (isActive && router.query.scroll === 'true') {
      link.current!.scrollIntoView({ block: 'center' })
    }
  }, [isActive, router.query])

  return (
    <Flex align='center' w="100%" userSelect='none' lineHeight='tall' {...rest}>
      {/* <Link as={NextLink} href={href!} passHref> */}
        <StyledLink isActive={isActive} ref={link} href={href!} isExternal={isExternal}>
          {children}
        </StyledLink>
      {/* </Link> */}
    </Flex>
  )
}

export default SidebarLink
