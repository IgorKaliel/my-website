import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { theme } from '../styles/theme'
import { analyticId } from "../data/config";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="UTF-8" />
          {
            analyticId ? (
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${analyticId}`}
              />
            ) : null
          }
          {analyticId ? (
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analyticId}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          ) : null}

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="./static/favicons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="./static/favicons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="./static/favicons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="./static/favicons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="./static/favicons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="./static/favicons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="./static/favicons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="./static/favicons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./static/favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="./static/favicons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="./static/favicons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="./static/favicons/manifest.json" />

          <style data-href="https://fonts.googleapis.com/css2?family=Inter&amp;display=swap">
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              src: url(Inter.woff2) format('woff2');
              unicode-range:
                U+0000-00FF,
                U+0152-0153,
                U+02BB-02BC,
                U+2000-206F,
            }
          </style>
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="./static/favicons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;