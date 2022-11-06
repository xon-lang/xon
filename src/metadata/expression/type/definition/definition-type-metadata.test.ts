import { DefinitionMetadata, DefinitionTypeMetadata, fillTypeMetadata, TestDeclarationScope } from '~/metadata';
import { parseExpression } from '~/util';

test('none model', () => {
  const code = 'null';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as DefinitionTypeMetadata;

  expect(metadata).toBeInstanceOf(DefinitionTypeMetadata);
  expect(metadata.definition).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.definition).toBe(tree.scope.core.none);
  expect(metadata.definition.name).toBe('null');
  expect(metadata.definition.allAttributes().length).toBe(1);
});

test('none object', () => {
  const code = 'null';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as DefinitionTypeMetadata;

  expect(metadata).toBeInstanceOf(DefinitionTypeMetadata);
  expect(metadata.definition).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.definition.name).toBe('null');
  expect(metadata.definition.allAttributes().length).toBe(1);
});

test('any', () => {
  const code = 'Any';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as DefinitionTypeMetadata;

  expect(metadata).toBeInstanceOf(DefinitionTypeMetadata);
  expect(metadata.definition).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.definition.name).toBe('Any');
  expect(metadata.definition.allAttributes().length).toBe(0);
});

test('none is None', () => {
  const code = 'null';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree);

  const codeNone = 'null';
  const treeNone = parseExpression(codeNone);
  treeNone.scope.parent = new TestDeclarationScope();
  const metadataNone = fillTypeMetadata(treeNone);

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  treeFloat.scope.parent = new TestDeclarationScope();
  const metadataFloat = fillTypeMetadata(treeFloat);

  expect(metadata.is(metadataNone)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
