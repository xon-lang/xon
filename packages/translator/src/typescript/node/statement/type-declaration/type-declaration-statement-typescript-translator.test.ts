import {DeclarationNode, newAnalyzerContext, newCharacterStreamFromText, parseStatements} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptTypeDeclarationStatement} from '#translator';
import {expect, test} from 'vitest';

test('Nominal type statement', () => {
  const text = newText('type A');
  const node = getNominalTypeDeclarationNode(text);
  const translated = translateTypescriptTypeDeclarationStatement(node);

  expect(translated.toNativeString()).toBe('type A = {}');
});

function getNominalTypeDeclarationNode(text: Text): DeclarationNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);
  const node = statements.first() as DeclarationNode;
  // const nodes = newArrayData(nonHiddenNodeGenerator(context));
  // const node = parseDeclarationNode(0, nodes) as NominalTypeDeclarationNode;

  expect(node).toBeTruthy();

  return node;
}
