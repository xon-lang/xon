import {
  DeclarationStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatements,
} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptDeclarationStatement} from '#translator';
import {expect, test} from 'vitest';

test('Nominal type statement', () => {
  const text = newText('type A');
  const node = getDeclarationStatementNode(text);
  const translated = translateTypescriptDeclarationStatement(node);

  expect(translated.toNativeString()).toBe('type A = {}');
});

function getDeclarationStatementNode(text: Text): DeclarationStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);
  const node = statements.first() as DeclarationStatementNode;
  // const nodes = newArrayData(nonHiddenNodeGenerator(context));
  // const node = parseDeclarationNode(0, nodes) as NominalTypeDeclarationNode;

  expect(node).toBeTruthy();

  return node;
}
