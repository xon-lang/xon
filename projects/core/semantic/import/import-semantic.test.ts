import {DeclarationNode} from '../../parser/node/declaration/declaration-node';
import {parseSyntax} from '../../parser/syntax';
import {sourceFromText} from '../../source/source';
import {DeclarationSemantic} from '../declaration/declaration-semantic';
import {StringLiteralSemantic} from '../literal/string/string-literal-semantic';
import {$Semantic, parseSemantic} from '../semantic';
import {TEST_SEMANTIC_CONFIG} from '../semantic-config';
import {LiteralTypeSemantic} from '../type/literal/literal-type-semantic';
import {typeSemanticParse} from '../type/type-semantic-parser';

test('import core', () => {
  const text = `
    import "xon/core"
    const a: "abc"
  `;
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.VALUE_DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[1].declaration as DeclarationNode;
  expect(constNode).toBeTruthy();
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.VALUE_DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as LiteralTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.LITERAL_TYPE);
  expect((typeSemantic.literal as StringLiteralSemantic).value).toBe('abc');
});
