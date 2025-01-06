import {DeclarationNode, DeclarationSemantic, semanticFromResource, TEST_SEMANTIC_CONFIG} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {newTypescriptTranslator} from '#translator';
import {expect, test} from 'vitest';

test('type string', () => {
  const text = newText('type A');
  const resource = newTextResource(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements.at(0)?.value as DeclarationNode;
  const semantic = declaration.id.semantic as DeclarationSemantic;
  const translator = newTypescriptTranslator(semanticAnalyzer);
  const translated = translator.typeDeclaration(semantic);

  expect(translated.toNativeString()).toBe('export type A = {}');
});

test('parameter type', () => {
  const text = newText('type A<:T: Number = Integer:>');
  const resource = newTextResource(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements.at(0)?.value as DeclarationNode;
  const semantic = declaration.id.semantic as DeclarationSemantic;
  const translator = newTypescriptTranslator(semanticAnalyzer);
  const translated = translator.typeDeclaration(semantic);

  expect(translated.toNativeString()).toBe('export type A<T extends Number = Integer> = {}');
});
