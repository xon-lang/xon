import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueMetadata } from '../value-metadata-helper';
import { MethodValueMetadata } from './method-value-metadata';

test('lambda', () => {
  const code = '[x String] =>x + x';
  const tree = parseExpression(code);
  const metadata = getValueMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(MethodValueMetadata);
});
