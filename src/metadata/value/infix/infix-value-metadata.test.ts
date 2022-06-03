import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueMetadata } from '../value-metadata-helper';
import { InfixValueMetadata } from './infix-value-metadata';

test('integer plus integer', () => {
  const code = '1 + 1';
  const tree = parseExpression(code);
  const metadata = getValueMetadata(tree, new TestDeclarationScope());
  expect(metadata).toBeInstanceOf(InfixValueMetadata);
});
