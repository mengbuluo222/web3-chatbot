// src/connectors/metaMask.js
import { MetaMask } from '@web3-react/metamask'
import { initializeConnector } from '@web3-react/core'

export const [metaMask, hooks] = initializeConnector(
  (actions) => new MetaMask({ actions })
)

// 可选：配置默认链（以以太坊主网为例）
export const DEFAULT_CHAIN_ID = 1

// 可选：配置RPC URL（使用Infura）
export const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY',
  5: 'https://goerli.infura.io/v3/YOUR_INFURA_KEY'
}