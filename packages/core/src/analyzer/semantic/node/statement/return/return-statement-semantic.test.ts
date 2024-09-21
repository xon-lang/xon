import {nothing, textResourceFromData} from '#common';
import {createSemanticAnalyzer, IntegerValueSemantic, ReturnNode, syntaxFromResource} from '#core';
import {$} from '#typing';

test('with value', () => {
  const text = `return  3`;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semanticAnalyzer = createSemanticAnalyzer(syntax);

  const returnNode = semanticAnalyzer.statements[0].value as ReturnNode;
  expect(returnNode.$).toBe($.ReturnNode);

  const idSemantic = returnNode.value?.semantic as IntegerValueSemantic;
  expect(idSemantic.type.value).toBe(3);
});
