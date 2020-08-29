import { evalExpression } from '../../../eval';
import { parseStatement } from '../../../parse';
import { ExpressionStatementTree } from './expression-statement.tree';

test('variable assignment', () => {
    const code = '5 + 5\n';
    const tree = parseStatement<ExpressionStatementTree>(code);
    console.log(tree.toJson());
    expect(evalExpression(tree.value)).toBe(10);
});
