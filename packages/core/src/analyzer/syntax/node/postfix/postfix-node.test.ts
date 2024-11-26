import {newTextData, nothing, textResourceFromData} from '#common';
import {PostfixNode, evaluate, syntaxFromResource} from '#core';
import {$} from '#typing';

test('after integer', () => {
  const text = newTextData('1!');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as PostfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.PostfixNode);
  expect(node.operator.text.toString()).toBe('!');
  expect(evaluate(node.value)).toBe(1);
});
