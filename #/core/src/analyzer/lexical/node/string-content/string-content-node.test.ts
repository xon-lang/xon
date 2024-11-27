import {newTextData, nothing, textResourceFromData} from '#common';
import {StringNode, syntaxFromResource} from '#core';
import {$} from '#typing';

test('string content', () => {
  const text = newTextData('"a"');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as StringNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.StringNode);
  expect(node.content?.text.toString()).toBe('a');
});
