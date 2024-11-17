import { type FC, type PropsWithChildren } from 'react'
import { type Metadata, type Viewport } from 'next'

import { MainLayout } from '@app/layouts'
import { NextIntlProvider } from '@app/providers'

interface Properties {
  params: { locale: string }
}

export const metadata: Metadata = {
  title: {
    default: 'Next Launch Box',
    template: '%s | Next Launch Box',
  },
  description: 'A sleek and powerful frontend template designed to kickstart web projects.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const LocaleLayout: FC<PropsWithChildren<Properties>> = async ({ children, params }) => {
  const { locale } = await params

  return (
    <NextIntlProvider locale={locale}>
      <MainLayout>{children}</MainLayout>
    </NextIntlProvider>
  )
}

LocaleLayout.displayName = 'LocaleLayout'
export default LocaleLayout
