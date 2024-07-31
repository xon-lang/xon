import {$} from '../../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFromData} from '../../../../../util/resource/text/text-resource';
import {DeclarationNode} from '../../../../syntax/node/declaration/declaration-node';
import {syntaxFromResource} from '../../../../syntax/syntax-analyzer';
import {createSemanticAnalyzer} from '../../../semantic-analyzer';
import {ParameterValueDeclarationSemantic} from '../../declaration/value/parameter/parameter-value-declaration-semantic';
import {FunctionTypeSemantic} from './function-type-semantic';

test('a is integer', () => {
  const text = `
    type Integer
    type String
    const a: (x: Integer): String
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($.ParameterValueDeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[2].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.ParameterValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as ParameterValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');
  // expect(constNode.type?.value.$).toBe($Node.DECLARATION);

  const typeSemantic = constNode.type?.value.semantic as FunctionTypeSemantic;
  expect(typeSemantic.$).toBe($.FunctionTypeSemantic);
  expect(typeSemantic.parameters.length).toBe(1);
  expect(typeSemantic.parameters[0]?.$).toBe($.ParameterValueDeclarationSemantic);
  expect((typeSemantic.parameters[0] as ParameterValueDeclarationSemantic).name).toBe('x');
  expect((typeSemantic.parameters[0] as ParameterValueDeclarationSemantic).type.declaration?.name).toBe(
    'Integer',
  );
  expect(typeSemantic.result.declaration?.name).toBe('String');
});
