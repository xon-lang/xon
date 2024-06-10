import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {DeclarationNode} from '../../../node/syntax/declaration/declaration-node';
import {syntaxParse} from '../../../syntax-parser';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic, semanticParse} from '../../semantic';
import {StringTypeSemantic} from '../../type/string/string-type-semantic';
import {typeSemanticParse} from '../../type/type-semantic-parser';

test('import core', () => {
  const text = `
    import "xon/core"
    const a: "abc"
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[1].value as DeclarationNode;
  expect(constNode).toBeTruthy();
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type?.value) as StringTypeSemantic;
  expect(typeSemantic).toBeTruthy();
  expect(typeSemantic.$).toBe($Semantic.STRING_TYPE);
  expect(typeSemantic.value).toBe('abc');
});
