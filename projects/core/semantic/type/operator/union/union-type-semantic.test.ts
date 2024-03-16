import {DeclarationNode} from '../../../../parser/node/syntax/declaration/declaration-node';
import {parseSyntax} from '../../../../parser/syntax';
import {sourceFromText} from '../../../../source/source';
import {DeclarationSemantic} from '../../../declaration/declaration-semantic';
import {$Semantic, parseSemantic} from '../../../semantic';
import {DeclarationTypeSemantic} from '../../declaration/declaration-type-semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {UnionTypeSemantic} from './union-type-semantic';

test('a is integer', () => {
  const text = `
    model Integer
    model Float

    const a: Integer | Float
  `;
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($Semantic.CONST_DECLARATION);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[2].declaration as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.CONST_DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as UnionTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.UNION_TYPE);
  expect(typeSemantic.left.$).toBe($Semantic.DECLARATION_TYPE);
  expect((typeSemantic.left as DeclarationTypeSemantic).declaration?.name).toBe('Integer');
  expect(typeSemantic.right.$).toBe($Semantic.DECLARATION_TYPE);
  expect((typeSemantic.right as DeclarationTypeSemantic).declaration?.name).toBe('Float');
});
