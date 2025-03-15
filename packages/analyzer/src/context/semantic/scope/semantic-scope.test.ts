import {newNominalTypeDeclarationSemantic, newSemanticScope} from '#analyzer';
import {newText, newTextRange, newTextReference} from '#common';
import {expect, test} from 'vitest';

test('Semantic scope', () => {
  const parentScope = newSemanticScope();

  parentScope.add(
    newNominalTypeDeclarationSemantic(newTextReference(newText(), newTextRange()), newText('Number')),
  );

  const childScope = newSemanticScope(parentScope);

  const declaration = childScope.get(newText('Number'));

  expect(parentScope._declarations?.count()).toBe(1);
  expect(childScope._declarations).toBeFalsy();
  expect(declaration?.name.toNativeString()).toBe('Number');
});
