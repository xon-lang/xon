import {nothing} from '../../lib/core';
import {DeclarationNode} from '../../parser/node/syntax/declaration/declaration-node';
import {parseSyntax} from '../../parser/syntax';
import {textResourceFrom} from '../../util/resource/text/text-resource';
import {DeclarationSemantic} from '../declaration/declaration-semantic';
import {$Semantic, parseSemantic} from '../semantic';
import {StringTypeSemantic} from '../type/string/string-type-semantic';
import {typeSemanticParse} from '../type/type-semantic-parser';

test('import core', () => {
  const text = `
    import "xon/core"
    const a: "abc"
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.VALUE_DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[1].item as DeclarationNode;
  expect(constNode).toBeTruthy();
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.VALUE_DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as StringTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.STRING_TYPE);
  expect(typeSemantic.value).toBe('abc');
});
