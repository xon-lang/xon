import { parse } from '~/analysis/parser/parser';
import { DefinitionMetadata } from '~/metadata/declaration/definition/definition-metadata';
import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { IdTypeMetadata } from '~/metadata/type/id/id-type-metadata';
import { fillTypeMetadata } from '~/metadata/type/type-metadata-helper';

test('none model', () => {
  const code = 'null';
  const tree = parse(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as IdTypeMetadata;

  expect(metadata).toBeInstanceOf(IdTypeMetadata);
  expect(metadata.declaration).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.declaration).toBe(tree.scope.core.none);
  expect(metadata.declaration.name).toBe('null');
  expect(metadata.declaration.allAttributes().length).toBe(1);
});

test('none object', () => {
  const code = 'null';
  const tree = parse(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as IdTypeMetadata;

  expect(metadata).toBeInstanceOf(IdTypeMetadata);
  expect(metadata.declaration).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.declaration.name).toBe('null');
  expect(metadata.declaration.allAttributes().length).toBe(1);
});

test('any', () => {
  const code = 'Any';
  const tree = parse(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as IdTypeMetadata;

  expect(metadata).toBeInstanceOf(IdTypeMetadata);
  expect(metadata.declaration).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.declaration.name).toBe('Any');
  expect(metadata.declaration.allAttributes().length).toBe(0);
});

test('none is None', () => {
  const code = 'null';
  const tree = parse(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree);

  const codeNone = 'null';
  const treeNone = parse(codeNone);
  treeNone.scope.parent = new TestDeclarationScope();
  const metadataNone = fillTypeMetadata(treeNone);

  const codeFloat = 'Float';
  const treeFloat = parse(codeFloat);
  treeFloat.scope.parent = new TestDeclarationScope();
  const metadataFloat = fillTypeMetadata(treeFloat);

  expect(metadata.is(metadataNone)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
