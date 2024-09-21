import {nothing, String2, textResourceFromData} from '#common';
import {
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  IdTypeSemantic,
  syntaxFromResource,
  typeNodeType,
  TypeSemantic,
  UnionTypeSemantic,
} from '#core';
import {$} from '#typing';

test('a is integer or float', () => {
  const text = `
    type Integer
    type Float

    const a: Integer | Float
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($.AttributeValueDeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[2].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as UnionTypeSemantic)
    : nothing;
  expect(typeSemantic?.$).toBe($.UnionTypeSemantic);
  expect(typeSemantic?.left.$).toBe($.IdTypeSemantic);
  expect((typeSemantic?.left as IdTypeSemantic).declaration?.name).toBe('Integer');
  expect(typeSemantic?.right.$).toBe($.IdTypeSemantic);
  expect((typeSemantic?.right as IdTypeSemantic).declaration?.name).toBe('Float');
});

test('1 check type', () => {
  const text = `
    type Number
    type Integer: Number
    type Float

    const a: Integer
    const b: Integer | Float
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  const aConst = syntax.statements[3].value as DeclarationNode;
  const bConst = syntax.statements[4].value as DeclarationNode;

  const aType = aConst.type ? typeNodeType(semantic, aConst.type) : nothing;
  const bType = bConst.type ? typeNodeType(semantic, bConst.type) : nothing;
  expect(aType?.$).toBe($.IdTypeSemantic);
  expect(bType?.$).toBe($.UnionTypeSemantic);
  expect(bType && aType?.is(bType)).toBe(true);
});

test('2 check type', () => {
  const text = `
    type Number
    type Integer: Number
    type Float: Number
    type String

    const a: Integer | Float
    const b: Float
    const c: String
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  const getConst = (name: String2) =>
    (
      semantic.declarationManager.find(
        $.ValueDeclarationSemantic,
        name,
        nothing,
        nothing,
      ) as AttributeValueDeclarationSemantic
    ).type as TypeSemantic;

  const aType = getConst('a');
  const bType = getConst('b');
  const cType = getConst('c');

  expect(aType.$).toBe($.UnionTypeSemantic);
  expect(bType.$).toBe($.IdTypeSemantic);
  expect(cType.$).toBe($.IdTypeSemantic);

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
