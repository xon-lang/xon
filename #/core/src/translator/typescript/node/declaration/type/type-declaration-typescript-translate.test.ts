import {newTextData, nothing, textResourceFromData} from '#/common';
import {
  createTypescriptTranslator,
  DeclarationNode,
  DeclarationSemantic,
  semanticFromResource,
  TEST_SEMANTIC_CONFIG,
} from '#/core';

test('type string', () => {
  const text = newTextData('type A');
  const resource = textResourceFromData(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements[0].value as DeclarationNode;
  const semantic = declaration.id.semantic as DeclarationSemantic;
  const translator = createTypescriptTranslator(semanticAnalyzer);
  const translated = translator.typeDeclaration(semantic);

  expect(translated).toBe('export type A = {}');
});

test('parameter type', () => {
  const text = newTextData('type A<:T: Number = Integer:>');
  const resource = textResourceFromData(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements[0].value as DeclarationNode;
  const semantic = declaration.id.semantic as DeclarationSemantic;
  const translator = createTypescriptTranslator(semanticAnalyzer);
  const translated = translator.typeDeclaration(semantic);

  expect(translated).toBe('export type A<T extends Number = Integer> = {}');
});
