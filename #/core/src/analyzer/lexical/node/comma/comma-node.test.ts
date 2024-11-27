import {newTextData, nothing, textResourceFromData} from '#common';
import {CommaNode, syntaxFromResource} from '#core';
import {$} from '#typing';

test('comma', () => {
  const text = newTextData(',');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as CommaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.CommaNode);
  expect(node.text.toString()).toBe(',');
});
