import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Header } from '@features/header/components/Header'
import { Footer } from '@features/footer/components/Footer'
import { ProvidersLayer } from '@providers/ProvidersLayer'
import { WorkInProgress } from '@shared/components/WorkInProgress'

const RootLayout = () => (
  <>
    <ProvidersLayer>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <TanStackRouterDevtools />
    </ProvidersLayer>
  </>
)

export const Route = createRootRoute({ 
  component: RootLayout,
  notFoundComponent: WorkInProgress,
})
