import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { fillTypeMetadata } from '../type-metadata-helper';
import { IntersectionTypeMetadata } from './intersection-type-metadata';

test('intersect', () => {
  const code = 'Integer & Float';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree, scope) as IntersectionTypeMetadata;

  expect(metadata).toBeInstanceOf(IntersectionTypeMetadata);
  expect(metadata.attributesScope().declarations.length).toBe(1);
});
