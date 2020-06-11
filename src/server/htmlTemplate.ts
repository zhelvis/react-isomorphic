import { HelmetData } from 'react-helmet-async'

const htmlTemplate = (
  html: string,
  helmet: HelmetData,
  scripts: string
): string =>
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
    ${scripts}
</body>
</html>`

export default htmlTemplate
