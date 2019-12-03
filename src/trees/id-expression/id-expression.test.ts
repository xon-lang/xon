import { parseCode } from '../../test-helper/parse';
import { IdExpressionTree } from './id-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('variable', () => {
    const code = 'myVariable';
    const tree = parseCode(code, ExpressionTree);
    expect(tree.value).toBeInstanceOf(IdExpressionTree);

    if (tree instanceof IdExpressionTree) {
        expect(tree.id).toBe('myVariable');
    }
});

test('number is not id', () => {
    const code = '123';
    const tree = parseCode(code, ExpressionTree);
    expect(tree.value).not.toBeInstanceOf(IdExpressionTree);
});
