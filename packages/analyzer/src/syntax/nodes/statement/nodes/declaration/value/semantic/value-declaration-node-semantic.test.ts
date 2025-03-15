import {
  $IdTypeSemantic,
  $VariableValueDeclarationSemantic,
  IdTypeSemantic,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newSemanticContext,
  nonHiddenNodeGenerator,
  parseValueDeclarationNode,
  ValueDeclarationNode,
  ValueDeclarationSemantic,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Value declaration', () => {
  const text = newText('a: Number = 1');
  const node = getValueDeclarationNode(text);
  const semantic = node.semantic as ValueDeclarationSemantic;

  expect(semantic.name.toNativeString()).toBe('a');
  expect(is(semantic.type, $IdTypeSemantic())).toBe(true);
  expect((semantic.type as IdTypeSemantic).name.toNativeString()).toBe('Number');
});

function getValueDeclarationNode(text: Text): ValueDeclarationNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseValueDeclarationNode(0, nodes)!;
  const semanticContext = newSemanticContext();

  node.semantify!(semanticContext);

  expect(is(node.semantic, $VariableValueDeclarationSemantic())).toBe(true);
  expect(is(node.id.semantic, $VariableValueDeclarationSemantic())).toBe(true);

  return node;
}
