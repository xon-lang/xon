import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-analyzer';
import {$Node} from '../../../syntax/node';
import {MemberNode} from '../../../syntax/node/member/member-node';
import {JOINING} from '../../lexical-analyzer-config';
import {IdNode} from '../id/id-node';
import {LexicalNode} from '../lexical-node';
import {OperatorNode} from '../operator/operator-node';

test('no space', () => {
  const text = 'abc~.def';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

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
  const node = statements[0].value as MemberNode;

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
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.instance?.$).toBe($Node.ID);
  expect((node.instance as IdNode).text).toBe('abc');
  expect((node.operator as OperatorNode).text).toBe('.');
  // todo fix  'as LexicalNode'
  expect((node.operator.hiddenNodes?.at(0) as LexicalNode)?.text).toBe(JOINING + '   \n');
  expect(node.id?.$).toBe($Node.ID);
  expect((node.id as IdNode).text).toBe('def');
});
