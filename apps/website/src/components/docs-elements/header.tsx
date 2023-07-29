import {
  Box,
  Flex,
  HStack,
  Stack,
  HTMLChakraProps,
  Icon,
  IconButton,
  Link,
  List,
  ListItem,
  ListProps,
  Badge,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  chakra,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useUpdateEffect,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState, ReactElement, ReactNode, } from 'react'
import {
  FaMoon, 
  FaSun,
} from 'react-icons/fa'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { MobileNavContent } from './mobile-nav'
import Search from './omni-search'
import VersionSwitcher from './version-switcher'


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

type MainNavLinkProps = {
  href: string
  icon?: ReactElement
  children: ReactNode
  label?: string
  isActive?: boolean
  isExternal?: boolean
  isNew?: boolean
}

const MainNavLink = ({ href, icon, children, isActive, isExternal, isNew=false }: MainNavLinkProps) => {
  const router = useRouter()
  const active = router.asPath.startsWith(href) || !!isActive

  return (
    <Link
      href={href}
      as={NextLink}
      variant="navlink"
      target={isExternal ? "_blank" : ""}
      fontWeight={active ? 'bold' : 'normal'}
      _dark={{
        color: active ? 'gray.l80' : 'gray.l40',
        _hover: {color: 'gray.l80'}
      }}
      passHref
    >
      <span>{children}</span>
    </Link>
  );
}

export const mainNavLinks = [
  {
    href: '/getting-started',
    label: 'Getting Started',
  },
  {
    href: '/docs/components',
    label: 'Components',
  },
  // {
  //   href: '/docs/hooks/use-boolean',
  //   label: 'Hooks',
  //   match: (asPath: string, href: string) =>
  //     href.startsWith('/docs/hooks') && asPath.startsWith('/docs/hooks'),
  // },
  // {
  //   href: '/docs/recipes',
  //   label: 'Recipes',
  // },
]

export const MainNavLinkGroup = (props: ListProps) => {
  const router = useRouter()

  return (
    <List as={HStack} alignItems="center" w="100%" spacing={8} styleType='none' {...props}>
      {mainNavLinks.map((item) => (
        <ListItem key={item.label}>
          <MainNavLink
            href={item.href}
            label={item.label}
            // @ts-ignore
            isActive={item.match?.(router.asPath, item.href)}
            // isExternal={item.external}
          >
            {item.label} {
            // @ts-ignore
            item.new && <NewBadge />
            }
          </MainNavLink>
        </ListItem>
      ))}
    </List>
  )
}

export const MainNavLinkGroupTwo = (props: ListProps) => {
  const router = useRouter()
  const isMobile = useBreakpointValue(
    {
      base: true,
      sm: true,
      md: false,
      lg: false,
    },
    {
      ssr: true,
    }
  );

  if (isMobile) {
    return (
      <>
        <Menu isLazy>
          <MenuButton
            px={4}
            py={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _active={{ bg: 'gray.l10' }}
            _hover={{ bg: 'gray.l20' }}
            _expanded={{ bg: 'gray.l10' }}
            _focus={{ boxShadow: 'outline' }}
          >Docs menu <ChevronDownIcon />
          </MenuButton>
          <MenuList>
          {mainNavLinks.map((item, key) => (
            <MenuItem key={`navlink-${key}`}>
              <MainNavLink
                key={item.label}
                href={item.href}
                label={item.label}
                // @ts-ignore
                isActive={item.match?.(router.asPath, item.href)}
                // isExternal={item.external}
              >
                {item.label} {
                // @ts-ignore
                item.new && <NewBadge />}
              </MainNavLink>
            </MenuItem>
          ))}
          </MenuList>
        </Menu>
      </>
    );
  }

  return (
    <Stack direction="row" alignItems="center" w="100%" spacing={8}>
      {mainNavLinks.map((item) => (
          <MainNavLink
            key={item.label}
            href={item.href}
            label={item.label}
            // @ts-ignore
            isActive={item.match?.(router.asPath, item.href)}
            // isExternal={item.external}
          >
            {item.label} {
            // @ts-ignore
            item.new && <NewBadge />}
          </MainNavLink>
      ))}
    </Stack>
  )
}

function HeaderContent() {
  const mobileNav = useDisclosure()

  const { toggleColorMode: toggleMode } = useColorMode()

  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const mobileNavBtnRef = useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <>
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
        <Flex align="center" w="50%">
          <MainNavLinkGroupTwo mb="10" />
        </Flex>

        <Flex
          justify="flex-end"
          w="40%"
          align="center"
          color="gray.400"
        >
          <Search />
          <VersionSwitcher
            width="auto"
            flexShrink={0}
            display={{ base: "none", md: "flex" }}
          />
        </Flex>
      </Flex>
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </>
  );
}

function Header(props: HTMLChakraProps<'header'>) {
  const { maxW = '8xl', maxWidth = '8xl' } = props
  const ref = useRef<HTMLHeadingElement>()
  const [y, setY] = useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useScroll()
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? 'sm' : undefined}
      transition='box-shadow 0.2s, background-color 0.2s'
      zIndex='3'
      left='0'
      right='0'
      width='full'
      {...props}
    >
      <chakra.div height='4.5rem' mx='auto' maxW={maxW} maxWidth={maxWidth}>
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  )
}

export default Header
