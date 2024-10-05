import {nothing, textResourceFromData} from '#common';
import {ParenCloseNode, syntaxFromResource} from '#core';
import {$} from '#typing';

test('close paren', () => {
  const text = ')';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ParenCloseNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ParenCloseNode);
  expect(node.text.toString()).toBe(')');
});