import {nothing} from '../../../../lib/core';
import {DeclarationNode} from '../../../../parser/node/syntax/declaration/declaration-node';
import {parseSyntax} from '../../../../parser/syntax';
import {sourceFromText} from '../../../../source/source';
import {DeclarationSemantic} from '../../../declaration/declaration-semantic';
import {$Semantic, parseSemantic} from '../../../semantic';
import {DeclarationTypeSemantic} from '../../declaration/declaration-type-semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {IntegerTypeSemantic} from '../integer/integer-type-semantic';
import {ArrayTypeSemantic} from './array-type-semantic';

test('a is array', () => {
  const text = `
    model Integer
    const a: Integer[3]
  `;
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(2);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[1].declaration as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as ArrayTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.ARRAY);
  expect(typeSemantic.type.$).toBe($Semantic.ID);
  expect((typeSemantic.type as DeclarationTypeSemantic).declaration.name).toBe('Integer');
  expect(typeSemantic.size?.$).toBe($Semantic.INTEGER);
  expect((typeSemantic.size as IntegerTypeSemantic).value).toBe(3);
});

test('a is array of array', () => {
  const text = `
    model Integer
    const a: Integer[3][]
  `;
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(2);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[1].declaration as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as ArrayTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.ARRAY);
  expect(typeSemantic.type.$).toBe($Semantic.ARRAY);
  expect(typeSemantic.size).toBe(nothing);

  const outerTypeSemantic = typeSemantic.type as ArrayTypeSemantic;
  expect(outerTypeSemantic.$).toBe($Semantic.ARRAY);
  expect(outerTypeSemantic.type.$).toBe($Semantic.ID);
  expect((outerTypeSemantic.type as DeclarationTypeSemantic).declaration.name).toBe('Integer');
  expect(outerTypeSemantic.size?.$).toBe($Semantic.INTEGER);
  expect((outerTypeSemantic.size as IntegerTypeSemantic).value).toBe(3);
});
