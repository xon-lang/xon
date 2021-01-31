import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { PipeExpressionTree } from './pipe-expression.tree';

test('arithmetic pipe', () => {
  const code = '1+1 |x: x + 5 + x |z: z + x ';
  const tree = parseExpression<PipeExpressionTree>(code);

  const x = 1 + 1;
  const z = x + 5 + x;
  const res = z + x;
  expect(evalExpression(tree)).toBe(res);
});

test('arithmetic and logic pipe', () => {
  const code = '1+1 |x: x + 5 + x |z: z || x ';
  const tree = parseExpression<PipeExpressionTree>(code);

  const x = 1 + 1;
  const z = x + 5 + x;
  const res = z || x;
  expect(evalExpression(tree)).toBe(res);
});

test('complex pipe', () => {
  const code = '33 + 44 |x: x^x + x |z: z^x && x^z | z + x';
  const tree = parseExpression<PipeExpressionTree>(code);

  // eslint-disable-next-line no-bitwise
  const x = 33 + 44;
  const z = x ** x + x;
  const res = z + x;
  expect(evalExpression(tree)).toBe(res);
});
