import { evalExpression, parseStatement } from '../../test-helper';

test('variable assignment', () => {
    const code = 'a = 5\n';
    const tree = parseStatement(code);
    expect(tree['name']).toBe('a');
    expect(evalExpression(tree['value'])).toBe(5);
});
