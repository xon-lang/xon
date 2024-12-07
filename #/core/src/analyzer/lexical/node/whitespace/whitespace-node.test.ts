import {newTextData, newTextResource, nothing} from '#common';
import {LexicalNode, syntaxFromResource, WhitespaceNode} from '#core';
import {$} from '#typing';

test('whitespace', () => {
  const text = newTextData('    ');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = syntax.hiddenNodes[0] as WhitespaceNode;

  expect(statements.length).toBe(0);
  expect(syntax.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($.WhitespaceNode);
  expect((node as LexicalNode).text.toString()).toBe('    ');
});
