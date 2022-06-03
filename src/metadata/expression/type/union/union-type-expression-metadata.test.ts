import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { getTypeExpressionMetadata } from '../type-expression-metadata-helper';
import { UnionTypeExpressionMetadata } from './union-type-expression-metadata';

test('union', () => {
  const code = 'Integer or Float';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeExpressionMetadata(tree, scope) as UnionTypeExpressionMetadata;

  expect(metadata).toBeInstanceOf(UnionTypeExpressionMetadata);
  expect(metadata.attributesScope().parameters.length).toBe(3);
});
