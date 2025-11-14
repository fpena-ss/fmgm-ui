import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Header } from '../features/header/components/Header'
import { ProvidersLayer } from '../providers/ProvidersLayer'

const RootLayout = () => (
  <>
    <ProvidersLayer>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </ProvidersLayer>
  </>
)

export const Route = createRootRoute({ component: RootLayout })
