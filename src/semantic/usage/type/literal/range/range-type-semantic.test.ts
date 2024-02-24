import { DeclarationNode } from '../../../../../parser/node/syntax/declaration/declaration-node';
import { parseSyntax } from '../../../../../parser/syntax';
import { ConstantSemantic } from '../../../../declaration/constant/constant-semantic';
import { $Semantic, parseSemantic } from '../../../../semantic';
import { RangeTypeSemantic } from './range-type-semantic';

test('a is integer', () => {
  const text = `
    const a: 1..3
  `;
  const syntax = parseSyntax(text);
  const semantic = parseSemantic(syntax);

  expect(Object.keys(semantic.declarations).length).toBe(1);
  expect(semantic.declarations.a[0].$).toBe($Semantic.CONSTANT);
  expect(semantic.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[0].item as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.CONSTANT);

  const idSemantic = constNode.id?.semantic as ConstantSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type?.value?.semantic as RangeTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.RANGE_TYPE);
  expect(typeSemantic.from.value).toBe(1);
  expect(typeSemantic.to.value).toBe(3);
});
