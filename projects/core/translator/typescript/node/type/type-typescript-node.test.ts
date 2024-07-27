import {nothing} from '../../../../../lib/types';
import {ValueDeclarationSemantic} from '../../../../analyzer/semantic/node/declaration/value/value-declaration-semantic';
import {semanticFromResource} from '../../../../analyzer/semantic/semantic-analyzer';
import {TEST_SEMANTIC_CONFIG} from '../../../../analyzer/semantic/semantic-analyzer-config';
import {DeclarationNode} from '../../../../analyzer/syntax/node/declaration/declaration-node';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {createTypescriptTranslator} from '../../typescript-translator';

test('type string', () => {
  const text = 'const a: "string"';
  const resource = textResourceFromData(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements[0].value as DeclarationNode;
  const semantic = declaration.id.semantic as ValueDeclarationSemantic;
  const translator = createTypescriptTranslator(semanticAnalyzer);
  const translated = semantic.type ? translator.type(semantic.type) : '';

  expect(translated).toBe('"string"');
});

test('type integer', () => {
  const text = 'const a: 123';
  const resource = textResourceFromData(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements[0].value as DeclarationNode;
  const semantic = declaration.id.semantic as ValueDeclarationSemantic;
  const translator = createTypescriptTranslator(semanticAnalyzer);
  const translated = semantic.type ? translator.type(semantic.type) : '';

  expect(translated).toBe('123');
});

test('type union', () => {
  const text = 'const a: 123 | "abc" | 1 | "a"';
  const resource = textResourceFromData(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements[0].value as DeclarationNode;
  const semantic = declaration.id.semantic as ValueDeclarationSemantic;
  const translator = createTypescriptTranslator(semanticAnalyzer);
  const translated = semantic.type ? translator.type(semantic.type) : '';

  expect(translated).toBe('123 | "abc" | 1 | "a"');
});

test('type array', () => {
  const text = 'const a: [1, 2, "abc", "a" | 1 & 2]';
  const resource = textResourceFromData(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements[0].value as DeclarationNode;
  const semantic = declaration.id.semantic as ValueDeclarationSemantic;
  const translator = createTypescriptTranslator(semanticAnalyzer);
  const translated = semantic.type ? translator.type(semantic.type) : '';

  expect(translated).toBe('[1, 2, "abc", "a" | 1 & 2]');
});
