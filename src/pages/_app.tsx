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
      </>
    );
  }
}
