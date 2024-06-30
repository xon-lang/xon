import {nothing} from '../../../../../lib/types';
import {evaluate} from '../../../../util/evaluate';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {$Node} from '../../../node';
import {syntaxFromResource} from '../../syntax-analyzer';
import {PostfixNode} from './postfix-node';

test('after integer', () => {
  const text = '1!';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as PostfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.POSTFIX);
  expect(node.operator.text).toBe('!');
  expect(evaluate(node.value)).toBe(1);
});
