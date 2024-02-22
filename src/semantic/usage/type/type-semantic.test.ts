import { nothing } from '../../../lib/core';
import { DeclarationNode } from '../../../syntax/node/declaration/declaration-node';
import { IdNode } from '../../../syntax/node/id/id-node';
import { parseSyntax } from '../../../syntax/syntax';
import { ConstantSemantic } from '../../declaration/constant/constant-semantic';
import { $Semantic, parseSemantic } from '../../semantic';
import { TypeSemantic } from './type-semantic';

test('a is integer', () => {
  const text = `
    model Integer
    const a: Integer
  `;
  const syntax = parseSyntax(text);
  const semantic = parseSemantic(syntax);

  expect(Object.keys(semantic.declarations).length).toBe(2);
  expect(semantic.declarations.a[0].$).toBe($Semantic.CONSTANT);
  expect(semantic.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[1].item as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.CONSTANT);

  const idSemantic = constNode.id?.semantic as ConstantSemantic;
  expect(idSemantic.name).toBe('a');
  expect((constNode.type?.value as IdNode)?.text).toBe('Integer');
  expect((constNode.type?.value as IdNode)?.semantic?.$).toBe($Semantic.TYPE);

  const typeSemantic = (constNode.type?.value as IdNode)?.semantic as TypeSemantic;
  expect(typeSemantic.generics).toBe(nothing);
  expect(typeSemantic.declaration.$).toBe($Semantic.MODEL);
});
