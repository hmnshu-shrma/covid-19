import asyncComponent from 'Hoc/asyncComponents'

const AsyncLanding = asyncComponent(() => import('../views/landing'))
const ROUTES = [
  {
    path: '/covid-19',
    component: AsyncLanding
  },
  {
    path: '/',
    component: AsyncLanding
  }
]

export default ROUTES
