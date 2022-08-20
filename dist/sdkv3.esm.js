import JSBI from 'jsbi';
export { default as JSBI } from 'jsbi';
import invariant from 'tiny-invariant';
import { getAddress, getCreate2Address } from '@ethersproject/address';
import warning from 'tiny-warning';
import _Big from 'big.js';
import _Decimal from 'decimal.js-light';
import toFormat from 'toformat';
import { keccak256, pack } from '@ethersproject/solidity';

var ChainId;

(function (ChainId) {
  ChainId[ChainId["MAINNET"] = 1] = "MAINNET";
  ChainId[ChainId["ROPSTEN"] = 3] = "ROPSTEN";
  ChainId[ChainId["RINKEBY"] = 4] = "RINKEBY";
  ChainId[ChainId["G\xD6RLI"] = 5] = "G\xD6RLI";
  ChainId[ChainId["KOVAN"] = 42] = "KOVAN";
  ChainId[ChainId["MATIC"] = 137] = "MATIC";
  ChainId[ChainId["MATIC_TESTNET"] = 80001] = "MATIC_TESTNET";
  ChainId[ChainId["FANTOM"] = 250] = "FANTOM";
  ChainId[ChainId["FANTOM_TESTNET"] = 4002] = "FANTOM_TESTNET";
  ChainId[ChainId["XDAI"] = 100] = "XDAI";
  ChainId[ChainId["BSC"] = 56] = "BSC";
  ChainId[ChainId["BSC_TESTNET"] = 97] = "BSC_TESTNET";
  ChainId[ChainId["ARBITRUM"] = 42161] = "ARBITRUM";
  ChainId[ChainId["ARBITRUM_TESTNET"] = 79377087078960] = "ARBITRUM_TESTNET";
  ChainId[ChainId["MOONBEAM_TESTNET"] = 1287] = "MOONBEAM_TESTNET";
  ChainId[ChainId["AVALANCHE"] = 43114] = "AVALANCHE";
  ChainId[ChainId["AVALANCHE_TESTNET"] = 43113] = "AVALANCHE_TESTNET";
  ChainId[ChainId["HECO"] = 128] = "HECO";
  ChainId[ChainId["HECO_TESTNET"] = 256] = "HECO_TESTNET";
  ChainId[ChainId["HARMONY"] = 1666600000] = "HARMONY";
  ChainId[ChainId["HARMONY_TESTNET"] = 1666700000] = "HARMONY_TESTNET";
  ChainId[ChainId["OKEX"] = 66] = "OKEX";
  ChainId[ChainId["OKEX_TESTNET"] = 65] = "OKEX_TESTNET";
  ChainId[ChainId["CELO"] = 42220] = "CELO";
  ChainId[ChainId["PALM"] = 11297108109] = "PALM";
  ChainId[ChainId["PALM_TESTNET"] = 11297108099] = "PALM_TESTNET";
  ChainId[ChainId["MOONRIVER"] = 1285] = "MOONRIVER";
  ChainId[ChainId["FUSE"] = 122] = "FUSE";
  ChainId[ChainId["TELOS"] = 40] = "TELOS";
  ChainId[ChainId["HARDHAT"] = 31337] = "HARDHAT";
  ChainId[ChainId["MOONBEAM"] = 1284] = "MOONBEAM";
  ChainId[ChainId["OPTIMISM"] = 10] = "OPTIMISM";
  ChainId[ChainId["KAVA"] = 2222] = "KAVA";
  ChainId[ChainId["METIS"] = 1088] = "METIS";
  ChainId[ChainId["ARBITRUM_NOVA"] = 42170] = "ARBITRUM_NOVA";
})(ChainId || (ChainId = {}));

var ChainKey;

(function (ChainKey) {
  ChainKey["ARBITRUM"] = "arbitrum";
  ChainKey["ARBITRUM_TESTNET"] = "arbitrum-testnet";
  ChainKey["AVALANCHE"] = "avalanche";
  ChainKey["AVALANCHE_TESTNET"] = "avalance-testnet";
  ChainKey["BSC"] = "bsc";
  ChainKey["BSC_TESTNET"] = "bsc-testnet";
  ChainKey["CELO"] = "celo";
  ChainKey["MAINNET"] = "MAINNET";
  ChainKey["FANTOM"] = "fantom";
  ChainKey["FANTOM_TESTNET"] = "fantom-testnet";
  ChainKey["FUSE"] = "fuse";
  ChainKey["G\xD6RLI"] = "goerli";
  ChainKey["HARMONY"] = "harmony";
  ChainKey["HARMONY_TESTNET"] = "harmony-testnet";
  ChainKey["HECO"] = "heco";
  ChainKey["HECO_TESTNET"] = "heco-testnet";
  ChainKey["KOVAN"] = "kovan";
  ChainKey["ROPSTEN"] = "ropsten";
  ChainKey["MATIC"] = "polygon";
  ChainKey["MATIC_TESTNET"] = "matic-testnet";
  ChainKey["MOONBEAM_TESTNET"] = "moonbeam-testnet";
  ChainKey["MOONRIVER"] = "moonriver";
  ChainKey["OKEX"] = "okex";
  ChainKey["OKEX_TESTNET"] = "okex-testnet";
  ChainKey["PALM"] = "palm";
  ChainKey["PALM_TESTNET"] = "palm-testnet";
  ChainKey["RINKEBY"] = "rinkeby";
  ChainKey["TELOS"] = "telos";
  ChainKey["XDAI"] = "xdai";
  ChainKey["MOONBEAM"] = "moonbeam";
  ChainKey["OPTIMISM"] = "optimism";
  ChainKey["KAVA"] = "kava";
  ChainKey["METIS"] = "metis";
  ChainKey["ARBITRUM_NOVA"] = "arbitrum-nova";
})(ChainKey || (ChainKey = {}));

var Rounding;

(function (Rounding) {
  Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding[Rounding["ROUND_UP"] = 3] = "ROUND_UP";
})(Rounding || (Rounding = {}));

var SolidityType;

(function (SolidityType) {
  SolidityType["uint8"] = "uint8";
  SolidityType["uint256"] = "uint256";
})(SolidityType || (SolidityType = {}));

var TradeType;

