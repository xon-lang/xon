import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../scope/test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { InvokeExpressionMetadata } from './invoke-expression-metadata';

test('lambda call', () => {
  const code = '[[] 1 + 1][]';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());
  expect(metadata).toBeInstanceOf(InvokeExpressionMetadata);
});
