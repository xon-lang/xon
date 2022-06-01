import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueExpressionMetadata } from '../value-expression-metadata-helper';
import { InvokeValueExpressionMetadata } from './invoke-value-expression-metadata';

test('lambda call', () => {
  const code = '(()=>1+1)()';
  const tree = parseExpression(code);
  const metadata = getValueExpressionMetadata(tree, new TestDeclarationScope());
  expect(metadata).toBeInstanceOf(InvokeValueExpressionMetadata);
});
