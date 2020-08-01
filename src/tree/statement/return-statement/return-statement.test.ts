import { evalExpression, parseCode } from '../../../test-helper';
import { ReturnStatementTree } from './return-statement.tree';

test('return in scope', () => {
    const code = 'return 6+6';
    const tree = parseCode(code, ReturnStatementTree);

    expect(tree).toBeInstanceOf(ReturnStatementTree);
    const returnStatement = tree as ReturnStatementTree;
    expect(returnStatement.value.eval()).toBe(6 + 6);
});
