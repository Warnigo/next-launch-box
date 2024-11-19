import { getRequestConfig } from 'next-intl/server'

import { type Locale } from '@shared/types'

import { routing } from './routing'

type Messages = Record<string, string>

export default getRequestConfig(async ({ requestLocale }) => {
  const localeValue = await requestLocale
  const locale =
    !localeValue || !routing.locales.includes(localeValue as Locale)
      ? routing.defaultLocale
      : localeValue

  const translations = (await import(`../locales/${locale}.json`)) as { default: Messages }
  const messages = translations.default

  return {
    locale,
    messages,
  }
})
