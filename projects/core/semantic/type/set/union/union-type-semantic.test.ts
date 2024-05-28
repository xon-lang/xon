import {String2, nothing} from '../../../../../lib/types';
import {DeclarationNode} from '../../../../parser/node/syntax/declaration/declaration-node';
import {syntaxParse} from '../../../../parser/syntax-parser';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {DeclarationKind} from '../../../declaration-manager';
import {DeclarationSemantic} from '../../../declaration/declaration-semantic';
import {$Semantic, semanticParse} from '../../../semantic';
import {IdTypeSemantic} from '../../id/id-type-semantic';
import {TypeSemantic} from '../../type-semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {UnionTypeSemantic} from './union-type-semantic';

test('a is integer or float', () => {
  const text = `
    model Integer
    model Float

    const a: Integer | Float
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($Semantic.DECLARATION);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[2].value as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as UnionTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.UNION_TYPE);
  expect(typeSemantic.left.$).toBe($Semantic.ID_TYPE);
  expect((typeSemantic.left as IdTypeSemantic).declaration?.name).toBe('Integer');
  expect(typeSemantic.right.$).toBe($Semantic.ID_TYPE);
  expect((typeSemantic.right as IdTypeSemantic).declaration?.name).toBe('Float');
});

test('1 check type', () => {
  const text = `
    model Number
    model Integer: Number
    model Float

    const a: Integer
    const b: Integer | Float
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax);

  const aConst = syntax.statements[3].value as DeclarationNode;
  const bConst = syntax.statements[4].value as DeclarationNode;

  const aType = typeSemanticParse(semantic, aConst.type?.value) as TypeSemantic;
  const bType = typeSemanticParse(semantic, bConst.type?.value) as TypeSemantic;
  expect(aType.$).toBe($Semantic.ID_TYPE);
  expect(bType.$).toBe($Semantic.UNION_TYPE);
  expect(aType.is(bType)).toBe(true);
});

test('2 check type', () => {
  const text = `
    model Number
    model Integer: Number
    model Float: Number
    model String

    const a: Integer | Float
    const b: Float
    const c: String
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax);

  const getConst = (name: String2) =>
    (semantic.declarationManager.single(DeclarationKind.VALUE, name, nothing, nothing) as DeclarationSemantic)
      .type as TypeSemantic;

  const aType = getConst('a');
  const bType = getConst('b');
  const cType = getConst('c');

  expect(aType.$).toBe($Semantic.UNION_TYPE);
  expect(bType.$).toBe($Semantic.ID_TYPE);
  expect(cType.$).toBe($Semantic.ID_TYPE);

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
