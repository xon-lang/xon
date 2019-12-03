import { parseCode, parseWrongCode } from '../../test-helper/test-parser';
import { BinaryExpressionParser } from './binary-expression.parser';
import { ExpressionParser } from '../expression/expression.parser';

// test('one plus one', () => {
//   const code = '1+1';
//   const parser = parseCode(code, ExpressionParser)
//   expect(parser.value).toBeInstanceOf(BinaryExpressionParser);
// });

// test('string plus one', () => {
//   const code = '"some string"+1';
//   const parser = parseCode(code, ExpressionParser)
//   expect(parser.value).toBeInstanceOf(BinaryExpressionParser);
// });

// test('string plus string', () => {
//   const code = '"some string"+"another str"';
//   const parser = parseCode(code, ExpressionParser)
//   expect(parser.value).toBeInstanceOf(BinaryExpressionParser);
// });

// test('no unary', () => {
//   const code = '-5';
//   const parser = parseCode(code, ExpressionParser)
//   expect(parser.value).not.toBeInstanceOf(BinaryExpressionParser);
// });
