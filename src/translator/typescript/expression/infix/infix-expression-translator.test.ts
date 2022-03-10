import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { InfixExpressionTranslator } from './infix-expression-translator';

test('num plus num', () => {
  const code = '123+321';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(InfixExpressionTranslator);
  expect(translator.toString()).toBe('123 + 321');
});

test('num pow num', () => {
  const code = '123^321.123';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(InfixExpressionTranslator);
  expect(translator.toString()).toBe('123 ^ 321.123');
});

test('num or num type', () => {
  const code = '123 or 456';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, true);

  expect(translator).toBeInstanceOf(InfixExpressionTranslator);
  expect(translator.toString()).toBe('123 | 456');
});

test('num or num value', () => {
  const code = '123 or 456';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(InfixExpressionTranslator);
  expect(translator.toString()).toBe('123 || 456');
});

test('union and intersection type', () => {
  const code = 'String or Number or RegExp and 123 or 456';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, true);

  expect(translator).toBeInstanceOf(InfixExpressionTranslator);
  expect(translator.toString()).toBe('String | Number | RegExp & 123 | 456');
});
