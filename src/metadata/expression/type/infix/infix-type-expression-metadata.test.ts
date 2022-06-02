import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { getTypeExpressionMetadata } from '../type-expression-metadata-helper';
import { InfixTypeExpressionMetadata } from './infix-type-expression-metadata';

test('union', () => {
  const code = 'Integer or Float';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeExpressionMetadata(tree, scope) as InfixTypeExpressionMetadata;

  expect(metadata).toBeInstanceOf(InfixTypeExpressionMetadata);
  expect(metadata.attributesScope().parameters.length).toBe(3);
});

test('intersect', () => {
  const code = 'Integer and Float';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeExpressionMetadata(tree, scope) as InfixTypeExpressionMetadata;

  expect(metadata).toBeInstanceOf(InfixTypeExpressionMetadata);
  expect(metadata.attributesScope().parameters.length).toBe(1);
});
