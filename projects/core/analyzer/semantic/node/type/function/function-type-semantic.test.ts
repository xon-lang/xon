import {$} from '../../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFromData} from '../../../../../util/resource/text/text-resource';
import {DeclarationNode} from '../../../../syntax/node/declaration/declaration-node';
import {syntaxFromResource} from '../../../../syntax/syntax-analyzer';
import {createSemanticAnalyzer} from '../../../semantic-analyzer';
import {PropertyValueDeclarationSemantic} from '../../declaration/value/property/property-value-declaration-semantic';
import {IdTypeSemantic} from '../id/id-type-semantic';
import {FunctionTypeSemantic} from './function-type-semantic';

test('a is integer', () => {
  const text = `
    type Integer
    const a: (x: Integer): Integer
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($.PropertyValueDeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[1].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.PropertyValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as PropertyValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');
  // expect(constNode.type?.value.$).toBe($Node.DECLARATION);

  const typeSemantic = constNode.type?.value.semantic as FunctionTypeSemantic;
  expect(typeSemantic.$).toBe($.FunctionTypeSemantic);
  expect(typeSemantic.parameters.length).toBe(1);
  expect(typeSemantic.parameters[0]?.$).toBe($.PropertyValueDeclarationSemantic);
  expect((typeSemantic.parameters[0] as PropertyValueDeclarationSemantic).name).toBe('x');
  expect(
    ((typeSemantic.parameters[0] as PropertyValueDeclarationSemantic).type as IdTypeSemantic).declaration
      ?.name,
  ).toBe('Integer');
});
