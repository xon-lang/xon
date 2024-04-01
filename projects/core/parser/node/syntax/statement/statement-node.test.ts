import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax';
import {$Node} from '../../node';
import {CharNode} from '../../token/char/char-node';

test('a', () => {
  const text = "   \n    \n  ---comment ---'a'";
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0];

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.STATEMENT);
  expect(node.beforeIndentHiddenNodes.length).toBe(2);
  expect(node.beforeIndentHiddenNodes[0].text).toBe('   ');
  expect(node.beforeIndentHiddenNodes[1].text).toBe('\n    \n');
  expect(node.indentHiddenNodes.length).toBe(2);
  expect(node.indentHiddenNodes[0].text).toBe('  ');
  expect(node.indentHiddenNodes[1].text).toBe('---comment ---');
  expect(node.indentLevel).toBe(0);
  expect(node.indentStopColumn).toBe(2);
  expect(node.parent).toBe(nothing);
  expect(node.children.length).toBe(1);
  expect(node.children[0].$).toBe($Node.CHAR);
  expect((node.children[0] as CharNode).text).toBe("'a'");
  expect(node.body.length).toBe(0);
});
