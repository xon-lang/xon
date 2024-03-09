import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {IdNode} from '../../../parser/node/token/id/id-node';
import {parseSyntax} from '../../../parser/syntax';
import {sourceFromText} from '../../../source/source';
import {ConstantSemantic} from '../../declaration/constant/constant-semantic';
import {$Semantic, parseSemantic} from '../../semantic';
import {DeclarationTypeSemantic} from './declaration-type-semantic';

test('a is integer', () => {
  const text = `
    model Integer
    const a: Integer
  `;
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(Object.keys(semantic.declarations).length).toBe(2);
  expect(semantic.declarations.a[0].$).toBe($Semantic.CONSTANT);
  expect(semantic.declarations.a[0].name).toBe('a');

  const constNode = syntax.statements[1].declaration as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.CONSTANT);

  const idSemantic = constNode.id?.semantic as ConstantSemantic;
  expect(idSemantic.name).toBe('a');
  expect((constNode.type as IdNode)?.text).toBe('Integer');
  expect((constNode.type as IdNode)?.semantic?.$).toBe($Semantic.DECLARATION_TYPE);

  const typeSemantic = (constNode.type as IdNode)?.semantic as DeclarationTypeSemantic;
  expect(typeSemantic.declaration.$).toBe($Semantic.MODEL);
});