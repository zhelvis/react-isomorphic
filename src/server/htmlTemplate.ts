import { HelmetData } from 'react-helmet-async'

interface htmlTemplateProps {
  html: string;
  helmet: HelmetData;
  scripts: string;
  isAuth: boolean;
}

const htmlTemplate = ({
  html,
  helmet,
  scripts,
  isAuth,
}: htmlTemplateProps): string =>
  `<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
</head>   
<body>
    <div id="root">${html}</div>
    <script>
      window.__AUTH_STATE__ = ${JSON.stringify({ isAuth }).replace(
        /</g,
        '\\u003c'
      )}
    </script>
    ${scripts}
</body>
</html>`

export default htmlTemplate
