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
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
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
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).$.toNativeString()).toBe(
    $AttributeValueDeclarationSemantic.toNativeString(),
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name.toNativeString()).toBe('a');

  const constNode = syntax.statements.at(2)?.value as DeclarationNode;
  expect(constNode.id?.text.toNativeString()).toBe('a');
  expect(constNode.id?.semantic?.$.toNativeString()).toBe(
    $AttributeValueDeclarationSemantic.toNativeString(),
  );

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name.toNativeString()).toBe('a');
  // expect(constNode.type?.value.$).toBe($Node.DECLARATION);

  const typeSemantic = constNode.type?.value.semantic as FunctionTypeSemantic;
  expect(typeSemantic.$.toNativeString()).toBe($FunctionTypeSemantic.toNativeString());
  expect(typeSemantic.parameters.count()).toBe(1);
  expect(typeSemantic.parameters.at(0)?.$.toNativeString()).toBe(
    $ParameterValueDeclarationSemantic.toNativeString(),
  );
  expect((typeSemantic.parameters.at(0) as ParameterValueDeclarationSemantic).name.toNativeString()).toBe(
    'x',
  );
  expect(
    (
      typeSemantic.parameters.at(0) as ParameterValueDeclarationSemantic
    ).type.declaration?.name.toNativeString(),
  ).toBe('Integer');
  expect(typeSemantic.result.declaration?.name.toNativeString()).toBe('String');
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
//   expect(typeSemantic.parameters.length()).toBe(1);
//   expect(typeSemantic.parameters[0]?.$).toBe($AttributeValueDeclarationSemantic);
//   expect((typeSemantic.parameters[0] as AttributeValueDeclarationSemantic).name).toBe('x');
//   expect((typeSemantic.parameters[0] as AttributeValueDeclarationSemantic).type.declaration?.name).toBe(
//     'Integer',
//   );
//   expect(typeSemantic.result.declaration?.name).toBe('String');
// });
