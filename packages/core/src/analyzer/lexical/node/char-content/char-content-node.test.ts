import {$} from '../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {CharNode} from '../../../syntax/node/char/char-node';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';

test('char content', () => {
  const text = "'a'";
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as CharNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.CharNode);
  expect(node.content?.text.toString()).toBe('a');
});
