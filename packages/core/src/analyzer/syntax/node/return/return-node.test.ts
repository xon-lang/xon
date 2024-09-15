import {$} from '../../../../$';
import {nothing} from '../../../../../../lib/src/types';
import {evaluate} from '../../../../util/evaluate';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {RETURN} from '../../../lexical/lexical-analyzer-config';
import {syntaxFromResource} from '../../syntax-analyzer';
import {ReturnNode} from './return-node';

test('with value', () => {
  const text = 'return 3 + 7';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ReturnNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ReturnNode);
  expect(node.operator.text.toString()).toBe(RETURN);
  expect(evaluate(node.value)).toBe(10);
});
