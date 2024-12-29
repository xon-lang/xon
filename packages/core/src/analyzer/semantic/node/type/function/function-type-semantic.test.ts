import {newText, newTextResource, nothing} from '#common';
import {
  $AttributeValueDeclarationSemantic,
  $FunctionTypeSemantic,
  $ParameterValueDeclarationSemantic,
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  FunctionTypeSemantic,
  ParameterValueDeclarationSemantic,
  syntaxFromResource,
} from '#core';
import {expect, test} from 'vitest';

test('a is function', () => {
  const text = newText(`
    type Integer
    type String
    const a: (x: Integer): String
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).$).toBe(
    $AttributeValueDeclarationSemantic,
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name).toBe('a');

  const constNode = syntax.statements[2].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');
  // expect(constNode.type?.value.$).toBe($Node.DECLARATION);

  const typeSemantic = constNode.type?.value.semantic as FunctionTypeSemantic;
  expect(typeSemantic.$).toBe($FunctionTypeSemantic);
  expect(typeSemantic.parameters.length).toBe(1);
  expect(typeSemantic.parameters[0]?.$).toBe($ParameterValueDeclarationSemantic);
  expect((typeSemantic.parameters[0] as ParameterValueDeclarationSemantic).name).toBe('x');
  expect((typeSemantic.parameters[0] as ParameterValueDeclarationSemantic).type.declaration?.name).toBe(
    'Integer',
  );
  expect(typeSemantic.result.declaration?.name).toBe('String');
});

// test('with generics', () => {
//   const text = `
//     type Integer
//     type String
//     const a: <T>(x: Integer): T
//   `;
//   const source = textResourceFromData(nothing, text);
//   const syntax = syntaxFromResource(source);
//   const semantic = createSemanticAnalyzer(syntax);

//   expect(semantic.declarationManager.count()).toBe(3);
//   expect(semantic.declarationManager.declarations.get(newTextData('a'))?.at2(0).$).toBe($AttributeValueDeclarationSemantic);
//   expect(semantic.declarationManager.declarations.get(newTextData('a'))?.at2(0).name).toBe('a');

//   const constNode = syntax.statements[2].value as DeclarationNode;
//   expect(constNode.id?.text.toString()).toBe('a');
//   expect(constNode.id?.semantic?.$).toBe($AttributeValueDeclarationSemantic);

//   const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
//   expect(idSemantic.name).toBe('a');
//   // expect(constNode.type?.value.$).toBe($Node.DECLARATION);

//   const typeSemantic = constNode.type?.value.semantic as FunctionTypeSemantic;
//   expect(typeSemantic.$).toBe($FunctionTypeSemantic);
//   expect(typeSemantic.parameters.length).toBe(1);
//   expect(typeSemantic.parameters[0]?.$).toBe($AttributeValueDeclarationSemantic);
//   expect((typeSemantic.parameters[0] as AttributeValueDeclarationSemantic).name).toBe('x');
//   expect((typeSemantic.parameters[0] as AttributeValueDeclarationSemantic).type.declaration?.name).toBe(
//     'Integer',
//   );
//   expect(typeSemantic.result.declaration?.name).toBe('String');
// });
