import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../scope/test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { MemberExpressionMetadata } from './member-expression-metadata';

test('member', () => {
  const code = 'true.test';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());
  expect(metadata).toBeInstanceOf(MemberExpressionMetadata);
});
