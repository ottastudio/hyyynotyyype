import App, { AppContext, AppInitialProps } from "next/app";
import { PageTransition } from "next-page-transitions";

import { AppProvider } from "../lib/context";
import {
  AccordionContainer,
  AccordionLink,
} from "../components/Desktop/Accordion";
import { PhoneContainer } from "../components/Phone/PhoneContainer";

import DrawerTop from "../components/Phone/DrawerTop";
import DrawerRight from "../components/Desktop/DrawerRight";

const MyApp = ({ ...props }) => {
  const { Component, pageProps, router, isMobile } = props;

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
          monkeyPatchScrolling={true}
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
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const {
    ctx: { req },
  } = appContext;

  const appProps: AppInitialProps = await App.getInitialProps(appContext);

  const mobileRegex = /Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i;
  const isMobile = req
    ? req.headers["user-agent"]?.match(mobileRegex)
    : navigator.userAgent.match(mobileRegex);

  return {
    ...appProps,
    isMobile: Boolean(isMobile),
  };
};

export default MyApp;
