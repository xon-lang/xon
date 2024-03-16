import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {parseSyntax} from '../../../parser/syntax';
import {sourceFromText} from '../../../source/source';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic, parseSemantic} from '../../semantic';
import {LiteralTypeSemantic} from '../../type/literal/literal-type-semantic';
import {typeSemanticParse} from '../../type/type-semantic-parser';
import {ArrayLiteralSemantic} from './array-literal-semantic';

test('a is integer', () => {
  const text = `
    const a: [1, 2, "A"]
  `;
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.CONST_DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[0].declaration as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.CONST_DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as LiteralTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.LITERAL_TYPE);
  expect((typeSemantic.literal as ArrayLiteralSemantic).value.length).toBe(3);
  expect((typeSemantic.literal as ArrayLiteralSemantic).value[0].value).toBe(1);
  expect((typeSemantic.literal as ArrayLiteralSemantic).value[1].value).toBe(2);
  expect((typeSemantic.literal as ArrayLiteralSemantic).value[2].value).toBe('A');
});
