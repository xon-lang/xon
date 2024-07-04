import {$Node} from '../../../../../../$';
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
import {IntersectionTypeSemantic} from './intersection-type-semantic';

test('a is integer', () => {
  const text = `
    model Integer
    model Float

    const a: Integer & Float
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($Node.DeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[2].value as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Node.DeclarationSemantic);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as IntersectionTypeSemantic;
  expect(typeSemantic.$).toBe($Node.IntersectionTypeSemantic);
  expect(typeSemantic.left.$).toBe($Node.IdType);
  expect((typeSemantic.left as IdTypeSemantic).declaration?.name).toBe('Integer');
  expect(typeSemantic.right.$).toBe($Node.IdType);
  expect((typeSemantic.right as IdTypeSemantic).declaration?.name).toBe('Float');
});

test('check type', () => {
  const text = `
    model Number
    model Integer: Number
    model Float: Number
    model String

    const a: Number & Float
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

  expect(aType.$).toBe($Node.IntersectionTypeSemantic);
  expect(bType.$).toBe($Node.IdType);
  expect(cType.$).toBe($Node.IdType);

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
