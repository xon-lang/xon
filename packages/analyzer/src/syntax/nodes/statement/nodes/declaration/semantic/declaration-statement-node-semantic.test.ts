import {
  $IdTypeSemantic,
  $VariableValueDeclarationSemantic,
  DeclarationStatementNode,
  IdTypeSemantic,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newSemanticContext,
  nonHiddenNodeGenerator,
  parseDeclarationStatementNode,
  ValueDeclarationSemantic,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {$Model, is} from '#typing';
import {expect, test} from 'vitest';

test('Value declaration', () => {
  const text = newText('a: Number = 1');
  const node = getDeclarationStatementNode(text);
  const semantic = node.semantic as ValueDeclarationSemantic;

  expect(semantic.name.toNativeString()).toBe('a');
  expect(is(semantic.type, $IdTypeSemantic())).toBe(true);
  expect((semantic.type as IdTypeSemantic).name.toNativeString()).toBe('Number');
});

function getDeclarationStatementNode(text: Text): DeclarationStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const node = parseDeclarationStatementNode(context, 0, nodes)!;
  const semanticContext = newSemanticContext();

  node.semantify!(semanticContext);

  expect(is(node.semantic, $VariableValueDeclarationSemantic())).toBe(true);
  expect(is(node.id.semantic, $VariableValueDeclarationSemantic())).toBe(true);

  return node;
}
