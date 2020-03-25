import { evalExpression, parseCode } from '../../../test-helper';
import { ConstantStatementTree } from './constant-statement.tree';

test('declaration without type', () => {
    const code = 'a ::= 5 + 5';
    const tree = parseCode(code, ConstantStatementTree);
    expect(tree.name).toBe('a');
    expect(evalExpression(tree.value)).toBe(5 + 5);
});