(function (TradeType) {
  TradeType[TradeType["EXACT_INPUT"] = 0] = "EXACT_INPUT";
  TradeType[TradeType["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
})(TradeType || (TradeType = {}));

var TradeVersion;

(function (TradeVersion) {
  TradeVersion[TradeVersion["V2TRADE"] = 0] = "V2TRADE";
  TradeVersion[TradeVersion["V3TRADE"] = 1] = "V3TRADE";
})(TradeVersion || (TradeVersion = {}));

var _RICE_ADDRESS, _USDC_ADDRESS, _USD_ADDRESS, _WETH9_ADDRESS, _WNATIVE_ADDRESS, _DAI_ADDRESS, _USDT_ADDRESS, _MIM_ADDRESS, _FRAX_ADDRESS, _FACTORY_ADDRESS, _ROUTER_ADDRESS, _MASTERCHEF_ADDRESS, _BAR_ADDRESS, _MAKER_ADDRESS, _TIMELOCK_ADDRESS, _BENTOBOX_ADDRESS, _KASHI_ADDRESS, _SUSHISWAP_SWAPPER_AD, _SUSHISWAP_MULTISWAPP, _SUSHISWAP_MULTI_EXAC, _CHAINLINK_ORACLE_ADD, _BORING_HELPER_ADDRES, _MINICHEF_ADDRESS, _MASTERCHEF_V2_ADDRES, _ENS_REGISTRAR_ADDRES, _ZAPPER_ADDRESS, _MULTICALL2_ADDRESS, _BALANCE_FETCHER_ADDR, _MULTISIG_ADDRESS;
var RICE_ADDRESS = (_RICE_ADDRESS = {}, _RICE_ADDRESS[ChainId.MAINNET] = '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34', _RICE_ADDRESS);
var USDC_ADDRESS = (_USDC_ADDRESS = {}, _USDC_ADDRESS[ChainId.MAINNET] = '0xcf2DF9377A4e3C10e9EA29fDB8879d74C27FCDE7', _USDC_ADDRESS);
var USD_ADDRESS = (_USD_ADDRESS = {}, _USD_ADDRESS[ChainId.MAINNET] = USDC_ADDRESS[ChainId.MAINNET], _USD_ADDRESS);
var WETH9_ADDRESS = (_WETH9_ADDRESS = {}, _WETH9_ADDRESS[ChainId.MAINNET] = '0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710', _WETH9_ADDRESS);
var WNATIVE_ADDRESS = (_WNATIVE_ADDRESS = {}, _WNATIVE_ADDRESS[ChainId.MAINNET] = WETH9_ADDRESS[ChainId.MAINNET], _WNATIVE_ADDRESS);
var DAI_ADDRESS = (_DAI_ADDRESS = {}, _DAI_ADDRESS[ChainId.MAINNET] = '0x5d8CEEf69160a9692471670D5f7147157656fF46', _DAI_ADDRESS);
var USDT_ADDRESS = (_USDT_ADDRESS = {}, _USDT_ADDRESS[ChainId.MAINNET] = '0xDe14b85cf78F2ADd2E867FEE40575437D5f10c06', _USDT_ADDRESS);
var MIM_ADDRESS = (_MIM_ADDRESS = {}, _MIM_ADDRESS[ChainId.MAINNET] = '', _MIM_ADDRESS);
var FRAX_ADDRESS = (_FRAX_ADDRESS = {}, _FRAX_ADDRESS[ChainId.MAINNET] = '', _FRAX_ADDRESS);
var FACTORY_ADDRESS = (_FACTORY_ADDRESS = {}, _FACTORY_ADDRESS[ChainId.MAINNET] = '0x05C7E31449Aedd06c39077cc184BA691CA40Aad5', _FACTORY_ADDRESS);
var ROUTER_ADDRESS = (_ROUTER_ADDRESS = {}, _ROUTER_ADDRESS[ChainId.MAINNET] = '0x4bf299209f97b5bef24ccd0a55acb72d2c9df94e', _ROUTER_ADDRESS);
var MASTERCHEF_ADDRESS = (_MASTERCHEF_ADDRESS = {}, _MASTERCHEF_ADDRESS[ChainId.MAINNET] = '0xe79a91734296407527E43a74a454E19E52b2c09c', _MASTERCHEF_ADDRESS);
var BAR_ADDRESS = (_BAR_ADDRESS = {}, _BAR_ADDRESS[ChainId.MAINNET] = '0x722f5f012D29Cc4d6464B6a46343fBA3881eaa56', _BAR_ADDRESS);
var MAKER_ADDRESS = (_MAKER_ADDRESS = {}, _MAKER_ADDRESS[ChainId.MAINNET] = '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50', _MAKER_ADDRESS);
var TIMELOCK_ADDRESS = (_TIMELOCK_ADDRESS = {}, _TIMELOCK_ADDRESS[ChainId.MAINNET] = '0x936e1d1bfc2547544a4d28d3d8ce66280e6be6c3', _TIMELOCK_ADDRESS);
var BENTOBOX_ADDRESS = (_BENTOBOX_ADDRESS = {}, _BENTOBOX_ADDRESS[ChainId.MAINNET] = '0x7489907896a65dcccb79c95bd4a00f7e922b8652', _BENTOBOX_ADDRESS);
var KASHI_ADDRESS = (_KASHI_ADDRESS = {}, _KASHI_ADDRESS[ChainId.MAINNET] = '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42', _KASHI_ADDRESS);
var SUSHISWAP_SWAPPER_ADDRESS = (_SUSHISWAP_SWAPPER_AD = {}, _SUSHISWAP_SWAPPER_AD[ChainId.MAINNET] = '0xf441ca6ed0c071adaa58a89dd9b6cf5a04b9af10', _SUSHISWAP_SWAPPER_AD);
var SUSHISWAP_MULTISWAPPER_ADDRESS = (_SUSHISWAP_MULTISWAPP = {}, _SUSHISWAP_MULTISWAPP[ChainId.MAINNET] = '0xd7a2043d18a1ce4301f2ebc7fa2741a56cd9de7e', _SUSHISWAP_MULTISWAPP);
var SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS = (_SUSHISWAP_MULTI_EXAC = {}, _SUSHISWAP_MULTI_EXAC[ChainId.MAINNET] = '0x71c8ebeda911af79a3fb01655aa4e3c1c31a4525', _SUSHISWAP_MULTI_EXAC);
var PEGGED_ORACLE_ADDRESS = '0x6cbfbB38498Df0E1e7A4506593cDB02db9001564';
var SUSHISWAP_TWAP_0_ORACLE_ADDRESS = '0x66F03B0d30838A3fee971928627ea6F59B236065';
var SUSHISWAP_TWAP_1_ORACLE_ADDRESS = '0x0D51b575591F8f74a2763Ade75D3CDCf6789266f';
var CHAINLINK_ORACLE_ADDRESS = (_CHAINLINK_ORACLE_ADD = {}, _CHAINLINK_ORACLE_ADD[ChainId.MAINNET] = '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB', _CHAINLINK_ORACLE_ADD);
var BORING_HELPER_ADDRESS = (_BORING_HELPER_ADDRES = {}, _BORING_HELPER_ADDRES[ChainId.MAINNET] = '0x8794a289c57eb01dfda6f8a6d21978f36abdd5aa', _BORING_HELPER_ADDRES);
var MINICHEF_ADDRESS = (_MINICHEF_ADDRESS = {}, _MINICHEF_ADDRESS[ChainId.MATIC] = '0x870cfa0f8D013A4C84eF026B3414ee06F2BE8121', _MINICHEF_ADDRESS);
var MASTERCHEF_V2_ADDRESS = (_MASTERCHEF_V2_ADDRES = {}, _MASTERCHEF_V2_ADDRES[ChainId.MAINNET] = '0xEF0881eC094552b2e128Cf945EF17a6752B4Ec5d', _MASTERCHEF_V2_ADDRES);
var ENS_REGISTRAR_ADDRESS = (_ENS_REGISTRAR_ADDRES = {}, _ENS_REGISTRAR_ADDRES[ChainId.MAINNET] = '0xc30b62e221e65b862af6bb0c3fa950b9cc2e6a9d', _ENS_REGISTRAR_ADDRES);
var ZAPPER_ADDRESS = (_ZAPPER_ADDRESS = {}, _ZAPPER_ADDRESS[ChainId.MAINNET] = '0xa5d8094cd6846a9691966f22ecd1bb6d7c18dc64', _ZAPPER_ADDRESS);
var MERKLE_DISTRIBUTOR_ADDRESS = {};
var MULTICALL2_ADDRESS = (_MULTICALL2_ADDRESS = {}, _MULTICALL2_ADDRESS[ChainId.MAINNET] = '0x0c9fa47336a0f6ec6b461bc878f41917e7ac2205', _MULTICALL2_ADDRESS);
var BALANCE_FETCHER_ADDRESS = (_BALANCE_FETCHER_ADDR = {}, _BALANCE_FETCHER_ADDR[ChainId.MAINNET] = '0xfb9d2a104789563cac593771b4f854c6495b7bef', _BALANCE_FETCHER_ADDR);
var MULTISIG_ADDRESS = (_MULTISIG_ADDRESS = {}, _MULTISIG_ADDRESS[ChainId.MAINNET] = '0x048ac4eb14c480077429cf55e44980953a891f92', _MULTISIG_ADDRESS);

var _CHAIN_KEY;
var CHAIN_KEY = (_CHAIN_KEY = {}, _CHAIN_KEY[ChainId.MAINNET] = ChainKey.MAINNET, _CHAIN_KEY);

var _INIT_CODE_HASH;
var INIT_CODE_HASH = (_INIT_CODE_HASH = {}, _INIT_CODE_HASH[ChainId.MAINNET] = '0x90618374b23f01465ee4d1918e1b8d86f6343aa379f21db850c34634e2a2194b', _INIT_CODE_HASH);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */

var AbstractCurrency =
/**
 * Constructs an instance of the base class `BaseCurrency`.
 * @param chainId the chain ID on which this currency resides
 * @param decimals decimals of the currency
 * @param symbol symbol of the currency
 * @param name of the currency
 */
function AbstractCurrency(chainId, decimals, symbol, name) {
  !Number.isSafeInteger(chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
  !(decimals >= 0 && decimals < 255 && Number.isInteger(decimals)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DECIMALS') : invariant(false) : void 0;
  this.chainId = chainId;
  this.decimals = decimals;
  this.symbol = symbol;
  this.name = name;
};

/**
 * Represents the native currency of the chain on which it resides, e.g.
 */

var NativeCurrency = /*#__PURE__*/function (_AbstractCurrency) {
  _inheritsLoose(NativeCurrency, _AbstractCurrency);

  function NativeCurrency() {
    var _this;

    _this = _AbstractCurrency.apply(this, arguments) || this;
    _this.isNative = true;
    _this.isToken = false;
    return _this;
  }

  return NativeCurrency;
}(AbstractCurrency);

function validateAndParseAddress(address) {
  try {
    var checksummedAddress = getAddress(address);
    process.env.NODE_ENV !== "production" ? warning(address === checksummedAddress, address + " is not checksummed.") : void 0;
    return checksummedAddress;
  } catch (error) {
     process.env.NODE_ENV !== "production" ? invariant(false, address + " is not a valid address.") : invariant(false) ;
  }
}

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */

var Token = /*#__PURE__*/function (_AbstractCurrency) {
  _inheritsLoose(Token, _AbstractCurrency);

  function Token(chainId, address, decimals, symbol, name) {
    var _this;

    _this = _AbstractCurrency.call(this, chainId, decimals, symbol, name) || this;
    _this.isNative = false;
    _this.isToken = true;
    _this.chainId = chainId;
    _this.address = validateAndParseAddress(address);
    return _this;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */


  var _proto = Token.prototype;

  _proto.equals = function equals(other) {
    return other.isToken && this.chainId === other.chainId && this.address === other.address;
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  ;

  _proto.sortsBefore = function sortsBefore(other) {
    !(this.chainId === other.chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_IDS') : invariant(false) : void 0;
    !(this.address !== other.address) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ADDRESSES') : invariant(false) : void 0;
    return this.address.toLowerCase() < other.address.toLowerCase();
  }
  /**
   * Return this token, which does not need to be wrapped
   */
  ;

  _createClass(Token, [{
    key: "wrapped",
    get: function get() {
      return this;
    }
  }]);

  return Token;
}(AbstractCurrency);
/**
 * Compares two currencies for equality
 */

function currencyEquals(currencyA, currencyB) {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB);
  } else if (currencyA instanceof Token) {
    return false;
  } else if (currencyB instanceof Token) {
    return false;
  } else {
    return currencyA === currencyB;
  }
}

var _USDC, _WETH, _WNATIVE, _RICE;
var USDC = (_USDC = {}, _USDC[ChainId.MAINNET] = /*#__PURE__*/new Token(ChainId.MAINNET, USDC_ADDRESS[ChainId.MAINNET], 6, 'USDC', 'USD Coin'), _USDC);
var WETH9 = (_WETH = {}, _WETH[ChainId.MAINNET] = /*#__PURE__*/new Token(ChainId.MAINNET, WETH9_ADDRESS[ChainId.MAINNET], 18, 'WETH', 'Wrapped Ether'), _WETH);
var WNATIVE = (_WNATIVE = {}, _WNATIVE[ChainId.MAINNET] = WETH9[ChainId.MAINNET], _WNATIVE);
var RICE = (_RICE = {}, _RICE[ChainId.MAINNET] = /*#__PURE__*/new Token(ChainId.MAINNET, RICE_ADDRESS[ChainId.MAINNET], 18, 'RICE', 'Rice Token'), _RICE);

var Avalanche = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Avalanche, _NativeCurrency);

  function Avalanche(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'AVAX', 'Avalanche') || this;
  }

  Avalanche.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Avalanche(chainId);
  };

  var _proto = Avalanche.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Avalanche, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Avalanche;
}(NativeCurrency);
Avalanche._cache = {};

var Binance = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Binance, _NativeCurrency);

  function Binance(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'BNB', 'Binance Coin') || this;
  }

  Binance.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Binance(chainId);
  };

  var _proto = Binance.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Binance, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Binance;
}(NativeCurrency);
Binance._cache = {};

