import Head from "next/head";

export default ({ ...props }) => {
  const { isMobile } = props;
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <div className="dummy">Account on {isMobile ? "Phone" : "Desktop"}</div>
    </>
  );
};
