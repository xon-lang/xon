import { parseCode } from '../../../parse';
import { FunctionTree } from '../../function/function.tree';

test('one items', () => {
    const code = 'f(a {key str}): log\n';
    const tree = parseCode(code, FunctionTree);
    expect(tree).toBeInstanceOf(FunctionTree);
});
