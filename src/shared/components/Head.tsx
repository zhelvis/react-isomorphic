import React from 'react'
import { Helmet } from 'react-helmet-async'

export interface HeadProps {
  description: string;
  title: string;
}

export const Head: React.FC<HeadProps> = ({
  title,
  description,
}: HeadProps) => {
  const locale = 'ru'

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: locale,
        },
      ]}
    />
  )
}
