import {
  $CharacterNode,
  $CharacterTypeSemantic,
  CharacterNode,
  CharacterTypeSemantic,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newSemanticContext,
  parseCharacterNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Character node semantics', () => {
  const text = newText("'A'");
  const node = getCharacterNode(text);

  expect(is(node.semantic, $CharacterTypeSemantic())).toBe(true);
  expect((node.semantic as CharacterTypeSemantic).value.toNativeString()).toBe('A');
});

function getCharacterNode(text: Text): CharacterNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCharacterNode(context)!;
  const semanticContext = newSemanticContext();

  node.semantify!(semanticContext);

  expect(node).toBeTruthy();
  expect(is(node, $CharacterNode())).toBe(true);

  return node;
}
