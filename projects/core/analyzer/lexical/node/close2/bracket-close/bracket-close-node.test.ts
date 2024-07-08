import {$} from '../../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFrom} from '../../../../../util/resource/text/text-resource';
import {syntaxFromResource} from '../../../../syntax/syntax-analyzer';
import {BracketCloseNode} from './bracket-close-node';

test('close paren', () => {
  const text = ']';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BracketCloseNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.BracketCloseNode);
  expect(node.text).toBe(']');
});
