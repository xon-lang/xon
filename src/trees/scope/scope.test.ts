import { parseCode } from '../../test-helper';
import { FunctionCallExpressionTree } from '../expression/function-call-expression/function-call-expression.tree';
import { ExpressionStatementTree } from '../statement/expression-statement/expression-statement.tree';
import { ScopeTree } from './scope.tree';

test('function with one expression body', () => {
    const code = 'foo s:str = "simple string", num:i8 = 7 { callAnotherFunc(); }';
    const tree = parseCode(code, ScopeTree);
    expect(tree.name).toBe('foo');
    expect(tree.args.length).toBe(2);

    expect(tree.args[0].type).toBe('str');
    expect(tree.args[0].name).toBe('s');
    expect(tree.args[0].value['value']).toBe('simple string');

    expect(tree.args[1].type).toBe('i8');
    expect(tree.args[1].name).toBe('num');
    expect(tree.args[1].value['value']).toBe('7');

    expect(tree.statements[0]).toBeInstanceOf(ExpressionStatementTree);
    expect((tree.statements[0] as ExpressionStatementTree).value).toBeInstanceOf(FunctionCallExpressionTree);
});
