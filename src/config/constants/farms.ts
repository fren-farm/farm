import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
	pid:0,
	lpSymbol:'FREN',
	lpAddresses: {
		137:'0x64210822e0e260E76DBA23E89F1b0b5E0A37c2b2', // FREN
		97:'',
	},
	quoteToken: tokens.cake,
	token:tokens.cake,
	singleToken:true,

	},
	{
	 pid:1,
	 lpSymbol:'Lous10Inch',
	 lpAddresses: {
		 97:'',
		 137:'0xf28CA9d779CA6A1945A85Ac50bdB7Dd5D0038c1F',
	 },
	 quoteToken: tokens.lou,
	 token:tokens.lou,
	 singleToken:true,
 
	 },
	 {
	  pid:8,
	  lpSymbol:'WETH',
	  lpAddresses: {
		  97:'',
		  137:'0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
	  },
	  quoteToken: tokens.wbnb,
	  token:tokens.wbnb,
	  singleToken:true,
  
	},
	{
	 pid:9,
	 lpSymbol:'WBTC',
	 lpAddresses: {
		 97:'',
		 137:'0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
	 },
	 quoteToken: tokens.btcb,
	 token:tokens.btcb,
	 singleToken:true,
 
   	},
   {
	pid:10,
	lpSymbol:'WETH',
	lpAddresses: {
		97:'',
		137:'0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
	},
	quoteToken: tokens.beth,
	token:tokens.beth,
	singleToken:true,

  	},
	{
	  pid:11,
	  lpSymbol:'USDT',
	  lpAddresses: {
		  97:'',
		  137:'0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
	  },
	  quoteToken: tokens.usdt,
	  token:tokens.usdt,
	  singleToken:true,
  
	},
	{
	  pid:12,
	  lpSymbol:'DAI',
	  lpAddresses: {
		  97:'',
		  137:'0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
	  },
	  quoteToken: tokens.dai,
	  token:tokens.dai,
	  singleToken:true,
  
	},
	{
	  pid:13,
	  lpSymbol:'USDC',
	  lpAddresses: {
		  97:'',
		  137:'0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
	  },
	  quoteToken: tokens.usdc,
	  token:tokens.usdc,
	  singleToken:true,
  
	},
	{
	  pid:14,
	  lpSymbol:'miMATIC',
	  lpAddresses: {
		  97:'',
		  137:'0xa3fa99a148fa48d14ed51d610c367c61876997f1',
	  },
	  quoteToken: tokens.mimatic,
	  token:tokens.mimatic,
	  singleToken:true,
  
	},
	{
	  pid:15,
	  lpSymbol:'QUICK',
	  lpAddresses: {
		  97:'',
		  137:'0x831753DD7087CaC61aB5644b308642cc1c33Dc13',
	  },
	  quoteToken: tokens.quick,
	  token:tokens.quick,
	  singleToken:true,
  
	},
	{
	  pid:16,
	  lpSymbol:'SUSHI',
	  lpAddresses: {
		  97:'',
		  137:'0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a',
	  },
	  quoteToken: tokens.sushi,
	  token:tokens.sushi,
	  singleToken:true,
  
	},
	{
	  pid:17,
	  lpSymbol:'BIFI',
	  lpAddresses: {
		  97:'',
		  137:'0xfbdd194376de19a88118e84e279b977f165d01b8',
	  },
	  quoteToken: tokens.bifi,
	  token:tokens.bifi,
	  singleToken:true,
  
	},
	{
	  pid:18,
	  lpSymbol:'AAVE',
	  lpAddresses: {
		  97:'',
		  137:'0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
	  },
	  quoteToken: tokens.aave,
	  token:tokens.aave,
	  singleToken:true,
  
	},
	{
	  pid:19,
	  lpSymbol:'LINK',
	  lpAddresses: {
		  97:'',
		  137:'0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
	  },
	  quoteToken: tokens.link,
	  token:tokens.link,
	  singleToken:true,
  
	},
	{
	  pid:20,
	  lpSymbol:'AVAX',
	  lpAddresses: {
		  97:'',
		  137:'0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b',
	  },
	  quoteToken: tokens.avax,
	  token:tokens.avax,
	  singleToken:true,
  
	},
	{
	  pid:21,
	  lpSymbol:'SOL',
	  lpAddresses: {
		  97:'',
		  137:'0x7dff46370e9ea5f0bad3c4e29711ad50062ea7a4',
	  },
	  quoteToken: tokens.sol,
	  token:tokens.sol,
	  singleToken:true,
  
	},
	{
		pid:2,
		lpSymbol:'FREN-USDC',
		lpAddresses: {
			97:'',
			137:'0xbabF3CE40605D46A9ECc95941f4b201c77b693A9',
			// 137:'0x03cCDcfa920E7954Fd682051D0DA6caf1781A397',
		},
		quoteToken: tokens.usdc,
		token:tokens.cake,
		exchange: 'JetSwap'
	},
	{
	  pid:3,
	  lpSymbol:'FREN-ETH',
	  lpAddresses: {
		  97:'',
		  137:'0x6ba35f017d7cfb6e8f43af8c5a285c6ca06b375b',
		//   137:'0x3e56b1c468a2b77e1201507caEe9CCe3CfAcFC45',
	  },
	  quoteToken: tokens.wbnb,
	  token:tokens.cake,
	  exchange: 'JetSwap'
	},
	{
	   pid:4,
	   lpSymbol:'FREN-USDC',
	   lpAddresses: {
		   97:'',
		   137:'0x006317cb098696a6eb6b309e42cfda81b69b55a8',
		//    137:'0x78599c95A11eb79d46793A6048e025D4597D8098',
	   },
	   quoteToken: tokens.usdc,
	   token:tokens.cake,
	   exchange: 'QuickSwap'
	},
	{
		pid:5,
		lpSymbol:'FREN-ETH',
		lpAddresses: {
			97:'',
			137:'0xe3f34a23802968ff4c3cc01b7aafdb2c3c006c69',
			// 137:'0xC77AF76BdeBefE2ecD8dA5F52946fd60bCEb0F85',
		},
		quoteToken: tokens.wbnb,
		token:tokens.cake,
		exchange: 'frenbase'
	},
	{
	   pid:6,
	   lpSymbol:'FREN-LOUS10INCH',
	   lpAddresses: {
		   97:'',
		   137:'0x891a4f0e9710965e087d0aeb7e73c8d6f22a2f90',
		//    137:'0x3cd3e13bfbf1db5c89B34474f10953479027a4B1',
	   },
	   quoteToken: tokens.lou,
	   token:tokens.lou,
	   exchange: 'JetSwap'
	},
	{
		pid:7,
		lpSymbol:'FREN-FISH',
		lpAddresses: {
			97:'',
			137:'0x0b35b25960be1d585caca635d23e0e963116ff37',
			// 137:'0x3498A4E90287C49dcb8a56FEb1928294CA2f397D',
		},
		quoteToken: tokens.fish,
		token:tokens.cake,
		exchange: 'PolyCat'
	},
	{
	   pid:22,
	   lpSymbol:'WETH-USDC',
	   lpAddresses: {
		   97:'',
		   137:'0x5E58e0CeD3a272CAeb8bA00F4A4C2805Df6BE495',
	   },
	   quoteToken: tokens.usdc,
	   token:tokens.wbnb,
	   exchange: 'JetSwap'
	},
	{
	   pid:23,
	   lpSymbol:'WETH-USDC',
	   lpAddresses: {
		   97:'',
		   137:'0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d',
	   },
	   quoteToken: tokens.usdc,
	   token:tokens.beth,
	   exchange: 'QuickSwap'
	},
	{
	   pid:24,
	   lpSymbol:'WBTC-USDC',
	   lpAddresses: {
		   97:'',
		   137:'0xF6a637525402643B0654a54bEAd2Cb9A83C8B498',
	   },
	   quoteToken: tokens.usdc,
	   token:tokens.btcb,
	   exchange: 'QuickSwap'
	},
	{
	   pid:25,
	   lpSymbol:'USDT-USDC',
	   lpAddresses: {
		   97:'',
		   137:'0x20BF018FDDBa3b352f3d913FE1c81b846fE0F490',
	   },
	   quoteToken: tokens.usdc,
	   token:tokens.usdt,
	   exchange: 'JetSwap'
	},
	{
	   pid:26,
	   lpSymbol:'miMATIC-USDC',
	   lpAddresses: {
		   97:'',
		   137:'0x160532d2536175d65c03b97b0630a9802c274dad',
	   },
	   quoteToken: tokens.usdc,
	   token:tokens.mimatic,
	   exchange: 'QuickSwap'
	},
	{
	   pid:27,
	   lpSymbol:'DAI-USDC',
	   lpAddresses: {
		   97:'',
		   137:'0xf04adbf75cdfc5ed26eea4bbbb991db002036bdd',
	   },
	   quoteToken: tokens.usdc,
	   token:tokens.dai,
	   exchange: 'JetSwap'
	},
	// {
	// 	pid:19,
	// 	lpSymbol:'FREN-BNB',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0xCC9001bdE0aCd7b87762A402a4322beba55826ae',
	// 	},
	// 	quoteToken: tokens.wbnb,
	// 	token:tokens.cake,

	// },
	// {
	// 	pid:2,
	// 	lpSymbol:'LKM',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0x1099e778846baa6aad3c6f26ad42419aa7f95103',
	// 	},
	// 	quoteToken: tokens.lokum,
	// 	token:tokens.lokum,
	// 	singleToken:true
	// },
	// {
	// 	pid:4,
	// 	lpSymbol:'BNB',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.wbnb.address[137],
	// 	},
	// 	quoteToken: tokens.wbnb,
	// 	token:tokens.wbnb,
	// 	singleToken:true,
		
	// },
	// {
	// 	pid:5,
	// 	lpSymbol:'BUSD',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.usdc.address[137],
	// 	},
	// 	quoteToken: tokens.usdc,
	// 	token:tokens.usdc,
	// 	singleToken:true,
	
	// },
	// {
	// 	pid:6,
	// 	lpSymbol:'BTCB',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.btcb.address[137],
	// 	},
	// 	quoteToken: tokens.btcb,
	// 	token:tokens.btcb,
	// 	singleToken:true,

	// },
	// {
	// 	pid:7,
	// 	lpSymbol:'ETH',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.eth.address[137],
	// 	},
	// 	quoteToken: tokens.eth,
	// 	token:tokens.eth,
	// 	singleToken:true,

	// },
	// {
	// 	pid:8,
	// 	lpSymbol:'CAKE',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.cake.address[137],
	// 	},
	// 	quoteToken: tokens.cake,
	// 	token:tokens.cake,
	// 	singleToken:true,

	// },
	// {
	// 	pid:9,
	// 	lpSymbol:'BUNNY',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.bunny.address[137],
	// 	},
	// 	quoteToken: tokens.bunny,
	// 	token:tokens.bunny,
	// 	singleToken:true,

	// },
	// {
	// 	pid:10,
	// 	lpSymbol:'DOT',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.dot.address[137],
	// 	},
	// 	quoteToken: tokens.dot,
	// 	token:tokens.dot,
	// 	singleToken:true,

	// },
	// {
	// 	pid:11,
	// 	lpSymbol:'UNI',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.uni.address[137],
	// 	},
	// 	quoteToken: tokens.uni,
	// 	token:tokens.uni,
	// 	singleToken:true,

	// },
	// {
	// 	pid:12,
	// 	lpSymbol:'DAI',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.dai.address[137],
	// 	},
	// 	quoteToken: tokens.dai,
	// 	token:tokens.dai,
	// 	singleToken:true,
	
	// },
	// {
	// 	pid:13,
	// 	lpSymbol:'DOGE',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.doge.address[137],
	// 	},
	// 	quoteToken: tokens.doge,
	// 	token:tokens.doge,
	// 	singleToken:true,

	// },

	// {
	// 	pid:14,
	// 	lpSymbol:'ADA',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.ada.address[137],
	// 	},
	// 	quoteToken: tokens.ada,
	// 	token:tokens.ada,
	// 	singleToken:true,

	// },
	// {
	// 	pid:15,
	// 	lpSymbol:'BAKE',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.bake.address[137],
	// 	},
	// 	quoteToken: tokens.bake,
	// 	token:tokens.bake,
	// 	singleToken:true,
	
	// },
	// {
	// 	pid:28,
	// 	lpSymbol:'USDT',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:tokens.usdt.address[137],
	// 	},
	// 	quoteToken: tokens.usdt,
	// 	token:tokens.usdt,
	// 	singleToken:true,
	
	// },
	// {
	// 	pid:20,
	// 	lpSymbol:'FREN-BUSD',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0xBE421FE4897C24863b52A923B0E136d6b599FEEC',
	// 	},
	// 	quoteToken: tokens.usdc,
	// 	token:tokens.cake,

	// },
	// {
	// 	pid:26,
	// 	lpSymbol:'LKM-BNB',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0x69d50ebbb1b08349d81525a7c7d229ddd3021a91',
	// 	},
	// 	quoteToken: tokens.wbnb,
	// 	token:tokens.lokum,

	// },
	// {
	// 	pid:31,
	// 	lpSymbol:'LKM-BNB',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0x2D3b6307Ac8fFA21ac08fd89fC5c9CcfFb642986',
	// 	},
	// 	quoteToken: tokens.wbnb,
	// 	token:tokens.lokum,
	// },
	// {
	// 	pid:29,
	// 	lpSymbol:'FREN-ADA',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0x31DFBd4dd18021615D2ab93369e7f7375f4a896b',
	// 	},
	// 	quoteToken: tokens.ada,
	// 	token:tokens.cake,

	// },
	// {
	// 	pid:30,
	// 	lpSymbol:'FREN-USDT',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0x120d03FeccBC297B561eC24772b4ac8271f6F1aB',
	// 	},
	// 	quoteToken: tokens.usdt,
	// 	token:tokens.cake,

	// },
	// {
	// 	pid:24,
	// 	lpSymbol:'FREN-CAKE',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0xec749D75C32803DF3cd234797BAb9F3ccE5D7443',
	// 	},
	// 	quoteToken: tokens.cake,
	// 	token:tokens.cake,

	// },
	// {
	// 	pid:25,
	// 	lpSymbol:'FREN-DOT',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0xF441b63ed3142B4ef0cff40E7673d2353158a83a',
	// 	},
	// 	quoteToken: tokens.dot,
	// 	token:tokens.cake,

	// },
	// {
	// 	pid:27,
	// 	lpSymbol:'FREN-BTCB',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0x25DaAEE087a38e14aC7F5A64179E1377D78974A8',
	// 	},
	// 	quoteToken: tokens.btcb,
	// 	token:tokens.cake,

	// },

	// {
	// 	pid:16,
	// 	lpSymbol:'BNB-BTCB',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0x0a6939b4665c51069e976e2ebd0fb3a3cac9daba',
	// 	},
	// 	quoteToken: tokens.btcb,
	// 	token:tokens.wbnb,
	
	// },
	// {
	// 	pid:21,
	// 	lpSymbol:'BNB-LTC',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0x4F2db513627619e502c5c77F21C263c9b9244191',
	// 	},
	// 	quoteToken: tokens.ltc,
	// 	token:tokens.wbnb,
	// },
	// {
	// 	pid:17,
	// 	lpSymbol:'BNB-BUSD',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0x7b293d8833ab7b1db7a36fe6d822f8ccca91ac08',
	// 	},
	// 	quoteToken: tokens.usdc,
	// 	token:tokens.wbnb,

	// },
	// {
	// 	pid:18,
	// 	lpSymbol:'BNB-ETH',
	// 	lpAddresses: {
	// 		97:'0x75EBA90Af6698130BD9DCA27EA8B2BDA965eD16a',
	// 		137:'0xff7b0c1e748d301a394d922df11afcca107fc299',
	// 	},
	// 	quoteToken: tokens.eth,
	// 	token:tokens.wbnb,

	// },

]

export default farms
