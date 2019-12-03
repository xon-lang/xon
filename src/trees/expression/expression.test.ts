import { parseCode, parseWrongCode } from '../../test-helper/test-parser';
import { ExpressionParser } from './expression.parser';

test('arithmetic operations expression', () => {
    const code = '1+2+3+4+5';
    const parser = parseCode(code, ExpressionParser);
    console.log(parser.toJson());
});

test('mixed operations expression', () => {
    const code = '1+2*3-4/5';
    const parser = parseCode(code, ExpressionParser);
    console.log(parser.toJson());
});

test('parenthesized expression', () => {
    const code = '1*(2+3)/4';
    const parser = parseCode(code, ExpressionParser);
    console.log(parser.toJson());
});
