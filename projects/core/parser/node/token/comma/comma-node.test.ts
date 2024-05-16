import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-parser';
import {$Node} from '../../node';
import {CommaNode} from './comma-node';

test('comma', () => {
  const text = ',';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as CommaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.COMMA);
  expect(node.text).toBe(',');
});
