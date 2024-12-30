import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { LoginPage } from '@/pages/auth/login/loginPage'
import { Decks } from '@/pages/decks'
import { Premium } from '@/pages/premium'
import { Profile } from '@/pages/profile'
import { useAuthMeQuery } from '@/services/auth/auth.service'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    errorElement: <div>This is login error!</div>,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/',
  },
  {
    element: <Profile />,
    path: '/profile',
  },
]

const premiumRoutes: RouteObject[] = [
  {
    //element: <div>premium content</div>,
    element: <Premium />,
    path: '/premium',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
    errorElement: <div>This is privateRoutes error!</div>,
  },
  {
    children: premiumRoutes,
    element: <PremiumRoutes />,
    errorElement: <div>This is premium error!</div>,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { isError, isLoading } = useAuthMeQuery()

  if (isLoading) {
    return null
  }

  const isAuthenticated = !isError

  console.log('isAuthenticated: ' + isAuthenticated)

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

function PremiumRoutes() {
  const isPremium = true

  return isPremium ? <Outlet /> : <div>Sorry, this is for Premium Users</div>
}
