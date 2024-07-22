import {$} from '../../../../../../$';
import {String2, nothing} from '../../../../../../../lib/types';
import {textResourceFromData} from '../../../../../../util/resource/text/text-resource';
import {DeclarationNode} from '../../../../../syntax/node/declaration/declaration-node';
import {syntaxFromResource} from '../../../../../syntax/syntax-analyzer';
import {createSemanticAnalyzer} from '../../../../semantic-analyzer';
import {PropertyValueDeclarationSemantic} from '../../../declaration/value/property/property-value-declaration-semantic';
import {IdTypeSemantic} from '../../id/id-type-semantic';
import {TypeSemantic} from '../../type-semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {UnionTypeSemantic} from './union-type-semantic';

test('a is integer or float', () => {
  const text = `
    type Integer
    type Float

    const a: Integer | Float
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($.PropertyValueDeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[2].value as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.PropertyValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as PropertyValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as UnionTypeSemantic;
  expect(typeSemantic.$).toBe($.UnionTypeSemantic);
  expect(typeSemantic.left.$).toBe($.IdTypeSemantic);
  expect((typeSemantic.left as IdTypeSemantic).declaration?.name).toBe('Integer');
  expect(typeSemantic.right.$).toBe($.IdTypeSemantic);
  expect((typeSemantic.right as IdTypeSemantic).declaration?.name).toBe('Float');
});

test('1 check type', () => {
  const text = `
    type Number
    type Integer: Number
    type Float

    const a: Integer
    const b: Integer | Float
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  const aConst = syntax.statements[3].value as DeclarationNode;
  const bConst = syntax.statements[4].value as DeclarationNode;

  const aType = typeSemanticParse(semantic, aConst.type?.value) as TypeSemantic;
  const bType = typeSemanticParse(semantic, bConst.type?.value) as TypeSemantic;
  expect(aType.$).toBe($.IdTypeSemantic);
  expect(bType.$).toBe($.UnionTypeSemantic);
  expect(aType.is(bType)).toBe(true);
});

test('2 check type', () => {
  const text = `
    type Number
    type Integer: Number
    type Float: Number
    type String

    const a: Integer | Float
    const b: Float
    const c: String
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  const getConst = (name: String2) =>
    (
      semantic.declarationManager.single(
        $.ValueDeclarationSemantic,
        name,
        nothing,
        nothing,
      ) as PropertyValueDeclarationSemantic
    ).type as TypeSemantic;

  const aType = getConst('a');
  const bType = getConst('b');
  const cType = getConst('c');

  expect(aType.$).toBe($.UnionTypeSemantic);
  expect(bType.$).toBe($.IdTypeSemantic);
  expect(cType.$).toBe($.IdTypeSemantic);

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
