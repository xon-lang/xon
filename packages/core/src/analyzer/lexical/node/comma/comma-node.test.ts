import {nothing} from '#common';
import {$, CommaNode, syntaxFromResource, textResourceFromData} from '#core';

test('comma', () => {
  const text = ',';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as CommaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.CommaNode);
  expect(node.text.toString()).toBe(',');
});
