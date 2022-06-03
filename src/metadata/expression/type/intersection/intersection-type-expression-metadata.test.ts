import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { getTypeExpressionMetadata } from '../type-expression-metadata-helper';
import { IntersectionTypeExpressionMetadata } from './intersection-type-expression-metadata';

test('intersect', () => {
  const code = 'Integer and Float';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeExpressionMetadata(tree, scope) as IntersectionTypeExpressionMetadata;

  expect(metadata).toBeInstanceOf(IntersectionTypeExpressionMetadata);
  expect(metadata.attributesScope().parameters.length).toBe(1);
});
