const typescript = require("./configs/typescript");
const react = require("./configs/react");

/** @type import("eslint-define-config").Plugin */
module.exports = {
  configs: {
    react,
    typescript
  }
}
