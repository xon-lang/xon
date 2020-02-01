"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const preprocessor_statement_tree_1 = require("./preprocessor-statement.tree");
test('preprocessor test for any symbol', () => {
    const code = '#{joke wrong goal virus 40298 .RGJ^ j 6& W DCVµˆ∆∑ªº¨˙√å∂√∆π–√•∂√¶˙∆˚çßÎ◊´‰◊´®√ı}';
    const tree = test_helper_1.parseCode(code, preprocessor_statement_tree_1.PreprocessorStatementTree);
});
//# sourceMappingURL=preprocessor-statement.test.js.map