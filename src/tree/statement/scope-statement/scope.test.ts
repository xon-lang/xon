import { parseCode } from '../../../test-helper';
import { FunctionExpressionTree } from '../../expression/function-expression/function-expression.tree';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { ScopeStatementTree } from './scope-statement.tree';

test('function with one expression body', () => {
    const code = "foo s:str = 'simple string', num:i8 = 7 {\n callAnotherFunc()\n }";
    const tree = parseCode(code, ScopeStatementTree);
    expect(tree.name).toBe('foo');
    expect(tree.args.length).toBe(2);

    expect(tree.args[0].type).toBe('str');
    expect(tree.args[0].name).toBe('s');
    expect(tree.args[0].value['literal']['value']).toBe('simple string');

    expect(tree.args[1].type).toBe('i8');
    expect(tree.args[1].name).toBe('num');
    expect(tree.args[1].value['literal']['value']).toBe('7');

    expect(tree.statements[0]).toBeInstanceOf(ExpressionStatementTree);
    expect((tree.statements[0] as ExpressionStatementTree).value).toBeInstanceOf(
        FunctionExpressionTree
    );
});
