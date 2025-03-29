import {
  $ImportStatementNode,
  $ImportStatementNodeSemantic,
  ImportStatementNode,
  ImportStatementNodeSemantic,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newSemanticContext,
  nonHiddenNodeGenerator,
  parseImportStatementNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {resolve} from 'node:path';
import {expect, test} from 'vitest';

test('Import node scope', () => {
  const text = newText('import "import-statement-node-semantic-test-file.xon"');
  const semantic = getImportStatementNode(text);

  expect(semantic.scope._declarations?.count()).toBe(1);
  expect(semantic.scope.get(newText('Rectangle'))?.name.toNativeString()).toBe('Rectangle');
});

function getImportStatementNode(text: Text): ImportStatementNodeSemantic {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseImportStatementNode(0, nodes) as ImportStatementNode;

  expect(is(node, $ImportStatementNode())).toBe(true);

  const semanticContext = newSemanticContext(newText(resolve(__dirname, 'import-node-semantic.test.ts')));
  node.semantify!(semanticContext);

  expect(is(node.semantic, $ImportStatementNodeSemantic())).toBe(true);
  expect(is(node.expression?.semantic, $ImportStatementNodeSemantic())).toBe(true);

  return node.semantic!;
}
