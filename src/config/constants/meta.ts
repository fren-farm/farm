import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'fren.farm',
  description:
    'fren.farm - Best DEFi',
  image: 'https://fren.farm.com/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('fren.farm')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('fren.farm')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('fren.farm')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('fren.farm')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('fren.farm')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('fren.farm')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('fren.farm')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('fren.farm')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('fren.farm')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('fren.farm')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('fren.farm')}`,
      }
    default:
      return null
  }
}
