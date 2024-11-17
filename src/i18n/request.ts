import { getRequestConfig } from 'next-intl/server'

import { type Locale } from '@shared/types'

import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,unicorn/no-await-expression-member
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
