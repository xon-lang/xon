import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {DeclarationNode} from '../../../node/syntax/declaration/declaration-node';
import {syntaxParse} from '../../../syntax-parser';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic, semanticParse} from '../../semantic';
import {TEST_SEMANTIC_CONFIG} from '../../semantic-config';
import {typeSemanticParse} from '../type-semantic-parser';
import {StringTypeSemantic} from './string-type-semantic';

test('a is string value', () => {
  const text = `
    const a: "abc" = "abc"
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[0].value as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as StringTypeSemantic;
  expect(typeSemantic?.$).toBe($Semantic.STRING_TYPE);
  expect(typeSemantic?.value).toBe('abc');
});

test('a is string literal', () => {
  const text = `
    const a: "abc`;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements[0].value as DeclarationNode;
  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as StringTypeSemantic;

  expect(typeSemantic?.$).toBe($Semantic.STRING_TYPE);
  expect(typeSemantic?.value).toBe('abc');
});

test('a is empty string 1', () => {
  const text = `
    const a: "`;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements[0].value as DeclarationNode;
  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as StringTypeSemantic;

  expect(typeSemantic?.$).toBe($Semantic.STRING_TYPE);
  expect(typeSemantic?.value).toBe('');
});

test('a is empty string 2', () => {
  const text = `
    const a: ""`;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements[0].value as DeclarationNode;
  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as StringTypeSemantic;

  expect(typeSemantic?.$).toBe($Semantic.STRING_TYPE);
  expect(typeSemantic?.value).toBe('');
});
