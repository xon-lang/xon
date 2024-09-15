import {$} from '../../../../$';
import {nothing} from '../../../../../../lib/src/types';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {StringNode} from '../../../syntax/node/string/string-node';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';

test('string content', () => {
  const text = '"a"';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.StringNode);
  expect(node.content?.text.toString()).toBe('a');
});
