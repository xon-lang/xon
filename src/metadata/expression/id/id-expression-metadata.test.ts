import { parseExpression } from '../../../ast/util/parse';
import { ObjectDefinitionMetadata } from '../../declaration/definition/object/object-definition-metadata';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { IdExpressionMetadata } from './id-expression-metadata';

test('none', () => {
  const code = 'None';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(IdExpressionMetadata);
  expect(metadata.typeDefinition).toBeInstanceOf(ObjectDefinitionMetadata);
  expect(metadata.typeDefinition.name).toBe('None');
});

// test('id with type arguments', () => {
//   const code = 'Map<String, Char>';
//   const node = parseExpression(code);
//   const metadata = getExpressionMetadata(node, new TestDeclarationScope());

//   expect(metadata).toBeInstanceOf(IdExpressionMetadata);
//   expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
//   expect((metadata.type as IdTypeMetadata).name).toBe('True');
// });
