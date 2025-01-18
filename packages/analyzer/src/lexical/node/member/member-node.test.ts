import {
  $IdNode,
  $WhitespaceNode,
  collapseMemberNode,
  IdNode,
  MemberNode,
  parseExpressionNodes,
  WhitespaceNode,
} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('member with id instance', () => {
  const text = newText('  abc.   def   ');
  const source = charStreamFromText(text);
  const {nodes} = parseExpressionNodes(source);
  const node = collapseMemberNode(nodes)?.node as MemberNode;

  expect(node).toBeTruthy();
  expect(is(node.instance, $IdNode)).toBe(true);
  expect((node.instance as IdNode).text.toNativeString()).toBe('abc');
  expect(node.instance.hiddenNodes).toBeFalsy();
  expect(node.hiddenNodes?.count()).toBe(1);
  expect(is(node.id, $IdNode)).toBe(true);
  expect(node.id?.hiddenNodes?.count()).toBe(1);
  expect(is(node.id?.hiddenNodes?.first(), $WhitespaceNode)).toBe(true);
  expect((node.id?.hiddenNodes?.first() as WhitespaceNode).text.toNativeString()).toBe('   ');
  expect(node.id?.text.toNativeString()).toBe('def');
});

// test('member with id instance', () => {
//   const text = newText('abc.def');
//   const source = newTextResource(nothing, text);
//   const syntax = syntaxFromResource(source);
//   const statements = syntax.statements;
//   const node = statements.at(0)?.value as MemberNode;

//   expect(statements.count()).toBe(1);
//   expect(node.$.toNativeString()).toBe($MemberNode.toNativeString());

//   expect(node.instance.$).toBe($IdNode);
//   expect((node.instance as LexicalNode).text.toNativeString()).toBe('abc');

//   expect(node.operator.text.toNativeString()).toBe('.');

//   expect(node.id?.$).toBe($IdNode);
//   expect(node.id?.text.toNativeString()).toBe('def');
// });

// test('member without id', () => {
//   const text = newText('abc.');
//   const source = newTextResource(nothing, text);
//   const syntax = syntaxFromResource(source);
//   const statements = syntax.statements;
//   const node = statements.at(0)?.value as MemberNode;

//   expect(statements.count()).toBe(1);
//   expect(node.$).toBe($MemberNode);

//   expect(node.instance.$).toBe($IdNode);
//   expect((node.instance as LexicalNode).text.toNativeString()).toBe('abc');

//   expect(node.operator.text.toNativeString()).toBe('.');

//   expect(node.id).toBe(nothing);
// });
