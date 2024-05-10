import {nothing} from '../../../lib/core';
import {textResourceFrom} from '../../../util/resource/text/text-resource';
import {syntaxParse} from '../../syntax-parser';
import {$Node} from '../node';
import {CharNode} from '../token/char/char-node';

test('a', () => {
  const text = "   \n    \n  ---comment ---'a'";
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const statement = statements[0];

  expect(statements.length).toBe(1);
  expect(statement.$).toBe($Node.STATEMENT);
  expect(statement.beforeIndentHiddenNodes.length).toBe(2);
  expect(statement.beforeIndentHiddenNodes[0].text).toBe('   ');
  expect(statement.beforeIndentHiddenNodes[1].text).toBe('\n    \n');
  expect(statement.indentHiddenNodes.length).toBe(2);
  expect(statement.indentHiddenNodes[0].text).toBe('  ');
  expect(statement.indentHiddenNodes[1].text).toBe('---comment ---');
  expect(statement.indentLevel).toBe(0);
  expect(statement.indentStopColumn).toBe(2);
  expect(statement.parentStatement).toBe(nothing);
  expect(statement.children.length).toBe(1);
  expect(statement.children[0].$).toBe($Node.CHAR);
  expect((statement.children[0] as CharNode).text).toBe("'a'");
  expect(statement.body.length).toBe(0);
});
