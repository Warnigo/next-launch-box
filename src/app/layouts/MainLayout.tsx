import { type FC, type PropsWithChildren } from 'react'

import { Footer } from '@widgets/Footer'
import { Header } from '@widgets/Header'

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <Header />

    <main className="flex-1">{children}</main>

    <Footer />
  </div>
)

MainLayout.displayName = 'MainLayout'
export default MainLayout
