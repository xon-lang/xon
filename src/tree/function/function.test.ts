import { parseCode } from '../../test-helper';
import { FunctionTree } from './function.tree';

test('positive number', () => {
    const code = "func_name(arg1: num, arg2 = 5, arg3: str = 'pifpaf'):\n    log('babah')";
    const tree = parseCode(code, FunctionTree);

    expect(tree.name).toBe('func_name');
    expect(tree.args.length).toBe(3);
    expect(tree.args[0].name).toBe('arg1');
    expect(tree.args[0].type).toBe('num');
    expect(tree.args[0].value).toBeUndefined();

    expect(tree.args[1].name).toBe('arg2');
    expect(tree.args[1].type).toBeUndefined();
    expect(tree.args[1].value.eval()).toBe(5);

    expect(tree.args[2].name).toBe('arg3');
    expect(tree.args[2].type).toBe('str');
    expect(tree.args[2].value.eval()).toBe('pifpaf');
});
