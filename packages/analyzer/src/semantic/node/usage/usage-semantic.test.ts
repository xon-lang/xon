import {
  $AttributeDeclarationSemantic,
  $FunctionTypeSemantic,
  $InvokeTypeSemantic,
  $NominalTypeDeclarationSemantic,
  $UsageSemantic,
  AttributeDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationStatementNode,
  FunctionTypeSemantic,
  IdNode,
  IntegerTypeSemantic,
  InvokeTypeSemantic,
  syntaxFromResource,
  typeNodeType,
  UsageSemantic,
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('a is integer', () => {
  const text = newText(`
    type Integer
    const a: Integer
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(2);
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).$).toBe(
    $AttributeDeclarationSemantic(),
  );
  expect(semantic.declarationManager.declarations.get(newText('a'))?.at2(0).name.toNativeString()).toBe('a');

  const constNode = syntax.statements.at(1)?.value as DeclarationStatementNode;
  expect(constNode.id?.text.toNativeString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeDeclarationSemantic());

  const idSemantic = constNode.id?.semantic as AttributeDeclarationSemantic;
  expect(idSemantic.name.toNativeString()).toBe('a');
  expect((constNode.annotation?.value as IdNode)?.text.toNativeString()).toBe('Integer');
  expect((constNode.annotation?.value as IdNode)?.semantic?.$.toNativeString()).toBe(
    $UsageSemantic().toNativeString(),
  );

  const typeSemantic = (constNode.annotation?.value as IdNode)?.semantic as UsageSemantic;
  expect(typeSemantic.declaration?.$).toBe($NominalTypeDeclarationSemantic());
});

test('a is array', () => {
  const text = newText(`
    type Integer
    type Array<:T:>
    const a: Array<:3:>
  `);
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const semanticAnalyzer = createSemanticAnalyzer(syntax);

  expect(semanticAnalyzer.declarationManager.count()).toBe(3);
  expect(semanticAnalyzer.declarationManager.declarations.get(newText('a'))?.at2(0).$.toNativeString()).toBe(
    $AttributeDeclarationSemantic().toNativeString(),
  );
  expect(
    semanticAnalyzer.declarationManager.declarations.get(newText('a'))?.at2(0).name.toNativeString(),
  ).toBe('a');

  const constNode = syntax.statements.at(2)?.value as DeclarationStatementNode;
  expect(constNode.id?.text.toNativeString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($AttributeDeclarationSemantic());

  const idSemantic = constNode.id?.semantic as AttributeDeclarationSemantic;
  expect(idSemantic.name.toNativeString()).toBe('a');

  const typeSemantic = constNode.annotation
    ? (typeNodeType(semanticAnalyzer, constNode.annotation) as InvokeTypeSemantic)
    : nothing;
  expect(typeSemantic?.$.toNativeString()).toBe($InvokeTypeSemantic().toNativeString());

  const instanceType = (typeSemantic?.instance as UsageSemantic).declaration?.type as FunctionTypeSemantic;
  expect(instanceType?.$.toNativeString()).toBe($FunctionTypeSemantic().toNativeString());
  expect(instanceType?.declaration).toBeFalsy();
  expect((instanceType?.result as UsageSemantic)?.name.toNativeString()).toBe('Array');
  expect(typeSemantic?.args.count()).toBe(1);
  expect((typeSemantic?.args.at(0) as IntegerTypeSemantic).value).toBe(3);
});
