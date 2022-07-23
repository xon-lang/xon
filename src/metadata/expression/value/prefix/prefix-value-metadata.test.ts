import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { fillValueMetadata } from '../value-metadata-helper';
import { PrefixValueMetadata } from './prefix-value-metadata';

test('prefix', () => {
  const code = '+1';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(PrefixValueMetadata);
  expect(metadata.type().equals(tree.scope.core.number.type)).toBe(true);
});
