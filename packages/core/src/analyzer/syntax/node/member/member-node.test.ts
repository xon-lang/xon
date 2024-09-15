import {$} from '../../../../$';
import {nothing} from '../../../../../../lib/src/types';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {LexicalNode} from '../../../lexical/node/lexical-node';
import {syntaxFromResource} from '../../syntax-analyzer';
import {MemberNode} from './member-node';

test('member with id instance', () => {
  const text = 'abc.def';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.MemberNode);

  expect(node.instance.$).toBe($.IdNode);
  expect((node.instance as LexicalNode).text.toString()).toBe('abc');

  expect(node.operator.text.toString()).toBe('.');

  expect(node.id?.$).toBe($.IdNode);
  expect(node.id?.text.toString()).toBe('def');
});

test('member without id', () => {
  const text = 'abc.';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.MemberNode);

  expect(node.instance.$).toBe($.IdNode);
  expect((node.instance as LexicalNode).text.toString()).toBe('abc');

  expect(node.operator.text.toString()).toBe('.');

  expect(node.id).toBe(nothing);
});
