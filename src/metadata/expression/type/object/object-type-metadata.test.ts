import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { fillTypeMetadata } from '../type-metadata-helper';
import { ObjectTypeMetadata } from './object-type-metadata';

test('object', () => {
  const code = '{a = 1, b = 2, c = 3}';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree, scope) as ObjectTypeMetadata;

  expect(metadata).toBeInstanceOf(ObjectTypeMetadata);
  expect(metadata.attributesScope().declarations.length).toBe(3);
});

test('object is other one', () => {
  const code = '{a = 1, b = 2, c = 3}';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree, scope) as ObjectTypeMetadata;

  const code2 = '{a = 1, b = 1, c = 1}';
  const tree2 = parseExpression(code2);
  const scope2 = new TestDeclarationScope();
  const metadata2 = fillTypeMetadata(tree2, scope2) as ObjectTypeMetadata;

  const code3 = '{x = 1, b = 2, c = 3}';
  const tree3 = parseExpression(code3);
  const scope3 = new TestDeclarationScope();
  const metadata3 = fillTypeMetadata(tree3, scope3) as ObjectTypeMetadata;

  expect(metadata).toBeInstanceOf(ObjectTypeMetadata);
  expect(metadata.attributesScope().declarations.length).toBe(3);
  expect(metadata.is(metadata2)).toBe(true);
  expect(metadata.is(metadata3)).toBe(false);
});
