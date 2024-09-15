import {$} from '../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {IntegerNode} from '../../../syntax/node/integer/integer-node';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';

test('string content', () => {
  const text = '1_2_3';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IntegerNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.IntegerNode);
  expect(node.content?.text.toString()).toBe('1_2_3');
  expect(node.value).toBe(123);
});
