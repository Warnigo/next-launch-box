import { type FC, Fragment, type PropsWithChildren } from 'react'

export const Provider: FC<PropsWithChildren> = ({ children }) => <Fragment>{children}</Fragment>

Provider.displayName = 'Provider'
