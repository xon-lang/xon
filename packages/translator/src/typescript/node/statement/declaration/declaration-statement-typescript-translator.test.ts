import {
  $ReturnStatementNode,
  DeclarationStatementNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  parseReturnStatementNode,
  parseStatements,
  ReturnStatementNode,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {translateTypescriptReturnStatement, translateTypescriptTypeDeclarationStatement} from '#translator';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Nominal type statement', () => {
  const text = newText('type A');
  const node = getDeclarationStatementNode(text);
  const translated = translateTypescriptTypeDeclarationStatement(node);

  expect(translated.toNativeString()).toBe('type A = {}');
});

test('Return statement with expression', () => {
  const text = newText('return 7 17 37');
  const node = getReturnStatementNode(text);
  const translated = translateTypescriptReturnStatement(node);

  expect(translated.toNativeString()).toBe('return 7;');
});

test('Return statement without expression', () => {
  const text = newText('return');
  const node = getReturnStatementNode(text);
  const translated = translateTypescriptReturnStatement(node);

  expect(translated.toNativeString()).toBe('return;');
});

function getReturnStatementNode(text: Text): ReturnStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = parseReturnStatementNode(0, nodes) as ReturnStatementNode;

  expect(node).toBeTruthy();
  expect(is(node, $ReturnStatementNode())).toBe(true);

  return node;
}

function getDeclarationStatementNode(text: Text): DeclarationStatementNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const {statements} = parseStatements(context);
  const node = statements.first() as DeclarationStatementNode;
  // const nodes = newArrayData(nonHiddenNodeGenerator(context));
  // const node = parseDeclarationNode(0, nodes) as NominalTypeDeclarationNode;

  expect(node).toBeTruthy();

  return node;
}
