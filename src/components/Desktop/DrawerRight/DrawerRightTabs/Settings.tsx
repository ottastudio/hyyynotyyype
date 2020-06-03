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
    <div
      onClick={value ? disable : enable}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      Dark mode : {text}
    </div>
  );
};
