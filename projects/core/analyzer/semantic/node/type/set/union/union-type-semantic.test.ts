import {$} from '../../../../../../$';
import {String2, nothing} from '../../../../../../../lib/types';
import {textResourceFrom} from '../../../../../../util/resource/text/text-resource';
import {DeclarationNode} from '../../../../../syntax/node/declaration/declaration-node';
import {syntaxFromResource} from '../../../../../syntax/syntax-analyzer';
import {DeclarationKind} from '../../../../declaration-manager';
import {createSemanticAnalyzer} from '../../../../semantic-analyzer';
import {DeclarationSemantic} from '../../../declaration/declaration-semantic';
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
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($.DeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[2].value as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.DeclarationSemantic);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as UnionTypeSemantic;
  expect(typeSemantic.$).toBe($.UnionTypeSemantic);
  expect(typeSemantic.left.$).toBe($.IdType);
  expect((typeSemantic.left as IdTypeSemantic).declaration?.name).toBe('Integer');
  expect(typeSemantic.right.$).toBe($.IdType);
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
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  const aConst = syntax.statements[3].value as DeclarationNode;
  const bConst = syntax.statements[4].value as DeclarationNode;

  const aType = typeSemanticParse(semantic, aConst.type?.value) as TypeSemantic;
  const bType = typeSemanticParse(semantic, bConst.type?.value) as TypeSemantic;
  expect(aType.$).toBe($.IdType);
  expect(bType.$).toBe($.UnionTypeSemantic);
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
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  const getConst = (name: String2) =>
    (semantic.declarationManager.single(DeclarationKind.VALUE, name, nothing, nothing) as DeclarationSemantic)
      .type as TypeSemantic;

  const aType = getConst('a');
  const bType = getConst('b');
  const cType = getConst('c');

  expect(aType.$).toBe($.UnionTypeSemantic);
  expect(bType.$).toBe($.IdType);
  expect(cType.$).toBe($.IdType);

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
