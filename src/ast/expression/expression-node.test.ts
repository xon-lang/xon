import { evaluate } from '../util/evaluate';
import { parseExpression } from '../util/parse';

test('1', () => {
  const code = '1+2+3+4+5';
  const node = parseExpression(code);
  expect(node.toString()).toBe('1 + 2 + 3 + 4 + 5');
  expect(evaluate(node)).toBe(1 + 2 + 3 + 4 + 5);
});

test('2', () => {
  const code = '1+(2*3)-(4/5)';
  const node = parseExpression(code);
  expect(node.toString()).toBe('1 + (2 * 3) - (4 / 5)');
  expect(evaluate(node)).toBe(1 + 2 * 3 - 4 / 5);
});

test('3', () => {
  const code = '1*(2+(3-4))/5';
  const node = parseExpression(code);
  expect(node.toString()).toBe('1 * (2 + (3 - 4)) / 5');
  expect(evaluate(node)).toBe((1 * (2 + (3 - 4))) / 5);
});

test('4', () => {
  const code = '2>=1<=3 || 4!=5 && 6';
  const node = parseExpression(code);
  expect(node.toString()).toBe('2 >= 1 <= 3 || 4 != 5 && 6');
  // expect(evalExpression(node)).toBe((1 * (2 + (3 - 4))) / 5);
});

test('5', () => {
  const code = '1<2<3>0<=1>=5';
  const node = parseExpression(code);
  expect(node.toString()).toBe('1 < 2 < 3 > 0 <= 1 >= 5');
  // expect(evalExpression(node)).toBe((1 * (2 + (3 - 4))) / 5);
});
