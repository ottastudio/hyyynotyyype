import Head from "next/head";

export default ({ ...props }) => {
  const { isMobile } = props;
  return (
    <>
      <Head>
        <title>Hyyyno Tyyype</title>
      </Head>
      <div className="dummy">Index on {isMobile ? "Phone" : "Desktop"}</div>
    </>
  );
};
