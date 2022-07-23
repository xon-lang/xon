import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { DefinitionTypeMetadata } from '../definition/definition-type-metadata';
import { fillTypeMetadata } from '../type-metadata-helper';
import { MethodTypeMetadata } from './method-type-metadata';

test('method', () => {
  const code = '(a: Number)=>None';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as MethodTypeMetadata;

  expect(metadata).toBeInstanceOf(MethodTypeMetadata);
  const parameters = metadata.parameters;
  expect(parameters.length).toBe(1);
  expect(parameters[0].name).toBe('a');
  expect(parameters[0].type).toBeInstanceOf(DefinitionTypeMetadata);
  expect((parameters[0].type as DefinitionTypeMetadata).definition).toBe(tree.scope.core.number);
  expect((metadata.resultType as DefinitionTypeMetadata).definition).toBe(tree.scope.core.none);
});
