import {
  $AttributeDeclarationSemantic,
  $StringTypeSemantic,
  AttributeDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  StringTypeSemantic,
  syntaxFromResource,
  typeNodeType,
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('import core', () => {
  const text = newText(`
    import "xon/core"
    const a: "abc"
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).$).toBe(
    $AttributeDeclarationSemantic(),
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name.toNativeString()).toBe('a');

  const constNode = syntax.statements.at(1)?.value as DeclarationNode;
  expect(constNode).toBeTruthy();
  expect(constNode.id?.text.toNativeString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeDeclarationSemantic());

  const idSemantic = constNode.id?.semantic as AttributeDeclarationSemantic;
  expect(idSemantic.name.toNativeString()).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as StringTypeSemantic)
    : nothing;
  expect(typeSemantic).toBeTruthy();
  expect(typeSemantic?.$.toNativeString()).toBe($StringTypeSemantic().toNativeString());
  expect(typeSemantic?.value.toNativeString()).toBe('abc');
});
