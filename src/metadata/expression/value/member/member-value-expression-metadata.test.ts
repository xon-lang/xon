import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueExpressionMetadata } from '../value-expression-metadata-helper';
import { MemberValueExpressionMetadata } from './member-value-expression-metadata';

test('member', () => {
  const code = 'true.test';
  const tree = parseExpression(code);
  const metadata = getValueExpressionMetadata(tree, new TestDeclarationScope());
  expect(metadata).toBeInstanceOf(MemberValueExpressionMetadata);
});
