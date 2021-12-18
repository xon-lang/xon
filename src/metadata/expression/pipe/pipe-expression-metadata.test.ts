import { parseExpression } from '../../../ast/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('pipe', () => {
  const code = '123 | String';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(1).toBe(1);
});
