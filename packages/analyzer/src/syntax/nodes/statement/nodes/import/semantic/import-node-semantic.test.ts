import {
  $ImportValueSemantic,
  ImportStatementNode,
  ImportValueSemantic,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newSemanticContext,
  nonHiddenNodeGenerator,
  parseImportStatementNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Integer declaration type', () => {
  const text = newText('type Integer: Number');
  const semantic = getImportStatementNode(text);

  expect(semantic.scope._declarations?.count()).toBe(1);
});

function getImportStatementNode(text: Text): ImportValueSemantic {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseImportStatementNode(0, nodes) as ImportStatementNode;
  const semanticContext = newSemanticContext();
  node.semantify!(semanticContext);

  expect(is(node.semantic, $ImportValueSemantic())).toBe(true);
  expect(is(node.expression?.semantic, $ImportValueSemantic())).toBe(true);

  return node.semantic!;
}
