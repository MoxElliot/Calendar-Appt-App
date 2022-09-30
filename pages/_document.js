import Document, { Html, Head, Main, NextScript } from 'next/document'


//this file is to import the stylesheet. in next.js adding the link/stylesheet in to the head of the index could potentially break when used with Suspense or streaming.

export default class CustomDocument extends Document {
  render() {
    return <Html>
        <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
  }
}