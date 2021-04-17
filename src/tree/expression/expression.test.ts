import { evalExpression } from '../eval';
import { parseExpression } from '../parse';

test('1', () => {
  const code = '1+2+3+4+5';
  const tree = parseExpression(code);
  expect(tree.toString()).toBe('1 + 2 + 3 + 4 + 5');
  expect(evalExpression(tree)).toBe(1 + 2 + 3 + 4 + 5);
});

test('2', () => {
  const code = '1+(2*3)-(4/5)';
  const tree = parseExpression(code);
  expect(tree.toString()).toBe('1 + (2 * 3) - (4 / 5)');
  expect(evalExpression(tree)).toBe(1 + 2 * 3 - 4 / 5);
});

test('3', () => {
  const code = '1*(2+(3-4))/5';
  const tree = parseExpression(code);
  expect(tree.toString()).toBe('1 * (2 + (3 - 4)) / 5');
  expect(evalExpression(tree)).toBe((1 * (2 + (3 - 4))) / 5);
});

test('4', () => {
  const code = '2>=1<=3 or 4!=5 and not 6';
  const tree = parseExpression(code);
  expect(tree.toString()).toBe('(2 > 1 or 2 == 1) and (1 < 3 or 1 == 3) or not (4 == 5) and not 6');
  // expect(evalExpression(tree)).toBe((1 * (2 + (3 - 4))) / 5);
});

test('5', () => {
  const code = '1<2<3>0<=1>=5';
  const tree = parseExpression(code);
  expect(tree.toString()).toBe(
    '1 < 2 and 2 < 3 and 3 > 0 and (0 < 1 or 0 == 1) and (1 > 5 or 1 == 5)',
  );
  // expect(evalExpression(tree)).toBe((1 * (2 + (3 - 4))) / 5);
});
