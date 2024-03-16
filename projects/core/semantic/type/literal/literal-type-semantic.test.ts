import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {IdNode} from '../../../parser/node/token/id/id-node';
import {parseSyntax} from '../../../parser/syntax';
import {sourceFromText} from '../../../source/source';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic, parseSemantic} from '../../semantic';
import {DeclarationTypeSemantic} from '../declaration/declaration-type-semantic';

test('a is integer', () => {
  const text = `
    model Integer
    const a: Integer
  `;
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(2);
  expect(semantic.declarationManager.declarations.a[0].$).toBe($Semantic.CONST_DECLARATION);
  expect(semantic.declarationManager.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[1].declaration as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.CONST_DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');
  expect((constNode.type as IdNode)?.text).toBe('Integer');
  expect((constNode.type as IdNode)?.semantic?.$).toBe($Semantic.DECLARATION_TYPE);

  const typeSemantic = (constNode.type as IdNode)?.semantic as DeclarationTypeSemantic;
  expect(typeSemantic.declaration?.$).toBe($Semantic.TYPE_DECLARATION);
});
