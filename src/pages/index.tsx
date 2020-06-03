import Head from "next/head";
import { PageProps } from "../../global";

const Index: PageProps = ({ isMobile }) => {
  return (
    <>
      <Head>
        <title>Hyyyno Tyyype</title>
      </Head>
      <div className="dummy">Index on {isMobile ? "Phone" : "Desktop"}</div>
    </>
  );
};

export default Index;
