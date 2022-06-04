import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { DefinitionTypeMetadata } from '../definition/definition-type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';
import { MethodTypeMetadata } from './method-type-metadata';

test('method', () => {
  const code = '(a: Number)=>None';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeMetadata(tree, scope) as MethodTypeMetadata;

  expect(metadata).toBeInstanceOf(MethodTypeMetadata);
  const parameters = metadata.parameters();
  expect(parameters.length).toBe(1);
  expect(parameters[0].name).toBe('a');
  expect(parameters[0].type()).toBeInstanceOf(DefinitionTypeMetadata);
  expect((parameters[0].type() as DefinitionTypeMetadata).definition()).toBe(scope.core.number);
  expect((metadata.result() as DefinitionTypeMetadata).definition()).toBe(scope.core.none);
});
