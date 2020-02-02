import { evalExpression, parseCode } from '../../../test-helper';
import { RelationalExpressionTree } from './relational-expression.tree';

test('less than', () => {
    const code = '234<634';
    const tree = parseCode(code, RelationalExpressionTree);
    expect(tree.isLessThan).toBe(true);
    expect(tree.isLessThanEquals).toBe(false);
    expect(tree.isMoreThan).toBe(false);
    expect(tree.isMoreThanEquals).toBe(false);

    expect(evalExpression(tree)).toBe(234 < 634);
});

test('less  equals', () => {
    const code = '234<=234';
    const tree = parseCode(code, RelationalExpressionTree);
    expect(tree.isLessThan).toBe(false);
    expect(tree.isLessThanEquals).toBe(true);
    expect(tree.isMoreThan).toBe(false);
    expect(tree.isMoreThanEquals).toBe(false);

    expect(evalExpression(tree)).toBe(234 <= 234);
});

test('more than', () => {
    const code = '234>634';
    const tree = parseCode(code, RelationalExpressionTree);
    expect(tree.isLessThan).toBe(false);
    expect(tree.isLessThanEquals).toBe(false);
    expect(tree.isMoreThan).toBe(true);
    expect(tree.isMoreThanEquals).toBe(false);

    expect(evalExpression(tree)).toBe(234 > 634);
});

test('less than equals', () => {
    const code = '234>=634';
    const tree = parseCode(code, RelationalExpressionTree);
    expect(tree.isLessThan).toBe(false);
    expect(tree.isLessThanEquals).toBe(false);
    expect(tree.isMoreThan).toBe(false);
    expect(tree.isMoreThanEquals).toBe(true);

    expect(evalExpression(tree)).toBe(234 >= 634);
});
