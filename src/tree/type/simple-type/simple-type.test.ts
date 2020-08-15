import { parseCode } from '../../../parse';
import { FunctionTree } from '../../function/function.tree';
import { SimpleTypeTree } from '../simple-type/simple-type.tree';

test('one arg', () => {
    const code = 'f(a str): log\n';
    const tree = parseCode(code, FunctionTree);
    expect(tree.name).toBe('f');
    expect(tree.args.length).toBe(1);
    expect(tree.args[0].name).toBe('a');
    const simpleType = tree.args[0].type as SimpleTypeTree;
    expect(simpleType.name).toBe('str');
});
