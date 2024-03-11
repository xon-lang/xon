import {parseSyntax} from '../../../parser/syntax';
import {sourceFromText} from '../../../source/source';
import {$Semantic, parseSemantic} from '../../semantic';
import {DeclarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {TypeDeclarationSemantic} from '../type/type-declaration-semantic';
import {ValueDeclarationSemantic} from './value-declaration-semantic';

test('only a', () => {
  const text = 'model A\n  p: A';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const semantic = parseSemantic(syntax);
  const model = semantic.declarationManager.declarations.A[0] as TypeDeclarationSemantic;

  expect(semantic.declarationManager.count()).toBe(1);
  expect(model.$).toBe($Semantic.TYPE_DECLARATION);
  expect(model.name).toBe('A');

  expect(Object.keys(model.attributes).length).toBe(1);

  const pAttribute = model.attributes['p'][0] as ValueDeclarationSemantic;
  expect(pAttribute.$).toBe($Semantic.VALUE_DECLARATION);
  expect(pAttribute.name).toBe('p');
  expect(pAttribute.generics).toBeFalsy();
  expect(pAttribute.parameters).toBeFalsy();
  expect((pAttribute.type as DeclarationTypeSemantic).declaration.name).toBe('A');
});
