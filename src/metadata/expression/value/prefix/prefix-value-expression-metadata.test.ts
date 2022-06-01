import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueExpressionMetadata } from '../value-expression-metadata-helper';
import { PrefixValueExpressionMetadata } from './prefix-value-expression-metadata';

test('prefix', () => {
  const code = '+1';
  const tree = parseExpression(code);
  const metadata = getValueExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(PrefixValueExpressionMetadata);
});
