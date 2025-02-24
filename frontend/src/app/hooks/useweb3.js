// frontend/hooks/useWeb3.js
import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'

export const useWeb3 = () => {
  const { activate, deactivate } = useWeb3React()
  
  const connectWallet = useCallback(async (connector) => {
    try {
      await activate(connector)
    } catch (error) {
      console.error('Connection error:', error)
    }
  }, [activate])
  
  return { connectWallet, disconnectWallet: deactivate }
}