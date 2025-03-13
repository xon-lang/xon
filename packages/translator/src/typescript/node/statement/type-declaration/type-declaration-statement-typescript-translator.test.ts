import {
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatements,
  TypeDeclarationNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptTypeDeclarationStatement} from '#translator';
import {expect, test} from 'vitest';

test('Nominal type statement', () => {
  const text = newText('type A');
  const node = getNominalTypeDeclarationNode(text);
  const translated = translateTypescriptTypeDeclarationStatement(node);

  expect(translated.toNativeString()).toBe('type A = {}');
});

function getNominalTypeDeclarationNode(text: Text): TypeDeclarationNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);
  const node = statements.first() as TypeDeclarationNode;
  // const nodes = newArrayData(nonHiddenNodeGenerator(context));
  // const node = parseTypeDeclarationNode(0, nodes) as NominalTypeDeclarationNode;

  expect(node).toBeTruthy();

  return node;
}
