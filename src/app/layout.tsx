import { type FC, type PropsWithChildren } from 'react'

import './styles/globals.css'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html
    suppressHydrationWarning
    lang="en"
  >
    <body>{children}</body>
  </html>
)

export default RootLayout
