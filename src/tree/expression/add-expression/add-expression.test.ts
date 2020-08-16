import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { AddExpressionTree } from './add-expression.tree';

test('one_plus_one', () => {
    const code = '1+1';
    const tree = parseCode(code, AddExpressionTree);
    expect(tree.getType().asSimple.name).toBe('Number');
    expect(evalExpression(tree)).toBe(2);
});
