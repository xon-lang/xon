import { parseExpression } from '../../../tree/util/parse';
import { CoreDeclarationScope } from '../../core-declaration-scope';
import { InterfaceDeclarationMetadata } from '../../declaration/interface/interface-declaration-metadata';
import { ObjectDeclarationMetadata } from '../../declaration/object/object-declaration-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { IdExpressionMetadata } from './id-expression-metadata';

test('none', () => {
  const code = 'None';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new CoreDeclarationScope()) as IdExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdExpressionMetadata);
  expect(metadata.declaration()).toBeInstanceOf(ObjectDeclarationMetadata);
  expect(metadata.declaration().name).toBe('None');
  expect(metadata.attributes().length).toBe(0);
});

test('any', () => {
  const code = 'Any';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new CoreDeclarationScope()) as IdExpressionMetadata;

  expect(metadata).toBeInstanceOf(IdExpressionMetadata);
  expect(metadata.declaration()).toBeInstanceOf(InterfaceDeclarationMetadata);
  expect(metadata.declaration().name).toBe('Any');
  expect(metadata.attributes().length).toBe(3);
});

// test('id with type arguments', () => {
//   const code = 'Map<String, Char>';
//   const tree = parseExpression(code);
//   const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

//   expect(metadata).toBeInstanceOf(IdExpressionMetadata);
//   expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
//   expect((metadata.type as IdTypeMetadata).name).toBe('True');
// });
