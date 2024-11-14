import { type FC, type PropsWithChildren } from 'react'

import { MainLayout } from './layouts'
import { Provider } from './providers'

import './styles/globals.css'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html
    suppressHydrationWarning
    lang="en"
  >
    <body>
      <Provider>
        <MainLayout>{children}</MainLayout>
      </Provider>
    </body>
  </html>
)

export default RootLayout
