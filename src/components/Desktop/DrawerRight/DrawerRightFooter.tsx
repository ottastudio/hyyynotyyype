import DotTyping from "../../Utils/Placeholders/DotTyping";

export default () => {
  const copy = "©2020 Hyno Typefoundry. All rights reserved.";
  return (
    <>
      <footer>
        <div className="footer-credit">
          <div className="record">
            <DotTyping dot="○" />
          </div>
          By{" "}
          <a
            href="https://ottastudio.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Otta &amp; Studddio's
          </a>{" "}
          and{" "}
          <a
            href="https://degarism.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            DGr Type.
          </a>
        </div>

        <div className="footer-copy">{copy}</div>
      </footer>

      <style jsx>{`
        footer {
          position: absolute;
          right: 0rem;
          bottom: 0rem;
          left: 40px;
          padding: 0.5rem 0.5rem 1rem 0px;
          user-select: none;
          font-size: 0.8rem;
          box-sizing: border-box;
          background-color: var(--background);
          color: var(--lightgrey);
        }

        .footer-credit a:hover {
          color: var(--highlight);
        }

        .record {
          color: var(--highlight);
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
};
