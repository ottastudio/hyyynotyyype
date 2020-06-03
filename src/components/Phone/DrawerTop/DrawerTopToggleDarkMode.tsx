import useDarkMode from "use-dark-mode";
import { useEffect, useState } from "react";

export default () => {
  const { value, disable, enable } = useDarkMode(false, {
    classNameDark: "theme--dark",
    classNameLight: "theme--light",
  });

  const [text, setText] = useState<string>("Off");
  useEffect(() => {
    value ? setText("On") : setText("Off");
  });
  return (
    <>
      <div className="toggle-theme">
        <span className={value ? "text active" : "text"}>
          <label>Dark theme</label> &rarr; <label>{text}</label>
        </span>
        <span className="toggle">
          <input
            id="dm-check"
            className="dm-check"
            type="checkbox"
            checked={value}
            onChange={value ? disable : enable}
          />
          <label htmlFor="dm-check" />
        </span>
      </div>

      <style jsx>{`
        .toggle-theme {
          user-select: none;
          height: 50px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--light-line);
          border-top: 1px solid var(--light-line);
          padding: 0rem 1rem 0rem 0.5rem;
        }

        .text {
          font-size: 1rem;
          color: var(--lightgrey);
          text-transform: uppercase;
        }
        .text label {
          border: 1px solid;
          border-radius: 3rem;
          padding: 0rem 0.5rem;
          height: 32px;
          display: inline-flex;
          align-items: center;
        }
        .active label {
          background-color: var(--lightgrey);
          color: var(--background);
        }

        .toggle {
          position: relative;
          width: 80px;
          height: 32px;
        }

        .dm-check {
          width: 100%;
          height: 100%;
          margin: 0;
          position: relative;
          outline: none;
          border: none;
          background: none;
          background-color: inherit;
          color: inherit;
          -webkit-appearance: none;
          display: flex;
          align-items: center;
          border-radius: 5rem;
          border: 1px solid var(--lightgrey);
          background-color: var(--background);
          transition: background-color 300ms ease;
        }
        .dm-check + label {
          position: absolute;
          left: 4px;
          top: 50%;
          transform: translateY(-50%);
          display: inline-block;
          width: 24px;
          height: 24px;
          color: var(--lightgrey);
          border: 1px solid;
          transition: left 300ms cubic-bezier(1, 0, 0, 1);
          border-radius: 100%;
          background-color: transparent;
        }
        .dm-check:checked {
          background-color: var(--lightgrey);
          border: 1px solid var(--lightgrey);
        }
        .dm-check:checked + label {
          left: 52px;
          color: var(--background);
          background-color: var(--background);
        }
      `}</style>
    </>
  );
};
