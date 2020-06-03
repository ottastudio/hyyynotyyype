import Head from "next/head";

export default ({ ...props }) => {
  const { isMobile } = props;
  return (
    <>
      <Head>
        <title>Typefaces</title>
      </Head>
      <div className="dummy">Typefaces on {isMobile ? "Phone" : "Desktop"}</div>
    </>
  );
};
