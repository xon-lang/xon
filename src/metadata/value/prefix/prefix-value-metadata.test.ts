import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueMetadata } from '../value-metadata-helper';
import { PrefixValueMetadata } from './prefix-value-metadata';

test('prefix', () => {
  const code = '+1';
  const tree = parseExpression(code);
  const metadata = getValueMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(PrefixValueMetadata);
});
