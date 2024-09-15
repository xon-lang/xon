import {$} from '../../../../../$';
import {nothing} from '../../../../../../../lib/src/types';
import {textResourceFromData} from '../../../../../util/resource/text/text-resource';
import {syntaxFromResource} from '../../../../syntax/syntax-analyzer';
import {ParenCloseNode} from './paren-close-node';

test('close paren', () => {
  const text = ')';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ParenCloseNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ParenCloseNode);
  expect(node.text.toString()).toBe(')');
});
