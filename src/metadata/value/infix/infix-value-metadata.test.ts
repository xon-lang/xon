import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { getValueMetadata } from '../value-metadata-helper';
import { InfixValueMetadata } from './infix-value-metadata';

test('integer plus integer', () => {
  const code = '1 + 1';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getValueMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(InfixValueMetadata);
});
