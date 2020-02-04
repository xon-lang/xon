import { evalExpression, parseCode } from '../../../test-helper';
import { ScopeTree } from '../../scope/scope.tree';
import { ReturnStatementTree } from './return-statement.tree';

test('return in scope', () => {
    const code = 'myScope {\nreturn 6+6\n}\n';
    const tree = parseCode(code, ScopeTree);

    expect(tree.statements[0]).toBeInstanceOf(ReturnStatementTree);
    const returnStatement = tree.statements[0] as ReturnStatementTree;
    expect(evalExpression(returnStatement.value)).toBe(6 + 6);
});
