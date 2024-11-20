import { type GetServerSidePropsContext } from 'next'

import { ENV } from '@shared/config'
import type { FetchOptions } from '@shared/types'

class FetchInstance {
  private readonly baseURL: string

  constructor(baseURL: string) {
    if (!baseURL) {
      throw new Error('Base URL is required for API requests')
    }
    this.baseURL = baseURL
  }

  public async get<T>(
    endpoint: string,
    options: Omit<FetchOptions, 'method'> = {},
    context?: GetServerSidePropsContext
  ): Promise<T> {
    return this.request(endpoint, { ...options, method: 'GET' }, context)
  }

  public async post<T>(
    endpoint: string,
    body: Record<string, any>,
    options: Omit<FetchOptions, 'method'> = {},
    context?: GetServerSidePropsContext
  ): Promise<T> {
    return this.request(endpoint, { ...options, method: 'POST', body }, context)
  }

  public async put<T>(
    endpoint: string,
    body: Record<string, any>,
    options: Omit<FetchOptions, 'method'> = {},
    context?: GetServerSidePropsContext
  ): Promise<T> {
    return this.request(endpoint, { ...options, method: 'PUT', body }, context)
  }

  public async patch<T>(
    endpoint: string,
    body: Record<string, any>,
    options: Omit<FetchOptions, 'method'> = {},
    context?: GetServerSidePropsContext
  ): Promise<T> {
    return this.request(endpoint, { ...options, method: 'PATCH', body }, context)
  }

  public async delete<T>(
    endpoint: string,
    options: Omit<FetchOptions, 'body' | 'method'> = {},
    context?: GetServerSidePropsContext
  ): Promise<T> {
    return this.request(endpoint, { ...options, method: 'DELETE' }, context)
  }

  /**
   * Internal method to handle all HTTP requests
   * @param endpoint API endpoint path
   * @param options Request configuration
   * @param _context
   */
  private async request<T>(
    endpoint: string,
    options: FetchOptions & { body?: Record<string, any> } = {},
    _context?: GetServerSidePropsContext
  ): Promise<T> {
    const { method = 'GET', headers = {}, body, cache = 'no-store' } = options

    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      'Cache-Control': cache === 'no-store' ? 'no-store' : 'force-cache',
      ...headers,
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method,
        headers: requestHeaders,
        body: body ? JSON.stringify(body) : undefined,
        cache: cache === 'no-store' ? 'no-store' : 'force-cache',
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Request failed: ${errorText || response.statusText}`)
      }

      return response.json()
    } catch (error) {
      console.error('Fetch Error:', error)
      throw error
    }
  }
}

export const fetchInstance = new FetchInstance(ENV.NODE_ENV)
