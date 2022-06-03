import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { getValueMetadata } from '../value-metadata-helper';
import { IdValueMetadata } from './id-value-metadata';

test('none model', () => {
  const code = 'None';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getValueMetadata(tree, scope) as IdValueMetadata;

  expect(metadata).toBeInstanceOf(IdValueMetadata);
  expect(metadata.is(scope.core.none)).toBe(true);
});
