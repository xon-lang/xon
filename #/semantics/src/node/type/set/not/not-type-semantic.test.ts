import {newTextData, newTextResource, nothing, TextData} from '#common';
import {
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  IdTypeSemantic,
  NotTypeSemantic,
  syntaxFromResource,
  typeNodeType,
  TypeSemantic,
} from '#semantics';
import {$} from '#typing';

test('a is integer or float', () => {
  const text = newTextData(`
    type Integer
    type Float

    const a: !Integer
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations.get(newTextData('a'))?.at2(0).$).toBe(
    $.AttributeValueDeclarationSemantic,
  );
  expect(semantic.declarationManager.declarations.get(newTextData('a'))?.at2(0).name).toBe('a');

  const constNode = syntax.statements[2].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type ? (typeNodeType(semantic, constNode.type) as NotTypeSemantic) : nothing;
  expect(typeSemantic?.$).toBe($.NotTypeSemantic);
  expect(typeSemantic?.value.$).toBe($.IdTypeSemantic);
  expect((typeSemantic?.value as IdTypeSemantic).declaration?.name).toBe('Integer');
});

test('check type', () => {
  const text = newTextData(`
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

  const getConst = (name: TextData) =>
    (
      semantic.declarationManager.find(
        $.ValueDeclarationSemantic,
        name,
        nothing,
        nothing,
      ) as AttributeValueDeclarationSemantic
    ).type as TypeSemantic;

  const aType = getConst(newTextData('a'));
  const bType = getConst(newTextData('b'));
  const cType = getConst(newTextData('c'));

  expect(aType.$).toBe($.NotTypeSemantic);
  expect(bType.$).toBe($.IdTypeSemantic);
  expect(cType.$).toBe($.IdTypeSemantic);

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
