import React, { FC, ReactNode } from 'react'

export type LayoutProps = {
  title: string,
  description: string,
  locale?: string,
  children: ReactNode,
}

export const Layout: FC<LayoutProps> = ({ title, description, locale = 'ru_RU', children }) => (
  <html lang={locale}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:locale" content={locale} />
      <title>{title}</title>
    </head>
    <body>{children}</body>
  </html>
)
