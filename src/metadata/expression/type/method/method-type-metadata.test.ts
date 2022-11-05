import { TestDeclarationScope } from '@/metadata/declaration/scope/test-declaration-scope';
import { DefinitionTypeMetadata } from '@/metadata/expression/type/definition/definition-type-metadata';
import { MethodTypeMetadata } from '@/metadata/expression/type/method/method-type-metadata';
import { fillTypeMetadata } from '@/metadata/expression/type/type-metadata-helper';
import { parseExpression } from '@/util/parse';

test('method', () => {
  const code = '(a: Number)=>null';
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
