import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueMetadata } from '../value-metadata-helper';
import { MemberValueMetadata } from './member-value-metadata';

test('member', () => {
  const code = 'true.test';
  const tree = parseExpression(code);
  const metadata = getValueMetadata(tree, new TestDeclarationScope());
  expect(metadata).toBeInstanceOf(MemberValueMetadata);
});
