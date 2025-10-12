import {
  $AttributeDeclarationSemantic,
  $NotTypeSemantic,
  $UsageSemantic,
  $ValueDeclarationSemantic,
  AttributeDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationStatementNode,
  NotTypeSemantic,
  Semantic,
  syntaxFromResource,
  typeNodeType,
  UsageSemantic,
} from '#analyzer';
import {newText, newTextResource, nothing, Text} from '#common';
import {expect, test} from 'vitest';

test('a is integer or float', () => {
  const text = newText(`
    type Integer
    type Float

    const a: !Integer
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).$.toNativeString()).toBe(
    $AttributeDeclarationSemantic().toNativeString(),
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name.toNativeString()).toBe('a');

  const constNode = syntax.statements.at(2)?.value as DeclarationStatementNode;
  expect(constNode.id?.text.toNativeString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeDeclarationSemantic());

  const idSemantic = constNode.id?.semantic as AttributeDeclarationSemantic;
  expect(idSemantic.name.toNativeString()).toBe('a');

  const typeSemantic = constNode.annotation
    ? (typeNodeType(semantic, constNode.annotation) as NotTypeSemantic)
    : nothing;
  expect(typeSemantic?.$.toNativeString()).toBe($NotTypeSemantic().toNativeString());
  expect(typeSemantic?.value.$.toNativeString()).toBe($UsageSemantic().toNativeString());
  expect((typeSemantic?.value as UsageSemantic).declaration?.name.toNativeString()).toBe('Integer');
});

test('check type', () => {
  const text = newText(`
    type Number
    type Integer: Number
    type Float: Number
    type String

    const a: !Float
    const b: Integer
    const c: Float
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  const getConst = (name: Text) =>
    (
      semantic.declarationManager.find(
        $ValueDeclarationSemantic(),
        name,
        nothing,
        nothing,
      ) as AttributeDeclarationSemantic
    ).type as Semantic;

  const aType = getConst(newText('a'));
  const bType = getConst(newText('b'));
  const cType = getConst(newText('c'));

  expect(aType.$.toNativeString()).toBe($NotTypeSemantic().toNativeString());
  expect(bType.$.toNativeString()).toBe($UsageSemantic().toNativeString());
  expect(cType.$.toNativeString()).toBe($UsageSemantic().toNativeString());

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
