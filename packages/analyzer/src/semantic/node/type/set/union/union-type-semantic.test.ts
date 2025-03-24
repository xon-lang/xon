import {
  $AttributeDeclarationSemantic,
  $IdTypeSemantic,
  $UnionTypeSemantic,
  $ValueDeclarationSemantic,
  AttributeDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationStatementNode,
  IdTypeSemantic,
  syntaxFromResource,
  typeNodeType,
  TypeSemantic,
  UnionTypeSemantic,
} from '#analyzer';
import {newText, newTextResource, nothing, Text} from '#common';
import {expect, test} from 'vitest';

test('a is integer or float', () => {
  const text = newText(`
    type Integer
    type Float

    const a: Integer | Float
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
    ? (typeNodeType(semantic, constNode.annotation) as UnionTypeSemantic)
    : nothing;
  expect(typeSemantic?.$).toBe($UnionTypeSemantic());
  expect(typeSemantic?.left.$).toBe($IdTypeSemantic());
  expect((typeSemantic?.left as IdTypeSemantic).declaration?.name.toNativeString()).toBe('Integer');
  expect(typeSemantic?.right.$).toBe($IdTypeSemantic());
  expect((typeSemantic?.right as IdTypeSemantic).declaration?.name.toNativeString()).toBe('Float');
});

test('1 check type', () => {
  const text = newText(`
    type Number
    type Integer: Number
    type Float

    const a: Integer
    const b: Integer | Float
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  const aConst = syntax.statements.at(3)?.value as DeclarationStatementNode;
  const bConst = syntax.statements.at(4)?.value as DeclarationStatementNode;

  const aType = aConst.annotation ? typeNodeType(semantic, aConst.annotation) : nothing;
  const bType = bConst.annotation ? typeNodeType(semantic, bConst.annotation) : nothing;
  expect(aType?.$.toNativeString()).toBe($IdTypeSemantic().toNativeString());
  expect(bType?.$.toNativeString()).toBe($UnionTypeSemantic().toNativeString());
  expect(bType && aType?.is(bType)).toBe(true);
});

test('2 check type', () => {
  const text = newText(`
    type Number
    type Integer: Number
    type Float: Number
    type String

    const a: Integer | Float
    const b: Float
    const c: String
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
    ).type as TypeSemantic;

  const aType = getConst(newText('a'));
  const bType = getConst(newText('b'));
  const cType = getConst(newText('c'));

  expect(aType.$.toNativeString()).toBe($UnionTypeSemantic().toNativeString());
  expect(bType.$.toNativeString()).toBe($IdTypeSemantic().toNativeString());
  expect(cType.$.toNativeString()).toBe($IdTypeSemantic().toNativeString());

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
