import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { IdTypeMetadata } from '~/metadata/type/id/id-type-metadata';
import { MethodTypeMetadata } from '~/metadata/type/method/method-type-metadata';
import { fillTypeMetadata } from '~/metadata/type/type-metadata-helper';
import { parseExpression } from '~/util/parse';

test('method', () => {
  const code = '(a: Number)=>null';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as MethodTypeMetadata;

  expect(metadata).toBeInstanceOf(MethodTypeMetadata);
  const { parameters } = metadata;
  expect(parameters.length).toBe(1);
  expect(parameters[0].name).toBe('a');
  expect(parameters[0].type).toBeInstanceOf(IdTypeMetadata);
  expect(parameters[0].type as DefinitionTypeMetadata.definition).toBe(tree.scope.core.number);
  expect(metadata.resultType as DefinitionTypeMetadata.definition).toBe(tree.scope.core.none);
});
