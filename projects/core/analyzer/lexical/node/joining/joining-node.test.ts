import {$, is} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {MemberNode} from '../../../syntax/node/member/member-node';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';
import {JOINING} from '../../lexical-analyzer-config';
import {IdNode} from '../id/id-node';
import {LexicalNode} from '../lexical-node';
import {OperatorNode} from '../operator/operator-node';

test('no space', () => {
  const text = 'abc~.def';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.instance?.$).toBe($.IdNode);
  expect((node.instance as IdNode).text).toBe('abc');
  expect((node.operator as OperatorNode).text).toBe('.');
  expect(node.id?.$).toBe($.IdNode);
  expect((node.id as IdNode).text).toBe('def');
});

test('spaces', () => {
  const text = 'abc~  .def';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.instance?.$).toBe($.IdNode);
  expect((node.instance as IdNode).text).toBe('abc');
  expect((node.operator as OperatorNode).text).toBe('.');
  expect(node.id?.$).toBe($.IdNode);
  expect((node.id as IdNode).text).toBe('def');
});

test('with new line', () => {
  const text = 'abc~   \n  .def';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.instance?.$).toBe($.IdNode);
  expect((node.instance as IdNode).text).toBe('abc');
  expect((node.operator as OperatorNode).text).toBe('.');
  expect(is(node.operator.hiddenNodes?.at(0), $.LexicalNode)).toBe(true);
  expect((node.operator.hiddenNodes?.at(0) as LexicalNode)?.text).toBe(JOINING + '   \n');
  expect(node.id?.$).toBe($.IdNode);
  expect((node.id as IdNode).text).toBe('def');
});
