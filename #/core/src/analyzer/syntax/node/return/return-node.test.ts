import {newTextData, newTextResource, nothing} from '#common';
import {RETURN, ReturnNode, evaluate, syntaxFromResource} from '#core';
import {$} from '#typing';

test('with value', () => {
  const text = newTextData('return 3 + 7');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ReturnNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ReturnNode);
  expect(node.operator.text.toString()).toBe(RETURN);
  expect(evaluate(node.value)).toBe(10);
});
