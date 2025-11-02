import {
  $CharacterNode,
  $CharacterSemantic,
  CharacterNode,
  CharacterSemantic,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newSemanticContext,
  parseCharacterNode,
} from '#analyzer';
import {is, newText, Text} from '#core';
import {expect, test} from 'vitest';

test('Character node semantics', () => {
  const text = newText("'A'");
  const node = getCharacterNode(text);

  expect(is(node.semantic, $CharacterSemantic())).toBe(true);
  expect((node.semantic as CharacterSemantic).value.toNativeString()).toBe('A');
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
