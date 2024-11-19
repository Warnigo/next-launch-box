import { type FC, type PropsWithChildren } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { routing } from '@/i18n/routing'

import { type Locale } from '@shared/types/locales'

interface Properties {
  locale: string
}

export const NextIntlProvider: FC<PropsWithChildren<Properties>> = async ({ children, locale }) => {
  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()

  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
}

NextIntlProvider.displayName = 'NextIntlProvider'
