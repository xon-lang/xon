import { evalExpression, parseCode } from '../../../test-helper';
import { EqualityExpressionTree } from './equality-expression.tree';

test('equals', () => {
    const code = '234 == 634';
    const tree = parseCode(code, EqualityExpressionTree);
    expect(tree.isEquals).toBe(true);
    expect(tree.isNotEquals).toBe(false);

    expect(evalExpression(tree)).toBe(+'234' === 634);
});

test('not equals', () => {
    const code = '234 != 634';
    const tree = parseCode(code, EqualityExpressionTree);
    expect(tree.isEquals).toBe(false);
    expect(tree.isNotEquals).toBe(true);

    expect(evalExpression(tree)).toBe(+'234' !== 634);
});