import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {JOINING} from '../../../parser-config';
import {syntaxParse} from '../../../syntax-parser';
import {$Node} from '../../node';
import {MemberNode} from '../../syntax/member/member-node';
import {IdNode} from '../id/id-node';
import {OperatorNode} from '../operator/operator-node';

test('no space', () => {
  const text = 'abc~.def';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.instance?.$).toBe($Node.ID);
  expect((node.instance as IdNode).text).toBe('abc');
  expect((node.operator as OperatorNode).text).toBe('.');
  expect(node.id?.$).toBe($Node.ID);
  expect((node.id as IdNode).text).toBe('def');
});

test('spaces', () => {
  const text = 'abc~  .def';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.instance?.$).toBe($Node.ID);
  expect((node.instance as IdNode).text).toBe('abc');
  expect((node.operator as OperatorNode).text).toBe('.');
  expect(node.id?.$).toBe($Node.ID);
  expect((node.id as IdNode).text).toBe('def');
});

test('with new line', () => {
  const text = 'abc~   \n  .def';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.instance.hiddenNodes?.at(0)?.text).toBe(JOINING + '   \n');
  expect(node.instance?.$).toBe($Node.ID);
  expect((node.instance as IdNode).text).toBe('abc');
  expect((node.operator as OperatorNode).text).toBe('.');
  expect(node.id?.$).toBe($Node.ID);
  expect((node.id as IdNode).text).toBe('def');
});
