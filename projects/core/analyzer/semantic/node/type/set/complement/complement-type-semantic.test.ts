import {String2, nothing} from '../../../../../../../lib/types';
import {textResourceFrom} from '../../../../../../util/resource/text/text-resource';
import {DeclarationNode} from '../../../../../syntax/node/declaration/declaration-node';
import {syntaxParse} from '../../../../../syntax/syntax-analyzer';
import {DeclarationKind} from '../../../../declaration-manager';
import {semanticParse} from '../../../../semantic-analyzer';
import {DeclarationSemantic} from '../../../declaration/declaration-semantic';
import {$Semantic} from '../../../semantic-node';
import {IdTypeSemantic} from '../../id/id-type-semantic';
import {TypeSemantic} from '../../type-semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {ComplementTypeSemantic} from './complement-type-semantic';

test('a is integer or float', () => {
  const text = `
    model Integer
    model Float

    const a: Integer \\ Float
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

  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as ComplementTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.COMPLEMENT_TYPE);
  expect(typeSemantic.left.$).toBe($Semantic.ID_TYPE);
  expect((typeSemantic.left as IdTypeSemantic).declaration?.name).toBe('Integer');
  expect(typeSemantic.right.$).toBe($Semantic.ID_TYPE);
  expect((typeSemantic.right as IdTypeSemantic).declaration?.name).toBe('Float');
});

test('check type', () => {
  const text = `
    model Number
    model Integer: Number
    model Float: Number
    model String

    const a: Number \\ Float
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

  expect(aType.$).toBe($Semantic.COMPLEMENT_TYPE);
  expect(bType.$).toBe($Semantic.ID_TYPE);
  expect(cType.$).toBe($Semantic.ID_TYPE);

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
