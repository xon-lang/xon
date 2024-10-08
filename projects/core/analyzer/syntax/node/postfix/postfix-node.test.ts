import {$} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {evaluate} from '../../../../util/evaluate';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {syntaxFromResource} from '../../syntax-analyzer';
import {PostfixNode} from './postfix-node';

test('after integer', () => {
  const text = '1!';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as PostfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.PostfixNode);
  expect(node.operator.text.toString()).toBe('!');
  expect(evaluate(node.value)).toBe(1);
});
