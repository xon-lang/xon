import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-parser';
import {$Node} from '../../node';
import {EofNode} from './eof-node';

test('a', () => {
  const text = "'a'";
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as EofNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.CHAR);
  expect(node.text).toBe(text);
});