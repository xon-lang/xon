"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const character_literal_expression_tree_1 = require("./character-literal-expression.tree");
test('a char', () => {
    const code = "'a'";
    const tree = test_helper_1.parseCode(code, character_literal_expression_tree_1.CharacterLiteralExpressionTree);
    expect(tree.value).toBe(code.replace(/\'/g, ''));
});
//# sourceMappingURL=character-literal-expression.test.js.map