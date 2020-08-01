import { evalExpression, parseCode } from '../../../test-helper';
import { ArrayExpressionTree } from './array-expression.tree';

test('check array', () => {
    const code = '[1, 2+2, 4, 6+6]';
    const tree = parseCode(code, ArrayExpressionTree);
    expect(tree.items.length).toBe(4);
    expect(tree.items.map((x) => evalExpression(x.value)).reduce((a, b) => a + b, 0)).toBe(
        [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0)
    );
});

test('array on several lines', () => {
    const code = `[1,
                2+2,
     4,    6+6]`;
    const tree = parseCode(code, ArrayExpressionTree);
    expect(tree.items.length).toBe(4);
    expect(tree.items.map((x) => evalExpression(x.value)).reduce((a, b) => a + b, 0)).toBe(
        [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0)
    );
});

test('spread', () => {
    const code = '[1, 2+2, 4, ...[3, 5, 7]]';
    const tree = parseCode(code, ArrayExpressionTree);
    // expect(tree.items.length).toBe(4);
    // expect(
    //     tree.items
    //         .slice(0, -1)
    //         .map((x) => evalExpression(x.value))
    //         .reduce((a, b) => a + b, 0)
    // ).toBe([1, 2 + 2, 4].reduce((a, b) => a + b, 0));
    // expect(tree.items.slice(-1)[0].hasSpread).toBe(true);
});
