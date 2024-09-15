import {nothing} from '#common';
import {$, AngleCloseNode, syntaxFromResource, textResourceFromData} from '#core';

test('close paren', () => {
  const text = ':>';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as AngleCloseNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.AngleCloseNode);
  expect(node.text.toString()).toBe(':>');
});
