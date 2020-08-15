import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { ExpressionStatementTree } from './expression-statement.tree';

test('variable assignment', () => {
    const code = '5 + 5\n';
    const tree = parseCode(code, ExpressionStatementTree);
    expect(evalExpression(tree.value)).toBe(10);
});
