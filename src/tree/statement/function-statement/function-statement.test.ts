import { parseCode } from '../../../parse';
import { FunctionExpressionTree } from '../../expression/function-expression/function-expression.tree';
import { FunctionTree } from '../../function/function.tree';
import { SimpleTypeTree } from '../../type/simple-type/simple-type.tree';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { FunctionStatementTree } from './function-statement.tree';

test('function with one expression body', () => {
    const code = "foo (s str = 'simple string', num i8 = 7): callAnotherFunc()";
    const tree = parseCode(code, FunctionStatementTree);

    expect(tree.value).toBeInstanceOf(FunctionTree);

    expect(tree.value.name).toBe('foo');
    expect(tree.value.args.length).toBe(2);

    const type1 = tree.value.args[0].type as SimpleTypeTree
    expect(type1.name).toBe('str');
    expect(tree.value.args[0].name).toBe('s');
    expect(tree.value.args[0].value['literal']['value']).toBe('simple string');

    const type2 = tree.value.args[1].type as SimpleTypeTree
    expect(type2.name).toBe('i8');
    expect(tree.value.args[1].name).toBe('num');
    expect(tree.value.args[1].value['literal']['value']).toBe(7);

    expect(tree.value.statements[0]).toBeInstanceOf(ExpressionStatementTree);
    expect((tree.value.statements[0] as ExpressionStatementTree).value).toBeInstanceOf(
        FunctionExpressionTree
    );
});
