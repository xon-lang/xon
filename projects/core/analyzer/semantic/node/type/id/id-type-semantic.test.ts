import {$} from '../../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFromData} from '../../../../../util/resource/text/text-resource';
import {IdNode} from '../../../../lexical/node/id/id-node';
import {DeclarationNode} from '../../../../syntax/node/declaration/declaration-node';
import {syntaxFromResource} from '../../../../syntax/syntax-analyzer';
import {createSemanticAnalyzer} from '../../../semantic-analyzer';
import {ParameterValueDeclarationSemantic} from '../../declaration/value/parameter/parameter-value-declaration-semantic';
import {IntegerTypeSemantic} from '../integer/integer-type-semantic';
import {typeNodeType} from '../type-semantic-parser';
import {IdTypeSemantic} from './id-type-semantic';

test('a is integer', () => {
  const text = `
    type Integer
    const a: Integer
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($.ParameterValueDeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[1].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.ParameterValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as ParameterValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');
  expect((constNode.type?.value as IdNode)?.text.toString()).toBe('Integer');
  expect((constNode.type?.value as IdNode)?.semantic?.$).toBe($.IdTypeSemantic);

  const typeSemantic = (constNode.type?.value as IdNode)?.semantic as IdTypeSemantic;
  expect(typeSemantic.declaration?.$).toBe($.NominalTypeDeclarationSemantic);
});

test('a is array', () => {
  const text = `
    type Integer
    type Array{T}
    const a: Array{3}
  `;
  const resource = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(resource);
  const semanticAnalyzer = createSemanticAnalyzer(syntax);

  expect(semanticAnalyzer.declarationManager.count()).toBe(3);
  expect(semanticAnalyzer.declarationManager.declarations['a'][0].$).toBe(
    $.ParameterValueDeclarationSemantic,
  );
  expect(semanticAnalyzer.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[2].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.ParameterValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as ParameterValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semanticAnalyzer, constNode.type) as IdTypeSemantic)
    : nothing;
  expect(typeSemantic?.$).toBe($.IdTypeSemantic);
  expect(typeSemantic?.declaration?.$).toBe($.NominalTypeDeclarationSemantic);
  expect(typeSemantic?.declaration?.name).toBe('Array');
  expect(typeSemantic?.generics?.length).toBe(1);
  expect((typeSemantic?.generics?.at(0) as IntegerTypeSemantic).value).toBe(3);
});
