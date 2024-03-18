import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {parseSyntax} from '../../../parser/syntax';
import {sourceFromText} from '../../../source/source';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic, parseSemantic} from '../../semantic';
import {LiteralTypeSemantic} from '../../type/literal/literal-type-semantic';
import {typeSemanticParse} from '../../type/type-semantic-parser';

test('a is integer', () => {
  const text = `
    const a: 123
  `;
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.VALUE_DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[0].declaration as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.VALUE_DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as LiteralTypeSemantic;
  expect(typeSemantic?.$).toBe($Semantic.LITERAL_TYPE);
  expect(typeSemantic?.literal.value).toBe(123);
});
