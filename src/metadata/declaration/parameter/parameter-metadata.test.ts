import { DeclarationTree } from '../../../tree/declaration/declaration-tree';
import { DeclarationStatementTree } from '../../../tree/statement/declaration/declaration-statement-tree';
import { parseSource } from '../../../util/parse';
import { LiteralTypeMetadata } from '../../expression/type/literal/literal-type-metadata';
import { TypeMetadata } from '../../expression/type/type-metadata';
import { ValueMetadata } from '../../expression/value/value-metadata';
import { SourceMetadata } from '../../source/source-metadata';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { TestDeclarationScope } from '../scope/test-declaration-scope';
import { ParameterMetadata } from './parameter-metadata';

test('single parameter', () => {
  const code = 'a: Number =  132';
  const tree = parseSource(code);
  const scope = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(SourceMetadata);

  const parameter = (tree.statements[0] as DeclarationStatementTree).declaration as DeclarationTree;
  const valueType = (parameter.value.metadata as ValueMetadata).type() as LiteralTypeMetadata;
  expect(parameter.metadata.name).toBe('a');
  expect(valueType.definition.name).toBe('Integer');
  expect(valueType.is(scope.core.number.type)).toBe(true);
  expect((parameter.type.metadata as TypeMetadata).equals(scope.core.number.type)).toBe(true);
});

test('multiple parameters array value', () => {
  const code = "[a, b, c] := [1,'hi',2.3]";
  const tree = parseSource(code);
  const scope = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree, scope);
  const { destructure } = (tree.statements[0] as DeclarationStatementTree).declaration;

  expect(metadata).toBeInstanceOf(SourceMetadata);
  expect(destructure.length).toBe(3);

  expect(destructure[0].metadata.name).toBe('a');
  expect(destructure[0].metadata).toBeInstanceOf(ParameterMetadata);
  expect(destructure[0].metadata.type).toBeInstanceOf(LiteralTypeMetadata);
  expect(destructure[0].metadata.type.equals(new LiteralTypeMetadata(1, scope.core.integer))).toBe(
    true,
  );

  expect(destructure[1].metadata.name).toBe('b');
  expect(
    destructure[1].metadata.type.equals(new LiteralTypeMetadata('hi', scope.core.string)),
  ).toBe(true);

  expect(destructure[2].metadata.name).toBe('c');
  expect(destructure[2].metadata.type.equals(new LiteralTypeMetadata(2.3, scope.core.float))).toBe(
    true,
  );
});

test('multiple parameters object value', () => {
  const code = "{a, b, c} := {a=1,b='hi',c=2.3}";
  const tree = parseSource(code);
  const scope = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree, scope);
  const { destructure } = (tree.statements[0] as DeclarationStatementTree).declaration;

  expect(metadata).toBeInstanceOf(SourceMetadata);
  expect(destructure.length).toBe(3);

  expect(destructure[0].metadata.name).toBe('a');
  expect(destructure[0].metadata).toBeInstanceOf(ParameterMetadata);
  expect(destructure[0].metadata.type).toBeInstanceOf(LiteralTypeMetadata);
  expect(destructure[0].metadata.type.equals(new LiteralTypeMetadata(1, scope.core.integer))).toBe(
    true,
  );

  expect(destructure[1].metadata.name).toBe('b');
  expect(
    destructure[1].metadata.type.equals(new LiteralTypeMetadata('hi', scope.core.string)),
  ).toBe(true);

  expect(destructure[2].metadata.name).toBe('c');
  expect(destructure[2].metadata.type.equals(new LiteralTypeMetadata(2.3, scope.core.float))).toBe(
    true,
  );
});
