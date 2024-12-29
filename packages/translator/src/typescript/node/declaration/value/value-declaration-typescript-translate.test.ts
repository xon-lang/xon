import {newText, newTextResource, nothing} from '#common';
import {DeclarationNode, DeclarationSemantic, semanticFromResource, TEST_SEMANTIC_CONFIG} from '#core';
import {newTypescriptTranslator} from '#translator';

test('type union', () => {
  const text = newText('a: Integer | String');
  const resource = newTextResource(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements[0].value as DeclarationNode;
  const semantic = declaration.id.semantic as DeclarationSemantic;
  const translator = newTypescriptTranslator(semanticAnalyzer);
  const translated = translator.valueDeclaration(semantic);

  expect(translated).toBe('a: Integer | String');
});

test('type function', () => {
  const text = newText('infix + (a: Integer, b: Integer): Integer');
  const resource = newTextResource(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements[0].value as DeclarationNode;
  const semantic = declaration.id.semantic as DeclarationSemantic;
  const translator = newTypescriptTranslator(semanticAnalyzer);
  const translated = translator.valueDeclaration(semantic);

  expect(translated).toBe('__plus__: (a: Integer, b: Integer) => Integer');
});
