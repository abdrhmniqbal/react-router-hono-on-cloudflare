import { getLoadContext } from '@/server/context'
import type { Context } from 'hono'
import { contextStorage } from 'hono/context-storage'
import { serveStatic } from '@hono/node-server/serve-static'
import { poweredBy } from 'hono/powered-by'
import { NONCE, secureHeaders } from 'hono/secure-headers'
import { trimTrailingSlash } from 'hono/trailing-slash'
import { createHonoServer } from 'react-router-hono-server/cloudflare'

export type HonoApp = {
  Bindings: {
    APP_NAME: string
  }
  Variables: {
    secureHeadersNonce: string
  }
}

const isProductionMode = process.env.NODE_ENV === 'production'
export default await createHonoServer({
  getLoadContext: getLoadContext,
  configure: (server) => {
    /**
     * Clean route paths. (No ending slashes, Better SEO)
     */
    server.use(trimTrailingSlash())

    /**
     * Context storage
     */
    server.use(contextStorage())

    /**
     * Good practices: Disable x-powered-by.
     * @see http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
     */
    server.use(poweredBy())

    /**
     * Content Security Policy.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
     */
    server.use(
      '*',
      secureHeaders({
        contentSecurityPolicy: {
          connectSrc: isProductionMode
            ? ["'self'"]
            : ["'self'", 'ws:'],
          fontSrc: ["'self'", 'fonts.gstatic.com'],
          frameSrc: ["'self'"],
          imgSrc: ["'self'", 'data:'],
          scriptSrc: [NONCE, "'strict-dynamic'", "'self'"],
          scriptSrcAttr: [NONCE],
          upgradeInsecureRequests: [],
        },
      }),
    )

    /**
     * Serve static files on development mode.
     */
    if (!isProductionMode) {
        server.use('*', serveStatic({ root: '/public' }))
    }

    /**
     * Api Route Example
     */
    server.get('/api', (c: Context<HonoApp, any, {}>) => {
        return c.json({
          message: 'Hello',      
          var: c.env.APP_NAME
        })
    })
  },
})