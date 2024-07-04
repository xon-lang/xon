import {$} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {LexicalNode} from '../../../lexical/node/lexical-node';
import {syntaxFromResource} from '../../syntax-analyzer';
import {MemberNode} from './member-node';

test('member with id instance', () => {
  const text = 'abc.def';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.MemberNode);

  expect(node.instance.$).toBe($.IdNode);
  expect((node.instance as LexicalNode).text).toBe('abc');

  expect(node.operator.text).toBe('.');

  expect(node.id?.$).toBe($.IdNode);
  expect(node.id?.text).toBe('def');
});

test('member without id', () => {
  const text = 'abc.';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.MemberNode);

  expect(node.instance.$).toBe($.IdNode);
  expect((node.instance as LexicalNode).text).toBe('abc');

  expect(node.operator.text).toBe('.');

  expect(node.id).toBe(nothing);
});