var Celo = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Celo, _NativeCurrency);

  function Celo(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'CELO', 'Celo') || this;
  }

  Celo.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Celo(chainId);
  };

  var _proto = Celo.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Celo, [{
    key: "wrapped",
    get: function get() {
      var wcelo = WNATIVE[this.chainId];
      !!!wcelo ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wcelo;
    }
  }]);

  return Celo;
}(NativeCurrency);
Celo._cache = {};

/**
 * Ether is the main usage of a 'native' currency, i.e. for MAINNET mainnet and all testnets
 */

var Ether = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Ether, _NativeCurrency);

  function Ether(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'BRISE', 'Brise') || this;
  }

  Ether.onChain = function onChain(chainId) {
    var _this$_etherCache$cha;

    return (_this$_etherCache$cha = this._etherCache[chainId]) != null ? _this$_etherCache$cha : this._etherCache[chainId] = new Ether(chainId);
  };

  var _proto = Ether.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Ether, [{
    key: "wrapped",
    get: function get() {
      var weth9 = WETH9[this.chainId];
      !!!weth9 ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return weth9;
    }
  }]);

  return Ether;
}(NativeCurrency);
Ether._etherCache = {};

var Fantom = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Fantom, _NativeCurrency);

  function Fantom(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'FTM', 'Fantom') || this;
  }

  Fantom.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Fantom(chainId);
  };

  var _proto = Fantom.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Fantom, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Fantom;
}(NativeCurrency);
Fantom._cache = {};

var Harmony = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Harmony, _NativeCurrency);

  function Harmony(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'ONE', 'Harmony') || this;
  }

  Harmony.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Harmony(chainId);
  };

  var _proto = Harmony.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Harmony, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Harmony;
}(NativeCurrency);
Harmony._cache = {};

var Heco = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Heco, _NativeCurrency);

  function Heco(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'HT', 'Huobi Token') || this;
  }

  Heco.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Heco(chainId);
  };

  var _proto = Heco.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Heco, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Heco;
}(NativeCurrency);
Heco._cache = {};

var Matic = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Matic, _NativeCurrency);

  function Matic(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'MATIC', 'Matic') || this;
  }

  Matic.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Matic(chainId);
  };

  var _proto = Matic.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Matic, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Matic;
}(NativeCurrency);
Matic._cache = {};

var Movr = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Movr, _NativeCurrency);

  function Movr(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'MOVR', 'Moonriver') || this;
  }

  Movr.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Movr(chainId);
  };

  var _proto = Movr.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Movr, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Movr;
}(NativeCurrency);
Movr._cache = {};

var Okex = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Okex, _NativeCurrency);

  function Okex(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'OKT', 'OKExChain') || this;
  }

  Okex.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Okex(chainId);
  };

  var _proto = Okex.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Okex, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Okex;
}(NativeCurrency);
Okex._cache = {};

var xDai = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(xDai, _NativeCurrency);

  function xDai(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'XDAI', 'xDai') || this;
  }

  xDai.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new xDai(chainId);
  };

  var _proto = xDai.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(xDai, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return xDai;
}(NativeCurrency);
xDai._cache = {};

var Palm = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Palm, _NativeCurrency);

  function Palm(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'PALM', 'Palm') || this;
  }

  Palm.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Palm(chainId);
  };

  var _proto = Palm.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Palm, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Palm;
}(NativeCurrency);
Palm._cache = {};

var Fuse = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Fuse, _NativeCurrency);

  function Fuse(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'FUSE', 'Fuse') || this;
  }

  Fuse.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Fuse(chainId);
  };

  var _proto = Fuse.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Fuse, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Fuse;
}(NativeCurrency);
Fuse._cache = {};

var Telos = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Telos, _NativeCurrency);

  function Telos(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'TLOS', 'Telos') || this;
  }

  Telos.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Telos(chainId);
  };

  var _proto = Telos.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Telos, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Telos;
}(NativeCurrency);
Telos._cache = {};

var Glmr = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Glmr, _NativeCurrency);

  function Glmr(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'GLMR', 'Glimmer') || this;
  }

  Glmr.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Glmr(chainId);
  };

  var _proto = Glmr.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Glmr, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Glmr;
}(NativeCurrency);
Glmr._cache = {};

var Kava = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Kava, _NativeCurrency);

  function Kava(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'KAVA', 'Kava') || this;
  }

  Kava.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Kava(chainId);
  };

  var _proto = Kava.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Kava, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Kava;
}(NativeCurrency);
Kava._cache = {};

var Metis = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Metis, _NativeCurrency);

  function Metis(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'METIS', 'Metis') || this;
  }

  Metis.onChain = function onChain(chainId) {
    var _this$_cache$chainId;

    return (_this$_cache$chainId = this._cache[chainId]) != null ? _this$_cache$chainId : this._cache[chainId] = new Metis(chainId);
  };

  var _proto = Metis.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Metis, [{
    key: "wrapped",
    get: function get() {
      var wnative = WNATIVE[this.chainId];
      !!!wnative ? process.env.NODE_ENV !== "production" ? invariant(false, 'WRAPPED') : invariant(false) : void 0;
      return wnative;
    }
  }]);

  return Metis;
}(NativeCurrency);
Metis._cache = {};

