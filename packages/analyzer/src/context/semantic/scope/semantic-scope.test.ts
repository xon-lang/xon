import {newNominalTypeDeclarationSemantic, newSemanticScope} from '#analyzer';
import {newText, newTextRange, newTextReference} from '#common';
import {expect, test} from 'vitest';

test('Semantic scope', () => {
  const scope = newSemanticScope();

  scope.add(
    newNominalTypeDeclarationSemantic(newTextReference(newText(), newTextRange()), newText('Number')),
  );

  const declaration = scope.get(newText('Number'));

  expect(scope._declarations?.count()).toBe(1);
  expect(declaration?.name.toNativeString()).toBe('Number');
});
