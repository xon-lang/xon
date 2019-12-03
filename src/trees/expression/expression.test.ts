import { parseCode, parseWrongCode } from '../../test-helper/parse';
import { ExpressionTree } from './expression.tree';

test('arithmetic operations expression', () => {
    const code = '1+2+3+4+5';
    const parser = parseCode(code, ExpressionTree);
    console.log(parser.toJson());
});

test('mixed operations expression', () => {
    const code = '1+2*3-4/5';
    const parser = parseCode(code, ExpressionTree);
    console.log(parser.toJson());
});

test('parenthesized expression', () => {
    const code = '1*(2+(3-4))/5';
    const parser = parseCode(code, ExpressionTree);
    console.log(parser.toJson());
});
