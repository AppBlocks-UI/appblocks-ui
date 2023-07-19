import * as React from 'react'
import { createContext } from '@chakra-ui/react-utils'
import { useBreakpointValue, useDisclosure } from '@chakra-ui/react'

export const [AppPageProvider, useAppPageContext] = createContext<
  ReturnType<typeof useAppPage>
>({
  strict: false,
  errorMessage: 'AppPage context not available.',
})

export interface useAppPageProps {
  toggleBreakpoint?: "lg"
}

export const useAppPage = (props: useAppPageProps) => {
  const leftDisclosure = useDisclosure()
  const rightDisclosure = useDisclosure()

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  },
  {
    ssr: true,
  })

  return {
    isLeftSidebarOpen: leftDisclosure.isOpen = true,
    closeLeftSidebar: leftDisclosure.onClose,
    openLeftSidebar: leftDisclosure.onOpen,
    toggleLeftSidebar: leftDisclosure.onToggle,
    isRightSidebarOpen: rightDisclosure.isOpen = true,
    closeRightSidebar: rightDisclosure.onClose,
    openRightSidebar: rightDisclosure.onOpen,
    toggleRightSidebar: rightDisclosure.onToggle,
    isMobile,
  }
}
