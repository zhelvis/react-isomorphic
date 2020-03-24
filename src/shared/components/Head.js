import React from 'react'
import { Helmet } from 'react-helmet-async'

export const Head = ({ description, title }) => {
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
