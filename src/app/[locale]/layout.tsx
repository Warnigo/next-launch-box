import { type FC, type PropsWithChildren } from 'react'

import { NextIntlProvider } from '@app/providers'

interface Properties {
  params: { locale: string }
}

const LocaleLayout: FC<PropsWithChildren<Properties>> = async ({ children, params }) => {
  const { locale } = await params

  return <NextIntlProvider locale={locale}>{children}</NextIntlProvider>
}

LocaleLayout.displayName = 'LocaleLayout'
export default LocaleLayout
