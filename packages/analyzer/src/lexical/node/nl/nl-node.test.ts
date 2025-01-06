import {$IdNode, $NlNode, IdNode, LexicalNode, NL, NlNode, syntaxFromResource} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('lf nl', () => {
  const text = newText('\n');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = syntax.hiddenNodes.at(0) as NlNode;

  expect(statements.count()).toBe(0);
  expect(node.$).toBe($NlNode);
  expect(node.text.toNativeString()).toBe(NL.toNativeString());
});

test('several', () => {
  const text = newText('  \n    \n   abc');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;

  expect(statements.count()).toBe(1);
  expect(statements.at(0)?.value.$).toBe($IdNode);
  expect((statements.at(0)?.value as IdNode).text.toNativeString()).toBe('abc');

  const node0 = statements.at(0)?.hiddenNodes?.at(0) as LexicalNode;
  const node1 = statements.at(0)?.hiddenNodes?.at(1) as LexicalNode;
  const node2 = statements.at(0)?.hiddenNodes?.at(2) as LexicalNode;
  expect(statements.at(0)?.hiddenNodes?.count()).toBe(3);
  expect(node0.text.toNativeString()).toBe('  ');
  expect(node1.text.toNativeString()).toBe('\n    \n');
  expect(node2.text.toNativeString()).toBe('   ');
});
