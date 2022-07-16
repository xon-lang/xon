import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { getTypeMetadata } from '../type-metadata-helper';
import { UnionTypeMetadata } from './union-type-metadata';

test('union', () => {
  const code = 'Integer | Float';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeMetadata(tree, scope) as UnionTypeMetadata;

  expect(metadata).toBeInstanceOf(UnionTypeMetadata);
  expect(metadata.attributesScope().declarations.length).toBe(3);
});
