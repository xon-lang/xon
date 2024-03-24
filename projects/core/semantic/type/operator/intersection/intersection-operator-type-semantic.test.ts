import {DeclarationNode} from '../../../../parser/node/declaration/declaration-node';
import {parseSyntax} from '../../../../parser/syntax';
import {sourceFromText} from '../../../../source/source';
import {DeclarationSemantic} from '../../../declaration/declaration-semantic';
import {$Semantic, parseSemantic} from '../../../semantic';
import {DeclarationTypeSemantic} from '../../declaration/declaration-type-semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {IntersectionOperatorTypeSemantic} from './intersection-operator-type-semantic';

test('a is integer', () => {
  const text = `
    model Integer
    model Float

    const a: Integer & Float
  `;
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($Semantic.VALUE_DECLARATION);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[2].declaration as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.VALUE_DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as IntersectionOperatorTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.INTERSECTION_OPERATOR_TYPE);
  expect(typeSemantic.left.$).toBe($Semantic.DECLARATION_TYPE);
  expect((typeSemantic.left as DeclarationTypeSemantic).declaration?.name).toBe('Integer');
  expect(typeSemantic.right.$).toBe($Semantic.DECLARATION_TYPE);
  expect((typeSemantic.right as DeclarationTypeSemantic).declaration?.name).toBe('Float');
});

test('check type', () => {
  const text = `
    model Number
    model Integer: Number
    model Float

    const a: Integer & Float
    const b: Integer
    const b: Integer
  `;
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  const aConst = syntax.statements[3].declaration as DeclarationNode;
  const bConst = syntax.statements[4].declaration as DeclarationNode;

  const aType = typeSemanticParse(semantic, aConst.type) as TypeSemantic;
  const bType = typeSemanticParse(semantic, bConst.type) as TypeSemantic;
  expect(aType.$).toBe($Semantic.DECLARATION_TYPE);
  expect(bType.$).toBe($Semantic.INTERSECTION_OPERATOR_TYPE);
  expect(aType.is(bType)).toBe(false);
});
