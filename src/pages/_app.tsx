import { AppProps } from "next/app";
import { AppProvider, AppConsumer } from "../lib/context";

export default ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <AppProvider>
        <AppConsumer>
          {() => <Component {...pageProps} key={router.route} />}
        </AppConsumer>
      </AppProvider>

      <style jsx global>{`
        :root {
          --background: #f5f5f5;
          --foreground: #202020;
          --tab-background: #f5f5f5;
          --tab-foreground: #dedede;
          --lightgrey: #dedede;
          --highlight: #0000ff;
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
        }
        .theme--dark {
          --background: #202020;
          --foreground: #e2e2e2;
          --tab-background: #202020;
          --tab-foreground: #0c0c0c;
          --lightgrey: #0c0c0c;
          --highlight: #adff2f;
        }
      `}</style>
    </>
  );
};
