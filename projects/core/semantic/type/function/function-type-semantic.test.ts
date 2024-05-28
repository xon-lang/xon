import {nothing} from '../../../../lib/types';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {syntaxParse} from '../../../parser/syntax-parser';
import {textResourceFrom} from '../../../util/resource/text/text-resource';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic, semanticParse} from '../../semantic';
import {IdTypeSemantic} from '../id/id-type-semantic';
import {FunctionTypeSemantic} from './function-type-semantic';

test('a is integer', () => {
  const text = `
    model Integer
    const a: (x: Integer): Integer
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax);

  expect(semantic.declarationManager.count()).toBe(2);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[1].value as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');
  // expect(constNode.type?.value.$).toBe($Node.DECLARATION);

  const typeSemantic = constNode.type?.value.semantic as FunctionTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.FUNCTION_TYPE);
  expect(typeSemantic.parameters.length).toBe(1);
  expect(typeSemantic.parameters[0]?.$).toBe($Semantic.DECLARATION);
  expect((typeSemantic.parameters[0] as DeclarationSemantic).name).toBe('x');
  expect(((typeSemantic.parameters[0] as DeclarationSemantic).type as IdTypeSemantic).declaration.name).toBe(
    'Integer',
  );
});
