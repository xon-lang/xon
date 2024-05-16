import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-parser';
import {$Node} from '../../node';
import {TokenNode} from '../../token/token-node';
import {MemberNode} from './member-node';

test('member with id instance', () => {
  const text = 'abc.def';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.MEMBER);

  expect(node.instance.$).toBe($Node.ID);
  expect((node.instance as TokenNode).text).toBe('abc');

  expect(node.operator.text).toBe('.');

  expect(node.id?.$).toBe($Node.ID);
  expect(node.id?.text).toBe('def');
});

test('member without id', () => {
  const text = 'abc.';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.MEMBER);

  expect(node.instance.$).toBe($Node.ID);
  expect((node.instance as TokenNode).text).toBe('abc');

  expect(node.operator.text).toBe('.');

  expect(node.id).toBe(nothing);
});
