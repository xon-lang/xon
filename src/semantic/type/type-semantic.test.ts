import { nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { IdNode } from '../../syntax/node/id/id-node';
import { parseSyntax } from '../../syntax/syntax';
import { ConstantSemantic } from '../declaration/constant/constant-semantic';
import { ModelSemantic } from '../declaration/model/model-semantic';
import { $Semantic, parseSemantic } from '../semantic';
import { UsageSemantic } from '../usage/usage-semantic';

test('a is integer', () => {
  const text = `
model Number
model Integer: Number
const a: Integer = 1
`;
  const syntax = parseSyntax(text);
  const semantic = parseSemantic(syntax);

  const constNode = syntax.statements[2].item as DeclarationNode;

  expect(Object.keys(semantic.declarations).length).toBe(3);
  expect(semantic.declarations.a[0].$).toBe($Semantic.CONSTANT);
  expect(semantic.declarations.a[0].name).toBe('a');

  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.CONSTANT);

  const idSemantic = constNode.id?.semantic as ConstantSemantic;
  expect(idSemantic.name).toBe('a');

  expect((constNode.type?.value as IdNode)?.text).toBe('Integer');
  expect((constNode.type?.value as IdNode)?.semantic?.$).toBe($Semantic.USAGE);

  const typeSemantic = (constNode.type?.value as IdNode)?.semantic as UsageSemantic;
  expect(typeSemantic.generics).toBe(nothing);
  expect(typeSemantic.arguments).toBe(nothing);
  expect(typeSemantic.declaration.$).toBe($Semantic.MODEL);

  const integerDeclaration = typeSemantic.declaration as ModelSemantic;
  expect(integerDeclaration.name).toBe('Integer');
  expect(integerDeclaration.base?.declaration.name).toBe('Number');

  const assignSemantic = (constNode.assign?.value as IdNode)?.semantic as UsageSemantic;
  expect(assignSemantic.generics).toBe(nothing);
  expect(assignSemantic.arguments).toBe(nothing);
  expect(assignSemantic.declaration.$).toBe($Semantic.MODEL);

  // const integerDeclaration = typeSemantic.declaration as ModelSemantic
  // expect(integerDeclaration.name).toBe('Integer');
  // expect(integerDeclaration.base?.declaration.name).toBe('Number');
});
