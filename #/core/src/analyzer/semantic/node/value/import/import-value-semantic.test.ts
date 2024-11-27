import {newTextData, nothing, textResourceFromData} from '#/common';
import {
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  StringTypeSemantic,
  syntaxFromResource,
  typeNodeType,
} from '#/core';
import {$} from '#/typing';

test('import core', () => {
  const text = newTextData(`
    import "xon/core"
    const a: "abc"
  `);
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.get(newTextData('a'))?.at2(0).$).toBe(
    $.AttributeValueDeclarationSemantic,
  );
  expect(semantic.declarationManager.declarations.get(newTextData('a'))?.at2(0).name).toBe('a');

  const constNode = syntax.statements[1].value as DeclarationNode;
  expect(constNode).toBeTruthy();
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as StringTypeSemantic)
    : nothing;
  expect(typeSemantic).toBeTruthy();
  expect(typeSemantic?.$).toBe($.StringTypeSemantic);
  expect(typeSemantic?.value).toBe('abc');
});
