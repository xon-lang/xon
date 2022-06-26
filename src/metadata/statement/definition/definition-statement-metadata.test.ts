import { parseStatement } from '../../../util/parse';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { DefinitionTypeMetadata } from '../../expression/type/definition/definition-type-metadata';
import { getStatementMetadata } from '../statement-metadata-helper';
import { DefinitionStatementMetadata } from './definition-statement-metadata';

test('model', () => {
  const code = 'model A';
  const tree = parseStatement(code);
  const metadata = getStatementMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(DefinitionStatementMetadata);
});

test('object with parameters', () => {
  const code = 'object A(a: Number, b: String)';
  const tree = parseStatement(code);
  const scope = new TestDeclarationScope();
  const metadata = getStatementMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(DefinitionStatementMetadata);

  const definition = scope.find('A');
  expect(definition).toBeInstanceOf(DefinitionMetadata);
  expect(definition.name).toBe('A');

  const type = definition.type as DefinitionTypeMetadata;
  expect(type).toBeInstanceOf(DefinitionTypeMetadata);
  expect(type.definition.parameters.length).toBe(2);
  expect(type.definition.parameters[1].name).toBe('b');
  expect(type.definition.parameters[1].type).toBeInstanceOf(DefinitionTypeMetadata);
  expect((type.definition.parameters[1].type as DefinitionTypeMetadata).definition).toBe(
    scope.core.string,
  );
  expect(type.definition.allAttributes().length).toBe(0);
});
