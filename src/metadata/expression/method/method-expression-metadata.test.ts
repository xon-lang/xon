import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../scope/test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { MethodExpressionMetadata } from './method-expression-metadata';

test('lambda', () => {
  const code = '(x String) = x + x';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(MethodExpressionMetadata);
});
