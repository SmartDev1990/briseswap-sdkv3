import { AddressMap } from '../types'
import { ChainId } from '../enums'

export const RICE_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
}

export const USDC_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xcf2DF9377A4e3C10e9EA29fDB8879d74C27FCDE7',
}

export const USD_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: USDC_ADDRESS[ChainId.MAINNET],
}

export const WETH9_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710',
}

export const WNATIVE_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: WETH9_ADDRESS[ChainId.MAINNET],
}

export const DAI_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x5d8CEEf69160a9692471670D5f7147157656fF46',
}

export const USDT_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xDe14b85cf78F2ADd2E867FEE40575437D5f10c06',
}

export const MIM_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '',
}

export const FRAX_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '',
}

export const FACTORY_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x05C7E31449Aedd06c39077cc184BA691CA40Aad5',
}

export const ROUTER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x4bf299209f97b5bef24ccd0a55acb72d2c9df94e',
}

export const MASTERCHEF_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xe79a91734296407527E43a74a454E19E52b2c09c',
}

export const BAR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x722f5f012D29Cc4d6464B6a46343fBA3881eaa56',
}

export const MAKER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50',
}

export const TIMELOCK_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x936e1d1bfc2547544a4d28d3d8ce66280e6be6c3',
}

export const BENTOBOX_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x7489907896a65dcccb79c95bd4a00f7e922b8652',
}

export const KASHI_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
}

export const SUSHISWAP_SWAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xf441ca6ed0c071adaa58a89dd9b6cf5a04b9af10',
}

export const SUSHISWAP_MULTISWAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xd7a2043d18a1ce4301f2ebc7fa2741a56cd9de7e',
}

export const SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x71c8ebeda911af79a3fb01655aa4e3c1c31a4525',
}

export const PEGGED_ORACLE_ADDRESS = '0x6cbfbB38498Df0E1e7A4506593cDB02db9001564'

export const SUSHISWAP_TWAP_0_ORACLE_ADDRESS = '0x66F03B0d30838A3fee971928627ea6F59B236065'

export const SUSHISWAP_TWAP_1_ORACLE_ADDRESS = '0x0D51b575591F8f74a2763Ade75D3CDCf6789266f'

export const CHAINLINK_ORACLE_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
}

export const BORING_HELPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
}

export const MINICHEF_ADDRESS: AddressMap = {
  [ChainId.MATIC]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
}

export const MASTERCHEF_V2_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xEF0881eC094552b2e128Cf945EF17a6752B4Ec5d',
}

export const ENS_REGISTRAR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const ZAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xa5d8094cd6846a9691966f22ecd1bb6d7c18dc64',
}

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
}

export const MULTICALL2_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x0c9fa47336a0f6ec6b461bc878f41917e7ac2205',
}

export const BALANCE_FETCHER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xfb9d2a104789563cac593771b4f854c6495b7bef',
}

export const MULTISIG_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x048ac4eb14c480077429cf55e44980953a891f92',
}
