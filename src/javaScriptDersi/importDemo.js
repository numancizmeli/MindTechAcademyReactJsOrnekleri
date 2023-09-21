import createSomeKeyDefault, { apiKey } from './exportDemo.js'
import { createSomeKey } from './exportDemo.js'

console.log(apiKey)
createSomeKey()
createSomeKeyDefault()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// Named import: import { export1, export2 } from "module-name";
// Default import: import defaultExport from "module-name";
// Namespace import: import * as name from "module-name";
// Side effect import: import "module-name";
