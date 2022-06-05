import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { getTypeMetadata } from '../type-metadata-helper';
import { ObjectTypeMetadata } from './object-type-metadata';

test('object', () => {
  const code = '{a = 1, b = 2, c = 3}';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeMetadata(tree, scope) as ObjectTypeMetadata;

  expect(metadata).toBeInstanceOf(ObjectTypeMetadata);
  expect(metadata.attributesScope().declarations.length).toBe(3);
});
