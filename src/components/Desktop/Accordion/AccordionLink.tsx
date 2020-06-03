import Link from "next/link";
import { useAccordionContext } from "../../../lib/context/AccordionContext";
import { useDrawerContext } from "../../../lib/context/DrawerContext";
import {
  SECTION_INDEX,
  SECTION_TYPEFACES,
  SECTION_ACCOUNT,
  SECTION_ETC,
} from "../../../lib/misc";
import DotTyping from "../../Utils/Placeholders/DotTyping";

export type AccordionName = "index" | "typefaces" | "account" | "etc";

export type AccordionLinkProps = {
  name: AccordionName;
  label: string;
  href: string;
};

export default () => {
  const { rightDrawer } = useDrawerContext();
  const {
    data: {
      labels: { LABEL_INDEX, LABEL_TYPEFACES, LABEL_ACCOUNT, LABEL_ETC },
      actives: { ACTIVE_INDEX, ACTIVE_TYPEFACES, ACTIVE_ACCOUNT, ACTIVE_ETC },
    },
  } = useAccordionContext();

  const accordionLinks: AccordionLinkProps[] = [
    {
      name: "index",
      label: LABEL_INDEX,
      href: SECTION_INDEX[0],
    },
    {
      name: "typefaces",
      label: LABEL_TYPEFACES,
      href: SECTION_TYPEFACES[0],
    },
    {
      name: "account",
      label: LABEL_ACCOUNT,
      href: SECTION_ACCOUNT[0],
    },
    {
      name: "etc",
      label: LABEL_ETC,
      href: SECTION_ETC[0],
    },
  ];

  const moveToLeftClass = (i: AccordionName) => {
    switch (i) {
      case "index":
        return ACTIVE_INDEX
          ? "accordion-link-index accordion-link-index__left"
          : "accordion-link-index";
      case "typefaces":
        return ACTIVE_TYPEFACES || ACTIVE_ACCOUNT || ACTIVE_ETC
          ? "accordion-link-typefaces accordion-link-typefaces__left"
          : "accordion-link-typefaces";
      case "account":
        return ACTIVE_ACCOUNT || ACTIVE_ETC
          ? "accordion-link-account accordion-link-account__left"
          : "accordion-link-account";
      case "etc":
        return ACTIVE_ETC
          ? "accordion-link-etc accordion-link-etc__left"
          : "accordion-link-etc";
      default:
        break;
    }
  };

  const whenActiveClass = (i: AccordionName) => {
    switch (i) {
      case "index":
        return ACTIVE_INDEX ? "active" : "";
      case "typefaces":
        return ACTIVE_TYPEFACES ? "active" : "";
      case "account":
        return ACTIVE_ACCOUNT ? "active" : "";
      case "etc":
        return ACTIVE_ETC ? "active" : "";
      default:
        break;
    }
  };

  const whenDrawerOpenClass = (i: AccordionName) => {
    const indexDrawer = rightDrawer && !ACTIVE_INDEX;
    const typefacesDrawer =
      rightDrawer && !ACTIVE_TYPEFACES && !ACTIVE_ACCOUNT && !ACTIVE_ETC;
    const accountDrawer = rightDrawer && !ACTIVE_ACCOUNT && !ACTIVE_ETC;
    const etcDrawer = rightDrawer && !ACTIVE_ETC;

    switch (i) {
      case "index":
        return indexDrawer ? "index-with-drawer" : "";
      case "typefaces":
        return typefacesDrawer ? "typefaces-with-drawer" : "";
      case "account":
        return accountDrawer ? "account-with-drawer" : "";
      case "etc":
        return etcDrawer ? "etc-with-drawer" : "";
      default:
        break;
    }
  };

  const activeIndicator = (i: AccordionName) => {
    switch (i) {
      case "index":
        return ACTIVE_INDEX ? <DotTyping /> : ".";
      case "typefaces":
        return ACTIVE_TYPEFACES ? <DotTyping /> : ".";
      case "account":
        return ACTIVE_ACCOUNT ? <DotTyping /> : ".";
      case "etc":
        return ACTIVE_ETC ? <DotTyping /> : ".";
      default:
        break;
    }
  };

  return (
    <>
      {accordionLinks.map(({ name, label, href }, i: number) => (
        <Link href={href} key={i}>
          <a
            className={`accordion-link ${moveToLeftClass(
              name
            )} ${whenActiveClass(name)} ${whenDrawerOpenClass(name)}`}
          >
            <label>
              {label}
              {activeIndicator(name)}
            </label>
          </a>
        </Link>
      ))}

      <style jsx>{`
        .accordion-link {
          position: fixed;
          top: 0;
          width: 40px;
          height: 100vh;
          border-left: 1px solid var(--lightgrey);
          background-color: var(--background);
          color: var(--lightgrey);
          overflow: hidden;
          transition: left 300ms cubic-bezier(1, 0, 0, 1);
          z-index: 2000;
        }
        .accordion-link:hover {
          color: var(--foreground);
        }
        .accordion-link-index {
          left: 0px;
          border-left: none;
        }
        .accordion-link-index__left {
          left: 0px;
        }

        .accordion-link-typefaces {
          left: calc(100% - 163px);
        }
        .accordion-link-typefaces__left {
          left: 40px;
        }

        .accordion-link-account {
          left: calc(100% - 121px);
        }
        .accordion-link-account__left {
          left: 80px;
        }

        .accordion-link-etc {
          left: calc(100% - 82px);
        }
        .accordion-link-etc__left {
          left: 120px;
        }

        .active {
          background-color: var(--background);
          color: var(--foreground);
        }

        .typefaces-with-drawer {
          left: calc(100% - 540px);
        }
        .account-with-drawer {
          left: calc(100% - 500px);
        }
        .etc-with-drawer {
          left: calc(100% - 460px);
        }

        a {
          position: relative;
        }
        label {
          position: absolute;
          width: 180px;
          padding: 0px 5px;
          top: 20px;
          font-size: 1.5rem;
          left: 50%;
          transform: rotate(-90deg) translateX(-100%) translateY(-50%);
          transform-origin: 0 0;
          cursor: inherit;
          user-select: none;
        }
      `}</style>
    </>
  );
};
