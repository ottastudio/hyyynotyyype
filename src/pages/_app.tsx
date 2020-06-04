import App, { AppContext } from "next/app";
import { PageTransition } from "next-page-transitions";

import { AppProvider } from "../lib/context";
import {
  AccordionContainer,
  AccordionLink,
} from "../components/Desktop/Accordion";
import { PhoneContainer } from "../components/Phone/PhoneContainer";

import DrawerTop from "../components/Phone/DrawerTop";
import DrawerRight from "../components/Desktop/DrawerRight";

export default class extends App<{ isMobile: boolean }> {
  static async getInitialProps(appContext: AppContext) {
    const mobileRegex = /Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i;
    const {
      ctx: { req },
    } = appContext;

    const appProps = await App.getInitialProps(appContext);
    const isMobile = req
      ? req.headers["user-agent"]?.match(mobileRegex)
      : navigator.userAgent.match(mobileRegex);

    return {
      ...appProps,
      isMobile: Boolean(isMobile),
    };
  }

  render() {
    const { Component, pageProps, router, isMobile } = this.props;
    return (
      <>
        <AppProvider>
          {isMobile ? <DrawerTop /> : <DrawerRight />}
          {isMobile ? null : <AccordionLink />}
          <PageTransition
            timeout={{
              enter: 300,
              exit: 150,
            }}
            classNames={isMobile ? "phone-container" : "accordion-container"}
            tag="main"
            skipInitialTransition={true}
            monkeyPatchScrolling={isMobile ? false : true}
          >
            {isMobile ? (
              <PhoneContainer key={router.route}>
                <Component {...pageProps} isMobile={isMobile} />
              </PhoneContainer>
            ) : (
              <AccordionContainer key={router.route}>
                <Component {...pageProps} isMobile={isMobile} />
              </AccordionContainer>
            )}
          </PageTransition>
        </AppProvider>

        <style jsx global>{`
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-ExtraLight.otf") format("opentype"),
              url("/static/fonts/Fracktif-ExtraLight.woff") format("woff"),
              url("/static/fonts/Fracktif-ExtraLight.woff2") format("woff2");
            font-style: normal;
            font-display: swap;
            font-weight: 200;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-ExtraLightItalic.otf")
                format("opentype"),
              url("/static/fonts/Fracktif-ExtraLightItalic.woff") format("woff"),
              url("/static/fonts/Fracktif-ExtraLightItalic.woff2")
                format("woff2");
            font-style: italic;
            font-display: swap;
            font-weight: 200;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-Light.otf") format("opentype"),
              url("/static/fonts/Fracktif-Light.woff") format("woff"),
              url("/static/fonts/Fracktif-Light.woff2") format("woff2");
            font-style: normal;
            font-display: swap;
            font-weight: 300;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-LightItalic.otf")
                format("opentype"),
              url("/static/fonts/Fracktif-LightItalic.woff") format("woff"),
              url("/static/fonts/Fracktif-LightItalic.woff2") format("woff2");
            font-style: italic;
            font-display: swap;
            font-weight: 300;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-Regular.otf") format("opentype"),
              url("/static/fonts/Fracktif-Regular.woff") format("woff"),
              url("/static/fonts/Fracktif-Regular.woff2") format("woff2");
            font-style: normal;
            font-display: swap;
            font-weight: 400;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-RegularItalic.otf")
                format("opentype"),
              url("/static/fonts/Fracktif-RegularItalic.woff") format("woff"),
              url("/static/fonts/Fracktif-RegularItalic.woff2") format("woff2");
            font-style: italic;
            font-display: swap;
            font-weight: 400;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-Medium.otf") format("opentype"),
              url("/static/fonts/Fracktif-Medium.woff") format("woff"),
              url("/static/fonts/Fracktif-Medium.woff2") format("woff2");
            font-style: normal;
            font-display: swap;
            font-weight: 500;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-MediumItalic.otf")
                format("opentype"),
              url("/static/fonts/Fracktif-MediumItalic.woff") format("woff"),
              url("/static/fonts/Fracktif-MediumItalic.woff2") format("woff2");
            font-style: italic;
            font-display: swap;
            font-weight: 500;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-SemiBold.otf") format("opentype"),
              url("/static/fonts/Fracktif-SemiBold.woff") format("woff"),
              url("/static/fonts/Fracktif-SemiBold.woff2") format("woff2");
            font-style: normal;
            font-display: swap;
            font-weight: 600;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-SemiBoldItalic.otf")
                format("opentype"),
              url("/static/fonts/Fracktif-SemiBoldItalic.woff") format("woff"),
              url("/static/fonts/Fracktif-SemiBoldItalic.woff2") format("woff2");
            font-style: italic;
            font-display: swap;
            font-weight: 600;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-Bold.otf") format("opentype"),
              url("/static/fonts/Fracktif-Bold.woff") format("woff"),
              url("/static/fonts/Fracktif-Bold.woff2") format("woff2");
            font-style: normal;
            font-display: swap;
            font-weight: 700;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-BoldItalic.otf") format("opentype"),
              url("/static/fonts/Fracktif-BoldItalic.woff") format("woff"),
              url("/static/fonts/Fracktif-BoldItalic.woff2") format("woff2");
            font-style: italic;
            font-display: swap;
            font-weight: 700;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-ExtraBold.otf") format("opentype"),
              url("/static/fonts/Fracktif-ExtraBold.woff") format("woff"),
              url("/static/fonts/Fracktif-ExtraBold.woff2") format("woff2");
            font-style: normal;
            font-display: swap;
            font-weight: 800;
          }
          @font-face {
            font-family: "Fracktif";
            src: url("/static/fonts/Fracktif-ExtraBoldItalic.otf")
                format("opentype"),
              url("/static/fonts/Fracktif-ExtraBoldItalic.woff") format("woff"),
              url("/static/fonts/Fracktif-ExtraBoldItalic.woff2")
                format("woff2");
            font-style: italic;
            font-display: swap;
            font-weight: 800;
          }
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
            font-family: "Fracktif", sans-serif;
            background-color: var(--background);
            color: var(--foreground);
            font-feature-settings: "ss01";
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
      </>
    );
  }
}
