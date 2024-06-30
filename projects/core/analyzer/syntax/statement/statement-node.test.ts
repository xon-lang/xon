import {nothing} from '../../../../lib/types';
import {textResourceFrom} from '../../../util/resource/text/text-resource';
import {CharNode} from '../../lexical/node/char/char-node';
import {$Node} from '../../node';
import {syntaxFromResource} from '../syntax-analyzer';

test('a', () => {
  const text = "   \n    \n  ---comment ---'a'";
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const statement = statements[0];

  expect(statements.length).toBe(1);
  expect(statement.$).toBe($Node.STATEMENT);
  expect(statement.indentLevel).toBe(0);
  expect(statement.indent.stop.column).toBe(2);
  expect(statement.parent).toBe(nothing);
  expect(statement.children.length).toBe(1);
  expect(statement.children[0].$).toBe($Node.CHAR);
  expect((statement.children[0] as CharNode).text).toBe("'a'");
  expect(statement.body.length).toBe(0);
});
