import {newAnalyzerContext, newCharacterStreamFromText, parseStatements, StatementNode} from '#analyzer';
import {ArrayData, newText, newTextPosition, Text} from '#common';
import {findStatementNode} from '#vscode';
import {expect, test, vi} from 'vitest';

vi.stubGlobal('vscode', () => ({}));

test('Find statement node', () => {
  const text = newText('import "abc" "def"');
  const statements = getImportStatementNode(text);

  expect(findStatementNode(statements, newTextPosition(9, 1, 9))).toBeTruthy();
});

function getImportStatementNode(text: Text): ArrayData<StatementNode> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);

  expect(statements.count() > 0).toBe(true);

  return statements;
}
