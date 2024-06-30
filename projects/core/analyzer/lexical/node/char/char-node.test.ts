import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {$Node} from '../../../node';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';
import {CharNode} from './char-node';

test('a', () => {
  const text = "'a'";
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as CharNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.CHAR);
  expect(node.text).toBe(text);
});
