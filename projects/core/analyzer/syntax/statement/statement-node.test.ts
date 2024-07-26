import {$} from '../../../$';
import {nothing} from '../../../../lib/types';
import {textResourceFromData} from '../../../util/resource/text/text-resource';
import {CharNode} from '../node/char/char-node';
import {syntaxFromResource} from '../syntax-analyzer';

test('a', () => {
  const text = "   \n    \n  ---comment ---'a'";
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const statement = statements[0];

  expect(statements.length).toBe(1);
  expect(statement.$).toBe($.StatementNode);
  expect(statement.indentLevel).toBe(0);
  expect(statement.indent.stop.column).toBe(2);
  expect(statement.parent).toBe(nothing);
  expect(statement.children.length).toBe(1);
  expect(statement.children[0].$).toBe($.CharNode);
  expect((statement.children[0] as CharNode).content?.text.toString()).toBe('a');
  expect(statement.body.length).toBe(0);
});
