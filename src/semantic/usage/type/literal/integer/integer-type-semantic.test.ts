import {DeclarationNode} from '../../../../../parser/node/syntax/declaration/declaration-node';
import {parseSyntax} from '../../../../../parser/syntax';
import {sourceFromText} from '../../../../../source/source';
import {ConstantSemantic} from '../../../../declaration/constant/constant-semantic';
import {$Semantic, parseSemantic} from '../../../../semantic';
import {IntegerTypeSemantic} from './integer-type-semantic';

test('a is integer', () => {
  const text = `
    const a: 123
  `;
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(Object.keys(semantic.declarations).length).toBe(1);
  expect(semantic.declarations.a[0].$).toBe($Semantic.CONSTANT);
  expect(semantic.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[0].item as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.CONSTANT);

  const idSemantic = constNode.id?.semantic as ConstantSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type?.value?.semantic as IntegerTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.INTEGER_TYPE);
});
