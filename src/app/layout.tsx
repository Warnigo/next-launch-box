import { type FC, type PropsWithChildren } from 'react'

import { Provider } from '@app/providers'

import './styles/globals.css'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html
    suppressHydrationWarning
    lang="en"
  >
    <body>
      <Provider>{children}</Provider>
    </body>
  </html>
)

export default RootLayout
