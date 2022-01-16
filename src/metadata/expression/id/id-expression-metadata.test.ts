import { parseExpression } from '../../../util/parse';
import { ModelDeclarationMetadata } from '../../declaration/model/model-declaration-metadata';
import { ObjectDeclarationMetadata } from '../../declaration/object/object-declaration-metadata';
import { TestDeclarationScope } from '../../scope/test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { IdExpressionMetadata } from './id-expression-metadata';

test('none', () => {
  const code = 'None';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope()) as IdExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdExpressionMetadata);
  expect(metadata.declaration()).toBeInstanceOf(ObjectDeclarationMetadata);
  expect(metadata.declaration().name).toBe('None');
  expect(metadata.attributes().length).toBe(0);
});

test('any', () => {
  const code = 'Any';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope()) as IdExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdExpressionMetadata);
  expect(metadata.declaration()).toBeInstanceOf(ModelDeclarationMetadata);
  expect(metadata.declaration().name).toBe('Any');
  expect(metadata.attributes().length).toBe(0);
});

test('id with type arguments', () => {
  const code = 'Map<|String, Char|>';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope()) as IdExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdExpressionMetadata);
  expect(metadata.declaration()).toBeInstanceOf(ModelDeclarationMetadata);
  expect(metadata.declaration().name).toBe('Map');
  expect(metadata.attributes().length).toBe(0);
});
