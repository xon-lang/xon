import { parseExpression } from '../../../../util/parse';
import { DefinitionMetadata } from '../../../declaration/definition/definition-metadata';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { fillTypeMetadata } from '../type-metadata-helper';
import { DefinitionTypeMetadata } from './definition-type-metadata';

test('none model', () => {
  const code = 'None';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as DefinitionTypeMetadata;

  expect(metadata).toBeInstanceOf(DefinitionTypeMetadata);
  expect(metadata.definition).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.definition).toBe(tree.scope.core.none);
  expect(metadata.definition.name).toBe('None');
  expect(metadata.definition.allAttributes().length).toBe(0);
});

test('none object', () => {
  const code = 'none';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as DefinitionTypeMetadata;

  expect(metadata).toBeInstanceOf(DefinitionTypeMetadata);
  expect(metadata.definition).toBeInstanceOf(DefinitionMetadata);
  expect(metadata.definition.name).toBe('none');
  expect(metadata.definition.allAttributes().length).toBe(0);
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
  const code = 'none';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree);

  const codeNone = 'None';
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
