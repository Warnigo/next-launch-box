import * as process from 'node:process'

export const ENV = {
  NODE_ENV: process.env.NODE_ENV,
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
}
