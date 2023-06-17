import DefaultLayout from '@/layout/default'
import HomePage from '@/pages/home'
import NotFound from '@/pages/not-found'

export default [
  {
    path: '/',
    layout: DefaultLayout,
    element: HomePage
  },
  {
    path: '*',
    layout: DefaultLayout,
    element: NotFound
  }
]
