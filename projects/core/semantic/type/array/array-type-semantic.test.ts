import {nothing} from '../../../lib/core';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {syntaxParse} from '../../../parser/resource-parser';
import {textResourceFrom} from '../../../util/resource/text/text-resource';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic, semanticParse} from '../../semantic';
import {TEST_SEMANTIC_CONFIG} from '../../semantic-config';
import {IntegerTypeSemantic} from '../integer/integer-type-semantic';
import {StringTypeSemantic} from '../string/string-type-semantic';
import {typeSemanticParse} from '../type-semantic-parser';
import {ArrayTypeSemantic} from './array-type-semantic';

test('a is array', () => {
  const text = `
    const a: [1, 2, "A"]
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.VALUE_DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[0].item as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.VALUE_DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as ArrayTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.ARRAY_TYPE);
  expect(typeSemantic.items.length).toBe(3);
  expect((typeSemantic.items[0] as IntegerTypeSemantic).value).toBe(1);
  expect((typeSemantic.items[1] as IntegerTypeSemantic).value).toBe(2);
  expect((typeSemantic.items[2] as StringTypeSemantic).value).toBe('A');
});
