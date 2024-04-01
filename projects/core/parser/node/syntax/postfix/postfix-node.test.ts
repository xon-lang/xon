import {nothing} from '../../../../lib/core';
import {evaluate} from '../../../../util/evaluate';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {resourceParse} from '../../../resource-parser';
import {$Node} from '../../node';
import {PostfixNode} from './postfix-node';

test('after integer', () => {
  const text = '1!';
  const source = textResourceFrom(nothing, text);
  const syntax = resourceParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as PostfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.POSTFIX);
  expect(node.operator.text).toBe('!');
  expect(evaluate(node.value)).toBe(1);
});
