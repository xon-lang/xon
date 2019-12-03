import { parseCode } from '../../test-helper/parse';
import { IdExpressionTree } from './id-expression.tree';
import { ExpressionTree } from '../expression/expression.tree';

test('variable', () => {
    const code = 'myVariable';
    const parser = parseCode(code, ExpressionTree);
    expect(parser.value).toBeInstanceOf(IdExpressionTree);

    if (parser instanceof IdExpressionTree) {
        expect(parser.id).toBe('myVariable');
    }
});

test('number is not id', () => {
    const code = '123';
    const parser = parseCode(code, ExpressionTree);
    expect(parser.value).not.toBeInstanceOf(IdExpressionTree);
});
