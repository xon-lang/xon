import {newText, newTextResource, nothing} from '#common';
import {$IdNode, $NlNode, IdNode, LexicalNode, NL, NlNode, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('lf nl', () => {
  const text = newText('\n');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = syntax.hiddenNodes[0] as NlNode;

  expect(statements.length).toBe(0);
  expect(node.$).toBe($NlNode);
  expect(node.text.toNativeString()).toBe(NL.toNativeString());
});

test('several', () => {
  const text = newText('  \n    \n   abc');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;

  expect(statements.length).toBe(1);
  expect(statements[0].value.$).toBe($IdNode);
  expect((statements[0].value as IdNode).text.toNativeString()).toBe('abc');

  const node0 = statements[0].hiddenNodes?.at(0) as LexicalNode;
  const node1 = statements[0].hiddenNodes?.at(1) as LexicalNode;
  const node2 = statements[0].hiddenNodes?.at(2) as LexicalNode;
  expect(statements[0].hiddenNodes?.length()).toBe(3);
  expect(node0.text.toNativeString()).toBe('  ');
  expect(node1.text.toNativeString()).toBe('\n    \n');
  expect(node2.text.toNativeString()).toBe('   ');
});
