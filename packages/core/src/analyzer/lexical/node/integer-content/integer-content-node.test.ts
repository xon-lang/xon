import {nothing} from '#common';
import {$, IntegerNode, syntaxFromResource, textResourceFromData} from '#core';

test('string content', () => {
  const text = '1_2_3';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IntegerNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.IntegerNode);
  expect(node.content?.text.toString()).toBe('1_2_3');
  expect(node.value).toBe(123);
});
