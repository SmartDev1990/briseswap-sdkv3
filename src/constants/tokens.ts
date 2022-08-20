import { ChainTokenMap, TokenMap } from '../types'
import { RICE_ADDRESS, USDC_ADDRESS, USD_ADDRESS, WETH9_ADDRESS, WNATIVE_ADDRESS } from './addresses'

import { ChainId } from '../enums'
import { Token } from '../entities/Token'

export const USDC: TokenMap = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, USDC_ADDRESS[ChainId.MAINNET], 6, 'USDC', 'USD Coin'),
}

export const USD: TokenMap = {
  ...USDC,
  [ChainId.CELO]: new Token(ChainId.CELO, USD_ADDRESS[ChainId.CELO], 18, 'cUSD', 'Celo Dollar'),
}

export const WETH9: TokenMap = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, WETH9_ADDRESS[ChainId.MAINNET], 18, 'WETH', 'Wrapped Ether')
}

export const WNATIVE: TokenMap = {
  [ChainId.MAINNET]: WETH9[ChainId.MAINNET],
}

export const RICE: ChainTokenMap = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, SUSHI_ADDRESS[ChainId.MAINNET], 18, 'RICE', 'Rice Token'),
}