var _NATIVE;
var NATIVE = (_NATIVE = {}, _NATIVE[ChainId.MAINNET] = /*#__PURE__*/Ether.onChain(ChainId.MAINNET), _NATIVE);

var MaxUint256 = /*#__PURE__*/JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'); // exports for internal consumption

var ZERO = /*#__PURE__*/JSBI.BigInt(0);
var ONE = /*#__PURE__*/JSBI.BigInt(1);
var TWO = /*#__PURE__*/JSBI.BigInt(2);
var THREE = /*#__PURE__*/JSBI.BigInt(3);
var FIVE = /*#__PURE__*/JSBI.BigInt(5);
var TEN = /*#__PURE__*/JSBI.BigInt(10);
var _100 = /*#__PURE__*/JSBI.BigInt(100);
var _997 = /*#__PURE__*/JSBI.BigInt(997);
var _1000 = /*#__PURE__*/JSBI.BigInt(1000);
var MINIMUM_LIQUIDITY = /*#__PURE__*/JSBI.BigInt(1000);

var _SOLIDITY_TYPE_MAXIMA;
var SOLIDITY_TYPE_MAXIMA = (_SOLIDITY_TYPE_MAXIMA = {}, _SOLIDITY_TYPE_MAXIMA[SolidityType.uint8] = /*#__PURE__*/JSBI.BigInt('0xff'), _SOLIDITY_TYPE_MAXIMA[SolidityType.uint256] = /*#__PURE__*/JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'), _SOLIDITY_TYPE_MAXIMA);

// see https://stackoverflow.com/a/41102306
var CAN_SET_PROTOTYPE = ('setPrototypeOf' in Object);
/**
 * Indicates that the pair has insufficient reserves for a desired output amount. I.e. the amount of output cannot be
 * obtained by sending any amount of input.
 */

var InsufficientReservesError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(InsufficientReservesError, _Error);

  function InsufficientReservesError() {
    var _this;

    _this = _Error.call(this) || this;
    _this.isInsufficientReservesError = true;
    _this.name = _this.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this), (this instanceof InsufficientReservesError ? this.constructor : void 0).prototype);
    return _this;
  }

  return InsufficientReservesError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Indicates that the input amount is too small to produce any amount of output. I.e. the amount of input sent is less
 * than the price of a single unit of output after fees.
 */

var InsufficientInputAmountError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(InsufficientInputAmountError, _Error2);

  function InsufficientInputAmountError() {
    var _this2;

    _this2 = _Error2.call(this) || this;
    _this2.isInsufficientInputAmountError = true;
    _this2.name = _this2.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this2), (this instanceof InsufficientInputAmountError ? this.constructor : void 0).prototype);
    return _this2;
  }

  return InsufficientInputAmountError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var _toSignificantRoundin, _toFixedRounding;
var Decimal = /*#__PURE__*/toFormat(_Decimal);
var Big = /*#__PURE__*/toFormat(_Big);
Big.strict = true;
var toSignificantRounding = (_toSignificantRoundin = {}, _toSignificantRoundin[Rounding.ROUND_DOWN] = Decimal.ROUND_DOWN, _toSignificantRoundin[Rounding.ROUND_HALF_UP] = Decimal.ROUND_HALF_UP, _toSignificantRoundin[Rounding.ROUND_UP] = Decimal.ROUND_UP, _toSignificantRoundin);
var toFixedRounding = (_toFixedRounding = {}, _toFixedRounding[Rounding.ROUND_DOWN] = 0, _toFixedRounding[Rounding.ROUND_HALF_UP] = 1, _toFixedRounding[Rounding.ROUND_UP] = 3, _toFixedRounding);
var Fraction = /*#__PURE__*/function () {
  function Fraction(numerator, denominator) {
    if (denominator === void 0) {
      denominator = JSBI.BigInt(1);
    }

    this.numerator = JSBI.BigInt(numerator);
    this.denominator = JSBI.BigInt(denominator);
  }

  Fraction.tryParseFraction = function tryParseFraction(fractionish) {
    if (fractionish instanceof JSBI || typeof fractionish === 'number' || typeof fractionish === 'string') return new Fraction(fractionish);
    if ('numerator' in fractionish && 'denominator' in fractionish) return fractionish;
    throw new Error('Could not parse fraction');
  } // performs floor division
  ;

  var _proto = Fraction.prototype;

  _proto.invert = function invert() {
    return new Fraction(this.denominator, this.numerator);
  };

  _proto.add = function add(other) {
    var otherParsed = Fraction.tryParseFraction(other);

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.add(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.add(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.subtract = function subtract(other) {
    var otherParsed = Fraction.tryParseFraction(other);

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.subtract(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.lessThan = function lessThan(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return JSBI.lessThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.equalTo = function equalTo(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return JSBI.equal(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.greaterThan = function greaterThan(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return JSBI.greaterThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.multiply = function multiply(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.numerator), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.divide = function divide(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(this.denominator, otherParsed.numerator));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(significantDigits) ? process.env.NODE_ENV !== "production" ? invariant(false, significantDigits + " is not an integer.") : invariant(false) : void 0;
    !(significantDigits > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, significantDigits + " is not positive.") : invariant(false) : void 0;
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding]
    });
    var quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(decimalPlaces) ? process.env.NODE_ENV !== "production" ? invariant(false, decimalPlaces + " is not an integer.") : invariant(false) : void 0;
    !(decimalPlaces >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, decimalPlaces + " is negative.") : invariant(false) : void 0;
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  }
  /**
   * Helper method for converting any super class back to a fraction
   */
  ;

  _createClass(Fraction, [{
    key: "quotient",
    get: function get() {
      return JSBI.divide(this.numerator, this.denominator);
    } // remainder after floor division

  }, {
    key: "remainder",
    get: function get() {
      return new Fraction(JSBI.remainder(this.numerator, this.denominator), this.denominator);
    }
  }, {
    key: "asFraction",
    get: function get() {
      return new Fraction(this.numerator, this.denominator);
    }
  }]);

  return Fraction;
}();

var Big$1 = /*#__PURE__*/toFormat(_Big);
Big$1.strict = true;
var CurrencyAmount = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(CurrencyAmount, _Fraction);

  function CurrencyAmount(currency, numerator, denominator) {
    var _this;

    _this = _Fraction.call(this, numerator, denominator) || this;
    !JSBI.lessThanOrEqual(_this.quotient, MaxUint256) ? process.env.NODE_ENV !== "production" ? invariant(false, 'AMOUNT') : invariant(false) : void 0;
    _this.currency = currency;
    _this.decimalScale = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(currency.decimals));
    return _this;
  }
  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */


  CurrencyAmount.fromRawAmount = function fromRawAmount(currency, rawAmount) {
    return new CurrencyAmount(currency, rawAmount);
  }
  /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param currency the currency
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */
  ;

  CurrencyAmount.fromFractionalAmount = function fromFractionalAmount(currency, numerator, denominator) {
    return new CurrencyAmount(currency, numerator, denominator);
  };

  var _proto = CurrencyAmount.prototype;

  _proto.add = function add(other) {
    !this.currency.equals(other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) : void 0;

    var added = _Fraction.prototype.add.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, added.numerator, added.denominator);
  };

  _proto.subtract = function subtract(other) {
    !this.currency.equals(other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) : void 0;

    var subtracted = _Fraction.prototype.subtract.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, subtracted.numerator, subtracted.denominator);
  };

  _proto.multiply = function multiply(other) {
    var multiplied = _Fraction.prototype.multiply.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, multiplied.numerator, multiplied.denominator);
  };

  _proto.divide = function divide(other) {
    var divided = _Fraction.prototype.divide.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, divided.numerator, divided.denominator);
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    return _Fraction.prototype.divide.call(this, this.decimalScale).toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = this.currency.decimals;
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    !(decimalPlaces <= this.currency.decimals) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DECIMALS') : invariant(false) : void 0;
    return _Fraction.prototype.divide.call(this, this.decimalScale).toFixed(decimalPlaces, format, rounding);
  };

  _proto.toExact = function toExact(format) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    Big$1.DP = this.currency.decimals;
    return new Big$1(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format);
  };

  /**
   * Returns a string representation of the address and currency amount.
   * Useful in cases where a dependency is needed to detect changes (e.g. useEffect).
   * @return string [0x6B3595068778DD592e39A122f4f5a5cF09C90fE2 - 1323.94]
   */
  _proto.serialize = function serialize() {
    return "[" + this.currency.wrapped.address + " - " + this.toExact() + "]";
  };

  _createClass(CurrencyAmount, [{
    key: "wrapped",
    get: function get() {
      if (this.currency.isToken) return this;
      return CurrencyAmount.fromFractionalAmount(this.currency.wrapped, this.numerator, this.denominator);
    }
  }]);

  return CurrencyAmount;
}(Fraction);

