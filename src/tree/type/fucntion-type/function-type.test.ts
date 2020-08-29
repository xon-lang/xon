import { parse } from '../../../parse';
import { FunctionTree } from '../../function/function.tree';

test('one items', () => {
    const code = 'f(a {key str}): log\n';
    const tree = new FunctionTree(parse(code).function());
    expect(tree).toBeInstanceOf(FunctionTree);
});
