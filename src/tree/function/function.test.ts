import { parseCode } from '../../test-helper';
import { SimpleTypeTree } from '../type/simple-type/simple-type.tree';
import { FunctionTree } from './function.tree';

test('positive number', () => {
    const code = "func_name(arg1: num, arg2 = 5, arg3: str = 'pifpaf'):\n    log('babah')";
    const tree = parseCode(code, FunctionTree);

    expect(tree.name).toBe('func_name');
    expect(tree.args.length).toBe(3);

    expect(tree.args[0].name).toBe('arg1');
    const type1 = tree.args[0].type as SimpleTypeTree;
    expect(type1.name).toBe('num');
    expect(tree.args[0].value).toBeUndefined();

    expect(tree.args[1].name).toBe('arg2');
    const type2 = tree.args[1].type as SimpleTypeTree;
    expect(type2).toBeUndefined();
    expect(tree.args[1].value.eval()).toBe(5);

    expect(tree.args[2].name).toBe('arg3');
    const type3 = tree.args[2].type as SimpleTypeTree;
    expect(type3.name).toBe('str');
    expect(tree.args[2].value.eval()).toBe('pifpaf');
});
