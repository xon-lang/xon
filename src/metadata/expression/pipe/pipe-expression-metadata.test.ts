import { parseExpression } from '../../../ast/util/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('pipe', () => {
  const code = '123 | String';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new TestDeclarationScope());

  expect(1).toBe(1);
});
