import { MenuEntry } from 'uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [

  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange",
        href: "https://frenbase.xyz",
      },
      {
        label: "Liquidity",
        href:"https://frenbase.xyz/#/pool",
      },
     
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Auto Fren'),
    icon: 'IfoIcon',
    href: '/poolscherry',
  },
  // {
  //   label: t('Dividends'),
  //   icon: 'BondsIcon',
  //   href: '/dividends',
  // },
  {
    label: t('Referral'),
    icon: 'GroupsIcon',
    href: '/referral',
  },
  // {
  //   label: t('Info'),
  //   icon: 'InfoIcon',
  //   items:[
  //     {
  //       label: 'Dexguru',
  //       href:'https://dex.guru/token/0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708-polygon'
  //      },
  //      {
  //       label: 'PooCoin',
  //       href:'https://poocoin.app/tokens/0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708'
  //      },
  //   ]
  // },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://pornhub.com/',
      },
      {
        label: t('Docs'),
        href: 'https://pornhub.com',
      },
   
     
    ],
  },
  // {
  //   label:'Audited by Quillaudits',
  //   icon:'AuditIcon',
  //   href:'https://github.com/fren-farm/audits'
  // }

]

export default config
