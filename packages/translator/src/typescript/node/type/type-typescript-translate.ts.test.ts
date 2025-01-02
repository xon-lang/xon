import {newText, newTextResource, nothing} from '#common';
import {DeclarationNode, semanticFromResource, TEST_SEMANTIC_CONFIG, ValueDeclarationSemantic} from '#core';
import {newTypescriptTranslator} from '#translator';
import {expect, test} from 'vitest';

test('type string', () => {
  const text = newText('const a: "string"');
  const resource = newTextResource(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements.at(0)?.value as DeclarationNode;
  const semantic = declaration.id.semantic as ValueDeclarationSemantic;
  const translator = newTypescriptTranslator(semanticAnalyzer);
  const translated = semantic.type ? translator.type(semantic.type) : newText();

  expect(translated.toNativeString()).toBe('"string"');
});

test('type integer', () => {
  const text = newText('const a: 123');
  const resource = newTextResource(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements.at(0)?.value as DeclarationNode;
  const semantic = declaration.id.semantic as ValueDeclarationSemantic;
  const translator = newTypescriptTranslator(semanticAnalyzer);
  const translated = semantic.type ? translator.type(semantic.type) : newText();

  expect(translated.toNativeString()).toBe('123');
});

test('type union', () => {
  const text = newText('const a: 123 | "abc" | 1 | "a"');
  const resource = newTextResource(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements.at(0)?.value as DeclarationNode;
  const semantic = declaration.id.semantic as ValueDeclarationSemantic;
  const translator = newTypescriptTranslator(semanticAnalyzer);
  const translated = semantic.type ? translator.type(semantic.type) : newText();

  expect(translated.toNativeString()).toBe('123 | "abc" | 1 | "a"');
});

test('type array', () => {
  const text = newText('const a: [1, 2, "abc", "a" | 1 & 2]');
  const resource = newTextResource(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements.at(0)?.value as DeclarationNode;
  const semantic = declaration.id.semantic as ValueDeclarationSemantic;
  const translator = newTypescriptTranslator(semanticAnalyzer);
  const translated = semantic.type ? translator.type(semantic.type) : newText();

  expect(translated.toNativeString()).toBe('[1, 2, "abc", "a" | 1 & 2]');
});