var Price = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Price, _Fraction);

  /**
   * Construct a price, either with the base and quote currency amount, or the
   * @param args
   */
  function Price() {
    var _this;

    var baseCurrency, quoteCurrency, denominator, numerator;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 4) {
      baseCurrency = args[0];
      quoteCurrency = args[1];
      denominator = args[2];
      numerator = args[3];
    } else {
      var result = args[0].quoteAmount.divide(args[0].baseAmount);
      var _ref = [args[0].baseAmount.currency, args[0].quoteAmount.currency, result.denominator, result.numerator];
      baseCurrency = _ref[0];
      quoteCurrency = _ref[1];
      denominator = _ref[2];
      numerator = _ref[3];
    }

    _this = _Fraction.call(this, numerator, denominator) || this;
    _this.baseCurrency = baseCurrency;
    _this.quoteCurrency = quoteCurrency;
    _this.scalar = new Fraction(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(baseCurrency.decimals)), JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(quoteCurrency.decimals)));
    return _this;
  }
  /**
   * Flip the price, switching the base and quote currency
   */


  var _proto = Price.prototype;

  _proto.invert = function invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  }
  /**
   * Multiply the price by another price, returning a new price. The other price must have the same base currency as this price's quote currency
   * @param other the other price
   */
  ;

  _proto.multiply = function multiply(other) {
    !this.quoteCurrency.equals(other.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    var fraction = _Fraction.prototype.multiply.call(this, other);

    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  }
  /**
   * Return the amount of quote currency corresponding to a given amount of the base currency
   * @param currencyAmount the amount of base currency to quote against the price
   */
  ;

  _proto.quote = function quote(currencyAmount) {
    !currencyAmount.currency.equals(this.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    var result = _Fraction.prototype.multiply.call(this, currencyAmount);

    return CurrencyAmount.fromFractionalAmount(this.quoteCurrency, result.numerator, result.denominator);
  }
  /**
   * Get the value scaled by decimals for formatting
   * @private
   */
  ;

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    return this.adjustedForDecimals.toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 4;
    }

    return this.adjustedForDecimals.toFixed(decimalPlaces, format, rounding);
  };

  _createClass(Price, [{
    key: "adjustedForDecimals",
    get: function get() {
      return _Fraction.prototype.multiply.call(this, this.scalar);
    }
  }]);

  return Price;
}(Fraction);

var computePairAddress = function computePairAddress(_ref) {
  var factoryAddress = _ref.factoryAddress,
      tokenA = _ref.tokenA,
      tokenB = _ref.tokenB;

  var _ref2 = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA],
      token0 = _ref2[0],
      token1 = _ref2[1]; // does safety checks


  return getCreate2Address(factoryAddress, keccak256(['bytes'], [pack(['address', 'address'], [token0.address, token1.address])]), INIT_CODE_HASH[token0.chainId]);
};

var MAX_SAFE_INTEGER = /*#__PURE__*/JSBI.BigInt(Number.MAX_SAFE_INTEGER);
/**
 * Computes floor(sqrt(value))
 * @param value the value for which to compute the square root, rounded down
 */

function sqrt(value) {
  !JSBI.greaterThanOrEqual(value, ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'NEGATIVE') : invariant(false) : void 0; // rely on built in sqrt if possible

  if (JSBI.lessThan(value, MAX_SAFE_INTEGER)) {
    return JSBI.BigInt(Math.floor(Math.sqrt(JSBI.toNumber(value))));
  }

  var z;
  var x;
  z = value;
  x = JSBI.add(JSBI.divide(value, TWO), ONE);

  while (JSBI.lessThan(x, z)) {
    z = x;
    x = JSBI.divide(JSBI.add(JSBI.divide(value, x), x), TWO);
  }

  return z;
}
/**
 * Returns the smallest member of the array
 * @param values the values from which the smallest gets returned
 * @returns the smallest memmber of the array
 */

function minimum() {
  var lowest = arguments.length <= 0 ? undefined : arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    var value = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (JSBI.LT(value, lowest)) {
      lowest = value;
    }
  }

  return lowest;
}
/**
 * Returns the biggest member of the array
 * @param values the values from which the biggest gets returned
 * @returns the biggest memmber of the array
 */

function maximum() {
  var highest = arguments.length <= 0 ? undefined : arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    var value = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (JSBI.GT(value, highest)) {
      highest = value;
    }
  }

  return highest;
}
function difference(a, b) {
  if (JSBI.greaterThan(a, b)) {
    return JSBI.subtract(a, b);
  }

  return JSBI.subtract(b, a);
}

