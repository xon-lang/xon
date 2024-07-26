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
import {NotTypeSemantic} from './not-type-semantic';

test('a is integer or float', () => {
  const text = `
    type Integer
    type Float

    const a: !Integer
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($.PropertyValueDeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[2].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.PropertyValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as PropertyValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as NotTypeSemantic;
  expect(typeSemantic.$).toBe($.NotTypeSemantic);
  expect(typeSemantic.value.$).toBe($.IdTypeSemantic);
  expect((typeSemantic.value as IdTypeSemantic).declaration?.name).toBe('Integer');
});

test('check type', () => {
  const text = `
    type Number
    type Integer: Number
    type Float: Number
    type String

    const a: !Float
    const b: Integer
    const c: Float
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

  expect(aType.$).toBe($.NotTypeSemantic);
  expect(bType.$).toBe($.IdTypeSemantic);
  expect(cType.$).toBe($.IdTypeSemantic);

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
