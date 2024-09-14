import {$} from '../../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFromData} from '../../../../../util/resource/text/text-resource';
import {syntaxFromResource} from '../../../../syntax/syntax-analyzer';
import {AngleCloseNode} from './angle-close-node';

test('close paren', () => {
  const text = ':>';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as AngleCloseNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.AngleCloseNode);
  expect(node.text.toString()).toBe(':>');
});
