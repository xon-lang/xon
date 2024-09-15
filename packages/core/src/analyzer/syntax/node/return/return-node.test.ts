import {nothing} from '#common';
import {$, RETURN, ReturnNode, evaluate, syntaxFromResource, textResourceFromData} from '#core';

test('with value', () => {
  const text = 'return 3 + 7';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ReturnNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ReturnNode);
  expect(node.operator.text.toString()).toBe(RETURN);
  expect(evaluate(node.value)).toBe(10);
});
