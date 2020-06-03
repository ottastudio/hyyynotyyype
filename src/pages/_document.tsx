import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Hyno Type is an open source typograhy platform"
          />

          <meta name="format-detection" content="telephone=no" />
          <meta name="application-name" content="Hyno Type" />

          <meta name="apple-mobile-web-app-title" content="Hyno Type" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/images/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/images/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/images/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/images/icons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/images/icons/safari-pinned-tab.svg"
            color="#adff2f"
          />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta
            name="msapplication-config"
            content="/static/images/icons/browserconfig.xml"
          />
          <meta name="theme-color" content="#adff2f" />

          <link
            href="/static/images/splashscreens/iphone5_splash.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/static/images/splashscreens/iphone6_splash.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/static/images/splashscreens/iphoneplus_splash.png"
            media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/static/images/splashscreens/iphonex_splash.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/static/images/splashscreens/iphonexr_splash.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/static/images/splashscreens/iphonexsmax_splash.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/static/images/splashscreens/ipad_splash.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/static/images/splashscreens/ipadpro1_splash.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/static/images/splashscreens/ipadpro3_splash.png"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/static/images/splashscreens/ipadpro2_splash.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />

          <style jsx global>{`
            :root {
              --background: #f5f5f5;
              --foreground: #202020;
              --tab-background: #f5f5f5;
              --tab-foreground: #dedede;
              --lightgrey: #dedede;
              --highlight: #0000ff;
              --deeppink: #ff1493;

              --light-line: #efefef;
            }

            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: 0;
              font-family: "Helvetica Neue", sans-serif;
              background-color: var(--background);
              color: var(--foreground);
              overscroll-behavior-y: none;
            }

            .theme--light {
              --background: #f5f5f5;
              --foreground: #202020;
              --tab-background: #f5f5f5;
              --tab-foreground: #dedede;
              --lightgrey: #dedede;
              --highlight: #0000ff;
              --deeppink: #ff1493;

              --light-line: #efefef;
            }
            .theme--dark {
              --background: #202020;
              --foreground: #e2e2e2;
              --tab-background: #202020;
              --tab-foreground: #0c0c0c;
              --lightgrey: #0c0c0c;
              --highlight: #adff2f;
              --deeppink: #ff1493;

              --light-line: #1d1d1d;
            }

            #__next {
              background-color: inherit;
              color: inherit;
            }

            a,
            button,
            input {
              color: inherit;
              text-decoration: none;
              backface-visibility: hidden;
              -webkit-tap-highlight-color: transparent;
            }

            .accordion-container-enter,
            .phone-container-enter,
            .accordion-container-enter-active,
            .phone-container-enter-active {
              opacity: 0;
            }
            .accordion-container-enter-done,
            .phone-container-enter-done {
              opacity: 1;
              transition: opacity 300ms cubic-bezier(1, 0, 0.5, 1);
            }
            .accordion-container-exit,
            .phone-container-exit {
              opacity: 1;
              transition: opacity 150ms ease;
            }
            .accordion-container-exit-active,
            .phone-container-exit-active,
            .accordion-container-exit-done,
            .phone-container-exit-done {
              opacity: 0;
            }

            .dummy {
              height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 5vw;
              font-weight: bold;
            }
          `}</style>
        </Head>

        <body>
          <script src="/noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
