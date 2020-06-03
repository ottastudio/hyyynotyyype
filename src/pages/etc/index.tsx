import Head from "next/head";

export default ({ ...props }) => {
  const { isMobile } = props;
  return (
    <>
      <Head>
        <title>Etc.</title>
      </Head>
      <div className="dummy">Etc on {isMobile ? "Phone" : "Desktop"}</div>
    </>
  );
};
