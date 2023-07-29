import { createContext, PropGetter } from '@chakra-ui/react-utils'
import {
  ResponsiveValue,
  ThemeTypings,
  UseDisclosureReturn,
} from '@chakra-ui/react'
import { useAppPageContext } from '../app-page/app-page-context'
import { callAllHandlers } from '@chakra-ui/utils'

type Variants = 'compact' | 'default'

export interface UseSidebarReturn extends UseDisclosureReturn {
  isMobile?: boolean
  breakpoints?: ResponsiveValue<boolean>
  variant?: 'Sidebar' extends keyof ThemeTypings['components'] /* @ts-ignore */
    ? ThemeTypings['components']['Sidebar']['variants']
    : Variants
  size?: 'Sidebar' extends keyof ThemeTypings['components'] /* @ts-ignore */
    ? ThemeTypings['components']['Sidebar']['sizes']
    : string
}

export const [SidebarProvider, useSidebarContext] =
  createContext<UseSidebarReturn>({
    name: 'SidebarContext',
    strict: false,
  })

export const useSidebarToggleButton = () => {
  const appPageContext = useAppPageContext()
  const context = useSidebarContext()

  const getButtonProps: PropGetter = (props) => {
    return {
      onClick: callAllHandlers(
        props?.onClick
      ),
    }
  }

  return {
    isOpen: context?.isOpen || appPageContext?.isLeftSidebarOpen,
    isMobile: context?.isMobile || appPageContext?.isMobile,
    getButtonProps,
  }
}
