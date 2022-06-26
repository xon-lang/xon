import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { getValueMetadata } from '../value-metadata-helper';
import { InvokeValueMetadata } from './invoke-value-metadata';

test('lambda call', () => {
  const code = '(()=>1+1)()';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getValueMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(InvokeValueMetadata);
  expect(metadata.type().is(scope.core.number.type)).toBe(true);
  expect(metadata.type().is(scope.core.string.type)).toBe(false);
});
