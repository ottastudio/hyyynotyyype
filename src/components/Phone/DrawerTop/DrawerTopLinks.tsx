import Link from "next/link";
import { useAccordionContext } from "../../../lib/context/AccordionContext";
import {
  SECTION_INDEX,
  SECTION_TYPEFACES,
  SECTION_ACCOUNT,
  SECTION_ETC,
} from "../../../lib/misc";
import { AccordionLinkProps } from "../../Desktop/Accordion/AccordionLink";
import DotTyping from "../../Utils/Placeholders/DotTyping";

export default () => {
  const {
    data: {
      labels: { LABEL_INDEX, LABEL_TYPEFACES, LABEL_ACCOUNT, LABEL_ETC },
      actives: { ACTIVE_INDEX, ACTIVE_TYPEFACES, ACTIVE_ACCOUNT, ACTIVE_ETC },
    },
  } = useAccordionContext();

  const links = [
    {
      name: "index",
      label: LABEL_INDEX,
      href: SECTION_INDEX[0],
      active: ACTIVE_INDEX,
    },
    {
      name: "typefaces",
      label: LABEL_TYPEFACES,
      href: SECTION_TYPEFACES[0],
      active: ACTIVE_TYPEFACES,
    },
    {
      name: "account",
      label: LABEL_ACCOUNT,
      href: SECTION_ACCOUNT[0],
      active: ACTIVE_ACCOUNT,
    },
    {
      name: "etc",
      label: LABEL_ETC,
      href: SECTION_ETC[0],
      active: ACTIVE_ETC,
    },
  ];

  return (
    <>
      <div>
        {links.map(({ label, href, active }, i: number) => (
          <Link href={href} key={i}>
            <a
              className={active ? "drawer-top-link active" : "drawer-top-link"}
            >
              {label}
            </a>
          </Link>
        ))}
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          padding: 0.5rem 0rem 0rem 0.5rem;
          margin-bottom: 40px;
          font-size: 2.3rem;
        }
        .drawer-top-link {
          display: inline-flex;
          align-items: center;
          padding: 0rem 1.3rem;
          height: 60px;
          border: 1px solid var(--lightgrey);
          border-radius: 5rem;
          margin: 0rem 0.5rem 0.5rem 0rem;
          transition: border-radius 300ms ease-in, padding 300ms ease-in;
        }
        .active {
          color: var(--background);
          background-color: var(--lightgrey);
          border-radius: 0;
          padding: 0rem 0.7rem;
        }
      `}</style>
    </>
  );
};
