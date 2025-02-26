import {
  $StringTypeSemantic,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newSemanticContext,
  parseStringNode,
  Semantic,
  SemanticContext,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('String type', () => {
  const text = newText('"abc"');
  const semantics = getStringNodeSemantics(text, newSemanticContext());
});

function getStringNodeSemantics(text: Text, semanticContext: SemanticContext): Semantic {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStringNode(context)!;

  node.semantify!(semanticContext);

  expect(is(node.semantic, $StringTypeSemantic())).toBe(true);

  return node.semantic!;
}
