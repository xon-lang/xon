import { evalExpression, parseStatement } from '../../test-helper';

test('variable assignment', () => {
    const code = 'a = 5;';
    const tree = parseStatement(code);
    expect(tree['name']).toBe('a');
    expect(evalExpression(tree.value)).toBe(5);
});
