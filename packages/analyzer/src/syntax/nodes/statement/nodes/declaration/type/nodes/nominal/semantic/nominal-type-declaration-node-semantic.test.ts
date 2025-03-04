import {
  $NominalTypeDeclarationSemantic,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newSemanticContext,
  NominalTypeDeclarationNode,
  nonHiddenNodeGenerator,
  parseTypeDeclarationNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Integer declaration type', () => {
  const text = newText('type Integer: Number');
  const semantics = getNominalTypeDeclarationNode(text);
});

function getNominalTypeDeclarationNode(text: Text): NominalTypeDeclarationNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseTypeDeclarationNode(0, nodes) as NominalTypeDeclarationNode;
  const semanticContext = newSemanticContext();
  semanticContext.pushScope(true);

  node.semantify!(semanticContext);

  expect(is(node.semantic, $NominalTypeDeclarationSemantic())).toBe(true);

  return node;
}
