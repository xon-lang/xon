import {newNominalTypeDeclarationSemantic, newSemanticScope} from '#analyzer';
import {newText, newTextRange, newTextReference, newUri, nothing} from '#common';
import {expect, test} from 'vitest';

test('Semantic scope', () => {
  const parentScope = newSemanticScope();

  parentScope.add(
    newNominalTypeDeclarationSemantic(newTextReference(newUri(newText()), newTextRange()), newText('Number')),
  );

  const childScope = newSemanticScope(nothing, parentScope);

  const declaration = childScope.get(newText('Number'))?.first();

  expect(parentScope._declarations?.count()).toBe(1);
  expect(childScope._declarations).toBeFalsy();
  expect(declaration?.name.toNativeString()).toBe('Number');
});
