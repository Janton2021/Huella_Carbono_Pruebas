// auth
import { Index } from 'pages/Auth/Index'
import { Reset } from 'pages/Auth/New-pass'
// app
import { Onboarding } from 'pages/Auth/Onboarding'
import { Home } from 'pages/App/Home'
import { Calculator } from 'pages/App/Calculator'
import { Results } from 'pages/App/[results]'
import { Logros } from 'pages/App/Logros'
import { Ranking } from 'pages/App/Ranking'
// user
import { Perfil } from 'pages/User/Perfil'
import { Iniciativas } from 'pages/User/Iniciativas'
// icons
import {
  AiOutlineHistory,
  AiOutlineTrophy,
  AiOutlineUser,
  AiOutlineDashboard,
} from 'react-icons/ai'
import { RiStarSmileLine } from 'react-icons/ri'

export const paths = {
  index: '/auth',
  onboarding: '/auth/onboarding',
  login: '/auth/login',
  forgot: '/auth/forgot-pass',
  reset: '/auth/reset-pass',
  register: '/auth/register',
  home: '/',
  calculator: '/new',
  logros: '/logros',
  results: '/new/results',
  ranking: '/ranking',
  perfil: '/perfil',
  preferences: '/perfil/preferences',
  iniciativas: '/iniciativa',
  planes: '/iniciativa/planes',
}

export const navlinks = [
  {
    path: paths.home,
    icon: <AiOutlineDashboard />,
    name: 'dashboard',
  },
  {
    path: paths.logros,
    icon: <AiOutlineHistory />,
    name: 'logros',
  },
  {
    path: paths.ranking,
    icon: <AiOutlineTrophy />,
    name: 'ranking',
  },
  {
    path: paths.iniciativas,
    icon: <RiStarSmileLine />,
    name: 'iniciativas',
  },
  {
    path: paths.perfil,
    icon: <AiOutlineUser />,
    name: 'perfil',
  },
]

export const routes = [
  {
    component: Index,
    path: paths.index,
    layout: 'public',
  },
  {
    component: Onboarding,
    path: paths.onboarding,
    layout: 'public',
  },
  {
    component: Reset,
    path: paths.reset,
    layout: 'public',
  },
  {
    component: Home,
    path: paths.home,
    layout: 'private',
  },
  {
    component: Calculator,
    path: paths.calculator,
    layout: 'private',
  },
  {
    component: Logros,
    path: paths.logros,
    layout: 'private',
  },
  {
    component: Results,
    path: paths.results,
    layout: 'private',
  },
  {
    component: Ranking,
    path: paths.ranking,
    layout: 'private',
  },
  {
    component: Perfil,
    path: paths.perfil,
    layout: 'private',
  },
  {
    component: Iniciativas,
    path: paths.iniciativas,
    layout: 'private',
  },
]