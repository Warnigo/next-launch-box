import createMiddleware from 'next-intl/middleware'

import { routing } from 'src/i18n'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(ru|en)/:path*'],
}
