import { CompoundTabProps } from ".";
import { useTabContext } from "../../../lib/context/TabContext";

export default ({ tabs }: CompoundTabProps) => {
  const { activeTab, setActiveTab } = useTabContext();
  return (
    <>
      <div className="compound-tab__header">
        {tabs?.map(({ label }, i: number) => (
          <a
            key={i}
            className="tab-button-container"
            onClick={() => setActiveTab(label)}
            style={{
              width: `calc(${100 / tabs.length}% - 1rem)`,
              zIndex: activeTab === label ? 10 : 0,
              backgroundColor:
                activeTab === label
                  ? "var(--tab-foreground"
                  : "var(--tab-background)",
            }}
          >
            <label
              className="label"
              style={{
                color:
                  activeTab !== label
                    ? "var(--tab-foreground)"
                    : "var(--foreground)",
              }}
            >
              <span>{label}</span>{" "}
              <span className="mark">{activeTab === label ? "●" : "○"}</span>
            </label>

            {/* Left Bend Shape */}
            <div className="bend-container bend-container__left">
              <span
                className="outer-bend"
                style={{
                  borderBottomRightRadius: "0.8rem",
                  left: 0,
                }}
              />

              <span
                className="inner-bend"
                style={{
                  borderTopLeftRadius: "1rem",
                  right: 0,
                }}
              />
            </div>

            {/* Right Bend Shape */}
            <div className="bend-container bend-container__right">
              <span
                className="outer-bend"
                style={{
                  borderBottomLeftRadius: "0.8rem",
                  right: 0,
                }}
              />

              <span
                className="inner-bend"
                style={{
                  borderTopRightRadius: "1rem",
                  left: 0,
                }}
              />
            </div>
          </a>
        ))}
      </div>

      <style jsx global>{`
        .compound-tab__header {
          padding: 0.5rem 1rem 0rem 1rem;
          background-color: var(--tab-background);
          display: flex;
          flex-wrap: nowrap;
        }

        .tab-button-container {
          background-color: var(--tab-foreground);
          width: 100%;
          max-width: 240px;
          margin-left: 1rem;
          height: 34px;
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          border: none;
          outline: none;
        }
        .tab-button-container .label {
          position: relative;
          background-color: inherit;
          text-transform: capitalize;
          cursor: inherit;
          width: 100%;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
        }
        .tab-button-container .label .mark {
          position: absolute;
          right: 0;
          font-size: 1.2rem;
          background-color: inherit;
        }
        .bend-container {
          width: 1rem;
          height: 50%;
          position: absolute;
          bottom: 0;
          background-color: inherit;
        }
        .bend-container__left {
          left: -1rem;
        }
        .bend-container__right {
          right: -1rem;
        }

        .outer-bend {
          background-color: var(--tab-background);
          width: 50%;
          height: 200%;
          position: absolute;
          bottom: 0;
          pointer-events: none;
        }
        .inner-bend {
          background-color: inherit;
          width: 50%;
          height: 200%;
          position: absolute;
          bottom: 0;
        }
      `}</style>
    </>
  );
};
