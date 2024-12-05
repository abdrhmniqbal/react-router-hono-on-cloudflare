import { getClientEnv, initEnv } from '@/env.server'
import type { HonoApp } from '@/server/index'
import type { Context } from 'hono'

export const getLoadContext = async (c: Context<HonoApp, any, {}>) => {
  // Setup the .env vars
  const env = initEnv(c.env)
  const clientEnv = getClientEnv()
  const cspNonce = c.get('secureHeadersNonce')
  return {
    cspNonce,
    env,
    clientEnv,
    appVersion: process.env.APP_VERSION || '1.0.0',
  }
}

interface LoadContext extends Awaited<ReturnType<typeof getLoadContext>> {}

/**
 * Declare our loaders and actions context type
 */
declare module 'react-router' {
  interface AppLoadContext extends Omit<LoadContext, 'body'> {}
}