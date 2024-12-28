import {newText, newTextResource, nothing} from '#common';
import {$ReturnNode, RETURN, ReturnNode, evaluate, syntaxFromResource} from '#core';

test('with value', () => {
  const text = newText('return 3 + 7');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ReturnNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($ReturnNode);
  expect(node.operator.text.toString()).toBe(RETURN);
  expect(evaluate(node.value)).toBe(10);
});
