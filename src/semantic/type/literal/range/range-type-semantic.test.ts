import {DeclarationNode} from '../../../../parser/node/syntax/declaration/declaration-node';
import {parseSyntax} from '../../../../parser/syntax';
import {sourceFromText} from '../../../../source/source';
import {ValueDeclarationSemantic} from '../../../declaration/value/value-declaration-semantic';
import {$Semantic, parseSemantic} from '../../../semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {RangeTypeSemantic} from './range-type-semantic';

test('a is integer', () => {
  const text = `
    const a: 1..3
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

  const idSemantic = constNode.id?.semantic as ValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as RangeTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.RANGE_TYPE);
  expect(typeSemantic.from.value).toBe(1);
  expect(typeSemantic.to.value).toBe(3);
});
