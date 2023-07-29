import { Select, SelectProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import packageJSON from 'package.json'

function VersionSwitcher(props: SelectProps) {
  const router = useRouter()

  // const currentVerion = `v${packageJSON.dependencies['@chakra-ui/react']}`
  const currentVerion = `v0.01`

  const versions = [
    {
      label: currentVerion,
      url: 'https://appblocks.xyz',
    },
  ]

  const currentVersionUrl = versions[0].url

  return (
    <Select
      marginEnd='0rem'
      variant='unstyled'
      fontWeight='semibold'
      color='gray.600'
      _dark={{ color: 'gray.l80', bg: 'black.100' }}
      bg="white"
      value={currentVersionUrl}
      aria-label={`Select the AppBlocks Docs version. You're currently viewing the version ${currentVerion} docs`}
      onChange={(e) => {
        router.push(e.target.value)
      }}
      {...props}
    >
      {versions.map(({ label, url }) => (
        <option key={url} value={url}>
          {label}
        </option>
      ))}
    </Select>
  )
}

export default VersionSwitcher
