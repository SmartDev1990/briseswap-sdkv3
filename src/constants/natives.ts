import {
  Avalanche,
  Binance,
  Celo,
  Ether,
  Fantom,
  Fuse,
  Glmr,
  Harmony,
  Heco,
  Kava,
  Matic,
  Movr,
  Okex,
  Palm,
  Telos,
  xDai,
  Metis,
} from '../entities/Native'

import { ChainId } from '../enums'
import { NativeMap } from '../types'

export const NATIVE: NativeMap = {
  [ChainId.MAINNET]: Ether.onChain(ChainId.MAINNET),
}
