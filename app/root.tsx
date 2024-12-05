import { useNonce } from '@/lib/hooks/use-nonce'
import type { MetaFunction } from 'react-router';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import '@/app.css'
import type { Route } from "./+types/root";


export const meta: MetaFunction = () => {
  return [
    { title: 'React Router Hono on Cloudflare' },
    { name: 'description', content: `Your own captain's log` },
  ]
}

export const links: Route.LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
  ];

export function Layout({ children }: { children: React.ReactNode }) {
  const nonce = useNonce()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}