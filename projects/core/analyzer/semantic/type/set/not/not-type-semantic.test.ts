import {String2, nothing} from '../../../../../../lib/types';
import {textResourceFrom} from '../../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../../syntax-analyzer';
import {DeclarationNode} from '../../../../syntax/node/declaration/declaration-node';
import {DeclarationKind} from '../../../declaration-manager';
import {DeclarationSemantic} from '../../../declaration/declaration-semantic';
import {$Semantic, semanticParse} from '../../../node/semantic-node';
import {IdTypeSemantic} from '../../id/id-type-semantic';
import {TypeSemantic} from '../../type-semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {NotTypeSemantic} from './not-type-semantic';

test('a is integer or float', () => {
  const text = `
    model Integer
    model Float

    const a: !Integer
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

  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as NotTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.NOT_TYPE);
  expect(typeSemantic.value.$).toBe($Semantic.ID_TYPE);
  expect((typeSemantic.value as IdTypeSemantic).declaration?.name).toBe('Integer');
});

test('check type', () => {
  const text = `
    model Number
    model Integer: Number
    model Float: Number
    model String

    const a: !Float
    const b: Integer
    const c: Float
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

  expect(aType.$).toBe($Semantic.NOT_TYPE);
  expect(bType.$).toBe($Semantic.ID_TYPE);
  expect(cType.$).toBe($Semantic.ID_TYPE);

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
