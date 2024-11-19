import { type FC, type PropsWithChildren } from 'react'

import { ThemeProvider } from './ThemeProvider'

export const Provider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider
    disableTransitionOnChange
    enableSystem
    attribute="class"
    defaultTheme="dark"
  >
    {children}
  </ThemeProvider>
)

Provider.displayName = 'Provider'
