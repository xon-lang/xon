import { ParameterMetadata } from '~/metadata/declaration/parameter/parameter-metadata';
import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { LiteralTypeMetadata } from '~/metadata/expression/type/literal/literal-type-metadata';
import { TypeMetadata } from '~/metadata/expression/type/type-metadata';
import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { SourceMetadata } from '~/metadata/source/source-metadata';
import { getSourceMetadata } from '~/metadata/source/source-metadata-helper';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { DeclarationStatementTree } from '~/tree/statement/declaration/declaration-statement-tree';
import { parseSource } from '~/util/parse';

test('single parameter', () => {
  const code = 'a: Number =  132';
  const tree = parseSource(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree);

  expect(metadata).toBeInstanceOf(SourceMetadata);

  const parameter = (tree.statements[0] as DeclarationStatementTree).declaration as DeclarationTree;
  const valueType = (parameter.value.metadata as ValueMetadata).type() as LiteralTypeMetadata;
  expect(parameter.metadata.name).toBe('a');
  expect(valueType.definition.name).toBe('Integer');
  expect(valueType.is(tree.scope.core.number.type)).toBe(true);
  expect((parameter.type.metadata as TypeMetadata).equals(tree.scope.core.number.type)).toBe(true);
});

test('multiple parameters array value', () => {
  const code = '[a, b, c] := [1,\'hi\',2.3]';
  const tree = parseSource(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree);
  const { destructure } = (tree.statements[0] as DeclarationStatementTree).declaration;

  expect(metadata).toBeInstanceOf(SourceMetadata);
  expect(destructure.length).toBe(3);

  expect(destructure[0].metadata.name).toBe('a');
  expect(destructure[0].metadata).toBeInstanceOf(ParameterMetadata);
  expect(destructure[0].metadata.type).toBeInstanceOf(LiteralTypeMetadata);
  expect(
    destructure[0].metadata.type.equals(new LiteralTypeMetadata(1, tree.scope.core.integer)),
  ).toBe(true);

  expect(destructure[1].metadata.name).toBe('b');
  expect(
    destructure[1].metadata.type.equals(new LiteralTypeMetadata('hi', tree.scope.core.string)),
  ).toBe(true);

  expect(destructure[2].metadata.name).toBe('c');
  expect(
    destructure[2].metadata.type.equals(new LiteralTypeMetadata(2.3, tree.scope.core.float)),
  ).toBe(true);
});

test('multiple parameters object value', () => {
  const code = '{a, b, c} := {a=1,b=\'hi\',c=2.3}';
  const tree = parseSource(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree);
  const { destructure } = (tree.statements[0] as DeclarationStatementTree).declaration;

  expect(metadata).toBeInstanceOf(SourceMetadata);
  expect(destructure.length).toBe(3);

  expect(destructure[0].metadata.name).toBe('a');
  expect(destructure[0].metadata).toBeInstanceOf(ParameterMetadata);
  expect(destructure[0].metadata.type).toBeInstanceOf(LiteralTypeMetadata);
  expect(
    destructure[0].metadata.type.equals(new LiteralTypeMetadata(1, tree.scope.core.integer)),
  ).toBe(true);

  expect(destructure[1].metadata.name).toBe('b');
  expect(
    destructure[1].metadata.type.equals(new LiteralTypeMetadata('hi', tree.scope.core.string)),
  ).toBe(true);

  expect(destructure[2].metadata.name).toBe('c');
  expect(
    destructure[2].metadata.type.equals(new LiteralTypeMetadata(2.3, tree.scope.core.float)),
  ).toBe(true);
});
