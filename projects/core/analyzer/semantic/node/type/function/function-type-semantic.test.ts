import {$} from '../../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFromData} from '../../../../../util/resource/text/text-resource';
import {DeclarationNode} from '../../../../syntax/node/declaration/declaration-node';
import {syntaxFromResource} from '../../../../syntax/syntax-analyzer';
import {createSemanticAnalyzer} from '../../../semantic-analyzer';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {IdTypeSemantic} from '../id/id-type-semantic';
import {FunctionTypeSemantic} from './function-type-semantic';

test('a is integer', () => {
  const text = `
    model Integer
    const a: (x: Integer): Integer
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($.DeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[1].value as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.DeclarationSemantic);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');
  // expect(constNode.type?.value.$).toBe($Node.DECLARATION);

  const typeSemantic = constNode.type?.value.semantic as FunctionTypeSemantic;
  expect(typeSemantic.$).toBe($.FunctionTypeSemantic);
  expect(typeSemantic.parameters.length).toBe(1);
  expect(typeSemantic.parameters[0]?.$).toBe($.DeclarationSemantic);
  expect((typeSemantic.parameters[0] as DeclarationSemantic).name).toBe('x');
  expect(((typeSemantic.parameters[0] as DeclarationSemantic).type as IdTypeSemantic).declaration.name).toBe(
    'Integer',
  );
});
