import '../styles/styles.css'

/*
import '../styles/styles.css'
import '../styles/common.css'
import '../styles/main.css'*/
import '../styles/swal.css'

import { ChakraProvider } from "@chakra-ui/react"

import { Web3ReactProvider } from '@web3-react/core'
import { READ_ONLY_WALLET } from '../utils/c'
import { getRefUserId, saveRefUserId, textIsNumber } from '../utils/f'
import { getLibrary, getNetworkLibrary } from '../web3/connectors'
import dynamic from 'next/dynamic'

const Web3ReactProviderReadOnly = dynamic(
  () => import('../components/wallet/Web3ReactProviderReadOnly'),
  { ssr: false }
)

function MyApp({ Component, pageProps }) {
  const refUserId = getRefUserId()
  if(!refUserId || refUserId.length == 0 || !textIsNumber(refUserId)) saveRefUserId(1)
  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactProviderReadOnly getLibrary={getNetworkLibrary}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Web3ReactProviderReadOnly>
    </Web3ReactProvider>
  )
 
  
}

export default MyApp