var Pair = /*#__PURE__*/function () {
  function Pair(currencyAmountA, currencyAmountB) {
    var currencyAmounts = currencyAmountA.currency.sortsBefore(currencyAmountB.currency) // does safety checks
    ? [currencyAmountA, currencyAmountB] : [currencyAmountB, currencyAmountA];
    this.liquidityToken = new Token(currencyAmounts[0].currency.chainId, Pair.getAddress(currencyAmounts[0].currency, currencyAmounts[1].currency), 18, 'RICE-V2', 'Riceswap V2');
    this.tokenAmounts = currencyAmounts;
  }

  Pair.getAddress = function getAddress(tokenA, tokenB) {
    return computePairAddress({
      factoryAddress: FACTORY_ADDRESS[tokenA.chainId],
      tokenA: tokenA,
      tokenB: tokenB
    });
  }
  /**
   * Returns true if the token is either token0 or token1
   * @param token to check
   */
  ;

  var _proto = Pair.prototype;

  _proto.involvesToken = function involvesToken(token) {
    return token.equals(this.token0) || token.equals(this.token1);
  }
  /**
   * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
   */
  ;

  /**
   * Return the price of the given token in terms of the other token in the pair.
   * @param token token to return price of
   */
  _proto.priceOf = function priceOf(token) {
    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return token.equals(this.token0) ? this.token0Price : this.token1Price;
  }
  /**
   * Returns the chain ID of the tokens in the pair.
   */
  ;

  _proto.reserveOf = function reserveOf(token) {
    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return token.equals(this.token0) ? this.reserve0 : this.reserve1;
  };

  _proto.getOutputAmount = function getOutputAmount(inputAmount) {
    !this.involvesToken(inputAmount.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (JSBI.equal(this.reserve0.quotient, ZERO) || JSBI.equal(this.reserve1.quotient, ZERO)) {
      throw new InsufficientReservesError();
    }

    var inputReserve = this.reserveOf(inputAmount.currency);
    var outputReserve = this.reserveOf(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
    var inputAmountWithFee = JSBI.multiply(inputAmount.quotient, _997);
    var numerator = JSBI.multiply(inputAmountWithFee, outputReserve.quotient);
    var denominator = JSBI.add(JSBI.multiply(inputReserve.quotient, _1000), inputAmountWithFee);
    var outputAmount = CurrencyAmount.fromRawAmount(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0, JSBI.divide(numerator, denominator));

    if (JSBI.equal(outputAmount.quotient, ZERO)) {
      throw new InsufficientInputAmountError();
    }

    return [outputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  };

  _proto.getInputAmount = function getInputAmount(outputAmount) {
    !this.involvesToken(outputAmount.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (JSBI.equal(this.reserve0.quotient, ZERO) || JSBI.equal(this.reserve1.quotient, ZERO) || JSBI.greaterThanOrEqual(outputAmount.quotient, this.reserveOf(outputAmount.currency).quotient)) {
      throw new InsufficientReservesError();
    }

    var outputReserve = this.reserveOf(outputAmount.currency);
    var inputReserve = this.reserveOf(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
    var numerator = JSBI.multiply(JSBI.multiply(inputReserve.quotient, outputAmount.quotient), _1000);
    var denominator = JSBI.multiply(JSBI.subtract(outputReserve.quotient, outputAmount.quotient), _997);
    var inputAmount = CurrencyAmount.fromRawAmount(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0, JSBI.add(JSBI.divide(numerator, denominator), ONE));
    return [inputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  };

  _proto.getLiquidityMinted = function getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
    !totalSupply.currency.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    var tokenAmounts = tokenAmountA.currency.sortsBefore(tokenAmountB.currency) // does safety checks
    ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    !(tokenAmounts[0].currency.equals(this.token0) && tokenAmounts[1].currency.equals(this.token1)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    var liquidity;

    if (JSBI.equal(totalSupply.quotient, ZERO)) {
      liquidity = JSBI.subtract(sqrt(JSBI.multiply(tokenAmounts[0].quotient, tokenAmounts[1].quotient)), MINIMUM_LIQUIDITY);
    } else {
      var amount0 = JSBI.divide(JSBI.multiply(tokenAmounts[0].quotient, totalSupply.quotient), this.reserve0.quotient);
      var amount1 = JSBI.divide(JSBI.multiply(tokenAmounts[1].quotient, totalSupply.quotient), this.reserve1.quotient);
      liquidity = JSBI.lessThanOrEqual(amount0, amount1) ? amount0 : amount1;
      console.log({
        amount0: amount0.toString(),
        amount1: amount1.toString(),
        liquidity: liquidity.toString(),
        totalSupply: totalSupply.quotient.toString(),
        kLast: sqrt(JSBI.multiply(this.tokenAmounts[0].quotient, this.tokenAmounts[1].quotient))
      });
    }

    if (!JSBI.greaterThan(liquidity, ZERO)) {
      throw new InsufficientInputAmountError();
    }

    return CurrencyAmount.fromRawAmount(this.liquidityToken, liquidity);
  };

  _proto.getLiquidityValue = function getLiquidityValue(token, totalSupply, liquidity, feeOn, kLast) {
    if (feeOn === void 0) {
      feeOn = false;
    }

    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    !totalSupply.currency.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOTAL_SUPPLY') : invariant(false) : void 0;
    !liquidity.currency.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    !JSBI.lessThanOrEqual(liquidity.quotient, totalSupply.quotient) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    var totalSupplyAdjusted;

    if (!feeOn) {
      totalSupplyAdjusted = totalSupply;
    } else {
      !!!kLast ? process.env.NODE_ENV !== "production" ? invariant(false, 'K_LAST') : invariant(false) : void 0;
      var kLastParsed = JSBI.BigInt(kLast);

      if (!JSBI.equal(kLastParsed, ZERO)) {
        var rootK = sqrt(JSBI.multiply(this.reserve0.quotient, this.reserve1.quotient));
        var rootKLast = sqrt(kLastParsed);

        if (JSBI.greaterThan(rootK, rootKLast)) {
          var numerator = JSBI.multiply(totalSupply.quotient, JSBI.subtract(rootK, rootKLast));
          var denominator = JSBI.add(JSBI.multiply(rootK, FIVE), rootKLast);
          var feeLiquidity = JSBI.divide(numerator, denominator);
          totalSupplyAdjusted = totalSupply.add(CurrencyAmount.fromRawAmount(this.liquidityToken, feeLiquidity));
        } else {
          totalSupplyAdjusted = totalSupply;
        }
      } else {
        totalSupplyAdjusted = totalSupply;
      }
    }

    return CurrencyAmount.fromRawAmount(token, JSBI.divide(JSBI.multiply(liquidity.quotient, this.reserveOf(token).quotient), totalSupplyAdjusted.quotient));
  };

  _createClass(Pair, [{
    key: "token0Price",
    get: function get() {
      var result = this.tokenAmounts[1].divide(this.tokenAmounts[0]);
      return new Price(this.token0, this.token1, result.denominator, result.numerator);
    }
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */

  }, {
    key: "token1Price",
    get: function get() {
      var result = this.tokenAmounts[0].divide(this.tokenAmounts[1]);
      return new Price(this.token1, this.token0, result.denominator, result.numerator);
    }
  }, {
    key: "chainId",
    get: function get() {
      return this.token0.chainId;
    }
  }, {
    key: "token0",
    get: function get() {
      return this.tokenAmounts[0].currency;
    }
  }, {
    key: "token1",
    get: function get() {
      return this.tokenAmounts[1].currency;
    }
  }, {
    key: "reserve0",
    get: function get() {
      return this.tokenAmounts[0];
    }
  }, {
    key: "reserve1",
    get: function get() {
      return this.tokenAmounts[1];
    }
  }]);

  return Pair;
}();

var ONE_HUNDRED = /*#__PURE__*/new Fraction( /*#__PURE__*/JSBI.BigInt(100));
/**
 * Converts a fraction to a percent
 * @param fraction the fraction to convert
 */

function toPercent(fraction) {
  return new Percent(fraction.numerator, fraction.denominator);
}

var Percent = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Percent, _Fraction);

  function Percent() {
    var _this;

    _this = _Fraction.apply(this, arguments) || this;
    /**
     * This boolean prevents a fraction from being interpreted as a Percent
     */

    _this.isPercent = true;
    return _this;
  }

  var _proto = Percent.prototype;

  _proto.add = function add(other) {
    return toPercent(_Fraction.prototype.add.call(this, other));
  };

  _proto.subtract = function subtract(other) {
    return toPercent(_Fraction.prototype.subtract.call(this, other));
  };

  _proto.multiply = function multiply(other) {
    return toPercent(_Fraction.prototype.multiply.call(this, other));
  };

  _proto.divide = function divide(other) {
    return toPercent(_Fraction.prototype.divide.call(this, other));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 5;
    }

    return _Fraction.prototype.multiply.call(this, ONE_HUNDRED).toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 2;
    }

    return _Fraction.prototype.multiply.call(this, ONE_HUNDRED).toFixed(decimalPlaces, format, rounding);
  };

  return Percent;
}(Fraction);

var Route = /*#__PURE__*/function () {
  function Route(pairs, input, output) {
    this._midPrice = null;
    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    var chainId = pairs[0].chainId;
    !pairs.every(function (pair) {
      return pair.chainId === chainId;
    }) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_IDS') : invariant(false) : void 0;
    var wrappedInput = input.wrapped;
    !pairs[0].involvesToken(wrappedInput) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT') : invariant(false) : void 0;
    !(typeof output === 'undefined' || pairs[pairs.length - 1].involvesToken(output.wrapped)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT') : invariant(false) : void 0;
    var path = [wrappedInput];

    for (var _iterator = _createForOfIteratorHelperLoose(pairs.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          i = _step$value[0],
          pair = _step$value[1];
      var currentInput = path[i];
      !(currentInput.equals(pair.token0) || currentInput.equals(pair.token1)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PATH') : invariant(false) : void 0;

      var _output = currentInput.equals(pair.token0) ? pair.token1 : pair.token0;

      path.push(_output);
    }

    this.pairs = pairs;
    this.path = path;
    this.input = input;
    this.output = output;
  }

  _createClass(Route, [{
    key: "midPrice",
    get: function get() {
      if (this._midPrice !== null) return this._midPrice;
      var prices = [];

      for (var _iterator2 = _createForOfIteratorHelperLoose(this.pairs.entries()), _step2; !(_step2 = _iterator2()).done;) {
        var _step2$value = _step2.value,
            i = _step2$value[0],
            pair = _step2$value[1];
        prices.push(this.path[i].equals(pair.token0) ? new Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.quotient, pair.reserve1.quotient) : new Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.quotient, pair.reserve0.quotient));
      }

      var reduced = prices.slice(1).reduce(function (accumulator, currentValue) {
        return accumulator.multiply(currentValue);
      }, prices[0]);
      return this._midPrice = new Price(this.input, this.output, reduced.denominator, reduced.numerator);
    }
  }, {
    key: "chainId",
    get: function get() {
      return this.pairs[0].chainId;
    }
  }]);

  return Route;
}();

/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */

function computePriceImpact(midPrice, inputAmount, outputAmount) {
  var quotedOutputAmount = midPrice.quote(inputAmount); // calculate price impact := (exactQuote - outputAmount) / exactQuote

  var priceImpact = quotedOutputAmount.subtract(outputAmount).divide(quotedOutputAmount);
  return new Percent(priceImpact.numerator, priceImpact.denominator);
}

// `maxSize` by removing the last item

function sortedInsert(items, add, maxSize, comparator) {
  !(maxSize > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_SIZE_ZERO') : invariant(false) : void 0; // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize

  !(items.length <= maxSize) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ITEMS_SIZE') : invariant(false) : void 0; // short circuit first item add

  if (items.length === 0) {
    items.push(add);
    return null;
  } else {
    var isFull = items.length === maxSize; // short circuit if full and the additional item does not come before the last item

    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add;
    }

    var lo = 0,
        hi = items.length;

    while (lo < hi) {
      var mid = lo + hi >>> 1;

      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    items.splice(lo, 0, add);
    return isFull ? items.pop() : null;
  }
}

// in increasing order. i.e. the best trades have the most outputs for the least inputs and are sorted first

function inputOutputComparator(a, b) {
  // must have same input and output token for comparison
  !a.inputAmount.currency.equals(b.inputAmount.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT_CURRENCY') : invariant(false) : void 0;
  !a.outputAmount.currency.equals(b.outputAmount.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT_CURRENCY') : invariant(false) : void 0;

  if (a.outputAmount.equalTo(b.outputAmount)) {
    if (a.inputAmount.equalTo(b.inputAmount)) {
      return 0;
    } // trade A requires less input than trade B, so A should come first


    if (a.inputAmount.lessThan(b.inputAmount)) {
      return -1;
    } else {
      return 1;
    }
  } else {
    // tradeA has less output than trade B, so should come second
    if (a.outputAmount.lessThan(b.outputAmount)) {
      return 1;
    } else {
      return -1;
    }
  }
} // extension of the input output comparator that also considers other dimensions of the trade in ranking them

function tradeComparator(a, b) {
  var ioComp = inputOutputComparator(a, b);

  if (ioComp !== 0) {
    return ioComp;
  } // consider lowest slippage next, since these are less likely to fail


  if (a.priceImpact.lessThan(b.priceImpact)) {
    return -1;
  } else if (a.priceImpact.greaterThan(b.priceImpact)) {
    return 1;
  } // finally consider the number of hops since each hop costs gas


  return a.route.path.length - b.route.path.length;
}
/**
 * Represents a trade executed against a list of pairs.
 * Does not account for slippage, i.e. trades that front run this trade and move the price.
 */

var Trade = /*#__PURE__*/function () {
  function Trade(route, amount, tradeType) {
    this.route = route;
    this.tradeType = tradeType;
    var tokenAmounts = new Array(route.path.length);

    if (tradeType === TradeType.EXACT_INPUT) {
      !amount.currency.equals(route.input) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT') : invariant(false) : void 0;
      tokenAmounts[0] = amount.wrapped;

      for (var i = 0; i < route.path.length - 1; i++) {
        var pair = route.pairs[i];

        var _pair$getOutputAmount = pair.getOutputAmount(tokenAmounts[i]),
            outputAmount = _pair$getOutputAmount[0];

        tokenAmounts[i + 1] = outputAmount;
      }

      this.inputAmount = CurrencyAmount.fromFractionalAmount(route.input, amount.numerator, amount.denominator);
      this.outputAmount = CurrencyAmount.fromFractionalAmount(route.output, tokenAmounts[tokenAmounts.length - 1].numerator, tokenAmounts[tokenAmounts.length - 1].denominator);
    } else {
      !amount.currency.equals(route.output) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT') : invariant(false) : void 0;
      tokenAmounts[tokenAmounts.length - 1] = amount.wrapped;

      for (var _i = route.path.length - 1; _i > 0; _i--) {
        var _pair = route.pairs[_i - 1];

        var _pair$getInputAmount = _pair.getInputAmount(tokenAmounts[_i]),
            inputAmount = _pair$getInputAmount[0];

        tokenAmounts[_i - 1] = inputAmount;
      }

      this.inputAmount = CurrencyAmount.fromFractionalAmount(route.input, tokenAmounts[0].numerator, tokenAmounts[0].denominator);
      this.outputAmount = CurrencyAmount.fromFractionalAmount(route.output, amount.numerator, amount.denominator);
    }

    this.executionPrice = new Price(this.inputAmount.currency, this.outputAmount.currency, this.inputAmount.quotient, this.outputAmount.quotient);
    this.priceImpact = computePriceImpact(route.midPrice, this.inputAmount, this.outputAmount);
  }
  /**
   * Constructs an exact in trade with the given amount in and route
   * @param route route of the exact in trade
   * @param amountIn the amount being passed in
   */


  Trade.exactIn = function exactIn(route, amountIn) {
    return new Trade(route, amountIn, TradeType.EXACT_INPUT);
  }
  /**
   * Constructs an exact out trade with the given amount out and route
   * @param route route of the exact out trade
   * @param amountOut the amount returned by the trade
   */
  ;

  Trade.exactOut = function exactOut(route, amountOut) {
    return new Trade(route, amountOut, TradeType.EXACT_OUTPUT);
  }
  /**
   * Get the minimum amount that must be received from this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  ;

  var _proto = Trade.prototype;

  _proto.minimumAmountOut = function minimumAmountOut(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'SLIPPAGE_TOLERANCE') : invariant(false) : void 0;

    if (this.tradeType === TradeType.EXACT_OUTPUT) {
      return this.outputAmount;
    } else {
      var slippageAdjustedAmountOut = new Fraction(ONE).add(slippageTolerance).invert().multiply(this.outputAmount.quotient).quotient;
      return CurrencyAmount.fromRawAmount(this.outputAmount.currency, slippageAdjustedAmountOut);
    }
  }
  /**
   * Get the maximum amount in that can be spent via this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  ;

  _proto.maximumAmountIn = function maximumAmountIn(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'SLIPPAGE_TOLERANCE') : invariant(false) : void 0;

    if (this.tradeType === TradeType.EXACT_INPUT) {
      return this.inputAmount;
    } else {
      var slippageAdjustedAmountIn = new Fraction(ONE).add(slippageTolerance).multiply(this.inputAmount.quotient).quotient;
      return CurrencyAmount.fromRawAmount(this.inputAmount.currency, slippageAdjustedAmountIn);
    }
  }
  /**
   * Given a list of pairs, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
   * amount to an output token, making at most `maxHops` hops.
   * Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param nextAmountIn exact amount of input currency to spend
   * @param currencyOut the desired currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param currencyAmountIn used in recursion; the original value of the currencyAmountIn parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  ;

  Trade.bestTradeExactIn = function bestTradeExactIn(pairs, currencyAmountIn, currencyOut, _temp, // used in recursion.
  currentPairs, nextAmountIn, bestTrades) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$maxNumResults = _ref.maxNumResults,
        maxNumResults = _ref$maxNumResults === void 0 ? 3 : _ref$maxNumResults,
        _ref$maxHops = _ref.maxHops,
        maxHops = _ref$maxHops === void 0 ? 3 : _ref$maxHops;

    if (currentPairs === void 0) {
      currentPairs = [];
    }

    if (nextAmountIn === void 0) {
      nextAmountIn = currencyAmountIn;
    }

    if (bestTrades === void 0) {
      bestTrades = [];
    }

    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !(maxHops > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_HOPS') : invariant(false) : void 0;
    !(currencyAmountIn === nextAmountIn || currentPairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INVALID_RECURSION') : invariant(false) : void 0;
    var amountIn = nextAmountIn.wrapped;
    var tokenOut = currencyOut.wrapped;

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]; // pair irrelevant

      if (!pair.token0.equals(amountIn.currency) && !pair.token1.equals(amountIn.currency)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountOut = void 0;

      try {
        ;

        var _pair$getOutputAmount2 = pair.getOutputAmount(amountIn);

        amountOut = _pair$getOutputAmount2[0];
      } catch (error) {
        // input too low
        if (error.isInsufficientInputAmountError) {
          continue;
        }

        throw error;
      } // we have arrived at the output token, so this is the final trade of one of the paths


      if (amountOut.currency.equals(tokenOut)) {
        sortedInsert(bestTrades, new Trade(new Route([].concat(currentPairs, [pair]), currencyAmountIn.currency, currencyOut), currencyAmountIn, TradeType.EXACT_INPUT), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length)); // otherwise, consider all the other paths that lead from this token as long as we have not exceeded maxHops

        Trade.bestTradeExactIn(pairsExcludingThisPair, currencyAmountIn, currencyOut, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, [].concat(currentPairs, [pair]), amountOut, bestTrades);
      }
    }

    return bestTrades;
  }
  /**
   * Return the execution price after accounting for slippage tolerance
   * @param slippageTolerance the allowed tolerated slippage
   */
  ;

  _proto.worstExecutionPrice = function worstExecutionPrice(slippageTolerance) {
    return new Price(this.inputAmount.currency, this.outputAmount.currency, this.maximumAmountIn(slippageTolerance).quotient, this.minimumAmountOut(slippageTolerance).quotient);
  }
  /**
   * similar to the above method but instead targets a fixed output amount
   * given a list of pairs, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
   * to an output token amount, making at most `maxHops` hops
   * note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyIn the currency to spend
   * @param nextAmountOut the exact amount of currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param currencyAmountOut used in recursion; the original value of the currencyAmountOut parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  ;

  Trade.bestTradeExactOut = function bestTradeExactOut(pairs, currencyIn, currencyAmountOut, _temp2, // used in recursion.
  currentPairs, nextAmountOut, bestTrades) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$maxNumResults = _ref2.maxNumResults,
        maxNumResults = _ref2$maxNumResults === void 0 ? 3 : _ref2$maxNumResults,
        _ref2$maxHops = _ref2.maxHops,
        maxHops = _ref2$maxHops === void 0 ? 3 : _ref2$maxHops;

    if (currentPairs === void 0) {
      currentPairs = [];
    }

    if (nextAmountOut === void 0) {
      nextAmountOut = currencyAmountOut;
    }

    if (bestTrades === void 0) {
      bestTrades = [];
    }

    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !(maxHops > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_HOPS') : invariant(false) : void 0;
    !(currencyAmountOut === nextAmountOut || currentPairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INVALID_RECURSION') : invariant(false) : void 0;
    var amountOut = nextAmountOut.wrapped;
    var tokenIn = currencyIn.wrapped;

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]; // pair irrelevant

      if (!pair.token0.equals(amountOut.currency) && !pair.token1.equals(amountOut.currency)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountIn = void 0;

      try {
        ;

        var _pair$getInputAmount2 = pair.getInputAmount(amountOut);

        amountIn = _pair$getInputAmount2[0];
      } catch (error) {
        // not enough liquidity in this pair
        if (error.isInsufficientReservesError) {
          continue;
        }

        throw error;
      } // we have arrived at the input token, so this is the first trade of one of the paths


      if (amountIn.currency.equals(tokenIn)) {
        sortedInsert(bestTrades, new Trade(new Route([pair].concat(currentPairs), currencyIn, currencyAmountOut.currency), currencyAmountOut, TradeType.EXACT_OUTPUT), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length)); // otherwise, consider all the other paths that arrive at this token as long as we have not exceeded maxHops

        Trade.bestTradeExactOut(pairsExcludingThisPair, currencyIn, currencyAmountOut, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, [pair].concat(currentPairs), amountIn, bestTrades);
      }
    }

    return bestTrades;
  };

  return Trade;
}();

// account is not optional
function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
} // account is optional

function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library;
}

function rebase(value, from, to) {
  return from ? JSBI.divide(JSBI.multiply(value, to), from) : ZERO;
}
function toElastic(total, base, roundUp) {
  var elastic;

  if (JSBI.equal(total.base, ZERO)) {
    elastic = base;
  } else {
    elastic = JSBI.divide(JSBI.multiply(base, total.elastic), total.base);

    if (roundUp && JSBI.lessThan(JSBI.divide(JSBI.multiply(elastic, total.base), total.elastic), base)) {
      elastic = JSBI.add(elastic, ONE);
    }
  }

  return elastic;
}

function validateSolidityTypeInstance(value, solidityType) {
  !JSBI.greaterThanOrEqual(value, ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, value + " is not a " + solidityType + ".") : invariant(false) : void 0;
  !JSBI.lessThanOrEqual(value, SOLIDITY_TYPE_MAXIMA[solidityType]) ? process.env.NODE_ENV !== "production" ? invariant(false, value + " is not a " + solidityType + ".") : invariant(false) : void 0;
}

function toHex(currencyAmount) {
  return "0x" + currencyAmount.quotient.toString(16);
}
var ZERO_HEX = '0x0';
/**
 * Represents the Uniswap V2 Router, and has static methods for helping execute trades.
 */

var Router = /*#__PURE__*/function () {
  /**
   * Cannot be constructed.
   */
  function Router() {}
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */


  Router.swapCallParameters = function swapCallParameters(trade, options) {
    var etherIn = trade.inputAmount.currency.isNative;
    var etherOut = trade.outputAmount.currency.isNative; // the router does not support both ether in and out

    !!(etherIn && etherOut) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ETHER_IN_OUT') : invariant(false) : void 0;
    !(!('ttl' in options) || options.ttl > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TTL') : invariant(false) : void 0;
    var to = validateAndParseAddress(options.recipient);
    var amountIn = toHex(trade.maximumAmountIn(options.allowedSlippage));
    var amountOut = toHex(trade.minimumAmountOut(options.allowedSlippage));
    var path = trade.route.path.map(function (token) {
      return token.address;
    });
    var deadline = 'ttl' in options ? "0x" + (Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16) : "0x" + options.deadline.toString(16);
    var useFeeOnTransfer = Boolean(options.feeOnTransfer);
    var methodName;
    var args;
    var value;

    switch (trade.tradeType) {
      case TradeType.EXACT_INPUT:
        if (etherIn) {
          methodName = useFeeOnTransfer ? 'swapExactETHForTokensSupportingFeeOnTransferTokens' : 'swapExactETHForTokens'; // (uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = useFeeOnTransfer ? 'swapExactTokensForETHSupportingFeeOnTransferTokens' : 'swapExactTokensForETH'; // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = useFeeOnTransfer ? 'swapExactTokensForTokensSupportingFeeOnTransferTokens' : 'swapExactTokensForTokens'; // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        }

        break;

      case TradeType.EXACT_OUTPUT:
        !!useFeeOnTransfer ? process.env.NODE_ENV !== "production" ? invariant(false, 'EXACT_OUT_FOT') : invariant(false) : void 0;

        if (etherIn) {
          methodName = 'swapETHForExactTokens'; // (uint amountOut, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = 'swapTokensForExactETH'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = 'swapTokensForExactTokens'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        }

        break;
    }

    return {
      methodName: methodName,
      args: args,
      value: value
    };
  };

  return Router;
}();

export { AbstractCurrency, Avalanche, BALANCE_FETCHER_ADDRESS, BAR_ADDRESS, BENTOBOX_ADDRESS, BORING_HELPER_ADDRESS, Binance, CHAINLINK_ORACLE_ADDRESS, CHAIN_KEY, Celo, ChainId, ChainKey, CurrencyAmount, DAI_ADDRESS, ENS_REGISTRAR_ADDRESS, Ether, FACTORY_ADDRESS, FIVE, FRAX_ADDRESS, Fantom, Fraction, Fuse, Glmr, Harmony, Heco, INIT_CODE_HASH, InsufficientInputAmountError, InsufficientReservesError, KASHI_ADDRESS, Kava, MAKER_ADDRESS, MASTERCHEF_ADDRESS, MASTERCHEF_V2_ADDRESS, MAX_SAFE_INTEGER, MERKLE_DISTRIBUTOR_ADDRESS, MIM_ADDRESS, MINICHEF_ADDRESS, MINIMUM_LIQUIDITY, MULTICALL2_ADDRESS, MULTISIG_ADDRESS, Matic, MaxUint256, Metis, Movr, NATIVE, NativeCurrency, ONE, Okex, PEGGED_ORACLE_ADDRESS, Pair, Palm, Percent, Price, RICE, RICE_ADDRESS, ROUTER_ADDRESS, Rounding, Route, Router, SOLIDITY_TYPE_MAXIMA, SUSHISWAP_MULTISWAPPER_ADDRESS, SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS, SUSHISWAP_SWAPPER_ADDRESS, SUSHISWAP_TWAP_0_ORACLE_ADDRESS, SUSHISWAP_TWAP_1_ORACLE_ADDRESS, SolidityType, TEN, THREE, TIMELOCK_ADDRESS, TWO, Telos, Token, Trade, TradeType, TradeVersion, USDC, USDC_ADDRESS, USDT_ADDRESS, USD_ADDRESS, WETH9, WETH9_ADDRESS, WNATIVE, WNATIVE_ADDRESS, ZAPPER_ADDRESS, ZERO, _100, _1000, _997, computePairAddress, computePriceImpact, currencyEquals, difference, getProviderOrSigner, getSigner, inputOutputComparator, maximum, minimum, rebase, sortedInsert, sqrt, toElastic, toHex, tradeComparator, validateAndParseAddress, validateSolidityTypeInstance, xDai };
//# sourceMappingURL=sdkv3.esm.js.map
