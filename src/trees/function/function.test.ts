import { parseCode, evalExpression } from '../../test-helper';
import { FunctionTree } from './function.tree';
import { FunctionCallExpressionTree } from '../function-call-expression/function-call-expression.tree';

test('function with one expression body', () => {
    const code = 'foo (str s = "simple string", i8 num = 7) { callAnotherFunc(); }';
    const tree = parseCode(code, FunctionTree);
    expect(tree.name).toBe('foo');
    expect(tree.args.length).toBe(2);

    expect(tree.args[0].type).toBe('str');
    expect(tree.args[0].name).toBe('s');
    expect(tree.args[0].value['value']).toBe('simple string');

    expect(tree.args[1].type).toBe('i8');
    expect(tree.args[1].name).toBe('num');
    expect(tree.args[1].value['value']).toBe('7');

    expect(tree.body[0]).toBeInstanceOf(FunctionCallExpressionTree);
});
