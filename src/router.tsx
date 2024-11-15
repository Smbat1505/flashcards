import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Decks } from '@/pages/decks'

const publicRoutes: RouteObject[] = [
  {
    element: <div>login</div>,
    errorElement: <div>This is login error!</div>,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/',
  },
]

const premiumRoutes: RouteObject[] = [
  {
    element: <div>premium content</div>,
    path: '/premium',
  },
]

const router = createBrowserRouter([
  {
    children: premiumRoutes,
    element: <PremiumRoutes />,
    errorElement: <div>This is premium error!</div>,
  },
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
    errorElement: <div>This is privateRoutes error!</div>,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

function PremiumRoutes() {
  const isPremium = true

  return isPremium ? <Outlet /> : <div>Sorry, this is for Premium Users</div>
}
