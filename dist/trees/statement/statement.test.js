"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../test-helper");
test('variable assignment', () => {
    const code = 'a = 5;';
    const tree = test_helper_1.parseStatement(code);
    expect(tree['name']).toBe('a');
    expect(test_helper_1.evalExpression(tree.value)).toBe(5);
});
//# sourceMappingURL=statement.test.js.map