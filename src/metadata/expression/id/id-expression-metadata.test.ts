import { parseExpression } from '../../../ast/util/parse';
import { ObjectDefinitionMetadata } from '../../declaration/definition/object/object-definition-metadata';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { IdExpressionMetadata } from './id-expression-metadata';

test('none', () => {
  const code = 'None';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(IdExpressionMetadata);
  expect(metadata.typeDefinition).toBeInstanceOf(ObjectDefinitionMetadata);
  expect(metadata.typeDefinition.name).toBe('None');
});

// test('id with type arguments', () => {
//   const code = 'Map<String, Char>';
//   const tree = parseExpression(code);
//   const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

//   expect(metadata).toBeInstanceOf(IdExpressionMetadata);
//   expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
//   expect((metadata.type as IdTypeMetadata).name).toBe('True');
// });
