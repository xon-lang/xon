import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { AddExpressionTree } from './add-expression.tree';

test('one_plus_one', () => {
    const code = '1+1';
    const tree = parseExpression<AddExpressionTree>(code);
    expect(tree.getType().asSimple.name).toBe('Number');
    expect(evalExpression(tree)).toBe(2);
});
