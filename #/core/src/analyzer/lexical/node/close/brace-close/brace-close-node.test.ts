import {newTextData, nothing, textResourceFromData} from '#common';
import {BraceCloseNode, syntaxFromResource} from '#core';
import {$} from '#typing';

test('close paren', () => {
  const text = newTextData('}');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BraceCloseNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.BraceCloseNode);
  expect(node.text.toString()).toBe('}');
});
