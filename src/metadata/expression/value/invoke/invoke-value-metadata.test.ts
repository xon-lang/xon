import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { fillValueMetadata } from '../value-metadata-helper';
import { InvokeValueMetadata } from './invoke-value-metadata';

test('lambda call', () => {
  const code = '(()=>1+1)()';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata).toBeInstanceOf(InvokeValueMetadata);
  expect(metadata.type().is(tree.scope.core.number.type)).toBe(true);
  expect(metadata.type().is(tree.scope.core.string.type)).toBe(false);
});
