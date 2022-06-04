import { parseStatement } from '../../../util/parse';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { DefinitionTypeMetadata } from '../../type/definition/definition-type-metadata';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { getStatementMetadata } from '../statement-metadata-helper';
import { DefinitionStatementMetadata } from './definition-statement-metadata';

test('model', () => {
  const code = 'model A';
  const tree = parseStatement(code);
  const metadata = getStatementMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(DefinitionStatementMetadata);
});

test('object with parameters', () => {
  const code = 'object A(a Number, b String)';
  const tree = parseStatement(code);
  const scope = new TestDeclarationScope();
  const metadata = getStatementMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(DefinitionStatementMetadata);
  expect(scope.findDefinitionByName('A')).toBeInstanceOf(DefinitionMetadata);

  const parameter = scope.find('A');
  expect(parameter).toBeInstanceOf(ParameterMetadata);
  expect(parameter.name).toBe('A');

  const parameterType = parameter.type() as MethodTypeMetadata;
  expect(parameterType).toBeInstanceOf(MethodTypeMetadata);
  expect(parameterType.parameters().length).toBe(2);
  expect(parameterType.parameters()[1].name).toBe('b');
  expect(parameterType.parameters()[1].type()).toBeInstanceOf(DefinitionTypeMetadata);
  expect((parameterType.parameters()[1].type() as DefinitionTypeMetadata).definition()).toBe(
    scope.core.string,
  );
  expect(parameterType.result()).toBeInstanceOf(DefinitionTypeMetadata);
  expect((parameterType.result() as DefinitionTypeMetadata).definition().name).toBe('A');
});
