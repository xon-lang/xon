import {$} from '../../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFromData} from '../../../../../util/resource/text/text-resource';
import {DeclarationNode} from '../../../../syntax/node/declaration/declaration-node';
import {syntaxFromResource} from '../../../../syntax/syntax-analyzer';
import {createSemanticAnalyzer} from '../../../semantic-analyzer';
import {ParameterValueDeclarationSemantic} from '../../declaration/value/parameter/parameter-value-declaration-semantic';
import {StringTypeSemantic} from '../../type/string/string-type-semantic';
import {typeNodeType} from '../../type/type-semantic-parser';

test('import core', () => {
  const text = `
    import "xon/core"
    const a: "abc"
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($.ParameterValueDeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[1].value as DeclarationNode;
  expect(constNode).toBeTruthy();
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.ParameterValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as ParameterValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as StringTypeSemantic)
    : nothing;
  expect(typeSemantic).toBeTruthy();
  expect(typeSemantic?.$).toBe($.StringTypeSemantic);
  expect(typeSemantic?.value).toBe('abc');
});
