const withPWA = require("next-pwa");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase !== PHASE_DEVELOPMENT_SERVER) {
    return withPWA({
      pwa: {
        dest: "public",
      },
    });
  }
  return { defaultConfig };
};
