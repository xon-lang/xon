import { parseCode, evalExpression } from '../../test-helper';
import { IfStatementTree } from './if-statement.tree';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';

test('variable assignment', () => {
    const code = 'if 12+45/5 { 12+45/5; }';
    const tree = parseCode(code, IfStatementTree);
    expect(tree.condition).not.toBeUndefined();
    expect(evalExpression(tree.condition)).toBe(12 + 45 / 5);

    console.log(tree.statements[0].ctx.text)
    expect(tree.statements.length).toBe(1);
    const statement = tree.statements[0] as ExpressionStatementTree;
    expect(evalExpression(statement.value)).toBe(12 + 45 / 5);
});
