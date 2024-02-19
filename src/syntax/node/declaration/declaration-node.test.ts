import { parseSyntax } from '../../syntax';
import { IdNode } from '../id/id-node';
import { $Node } from '../node';
import { DeclarationNode } from './declaration-node';

test('model a', () => {
  const text = 'model A';
  const ast = parseSyntax(text);
  const node = ast.statements[0].item as DeclarationNode;

  expect(ast.statements.length).toBe(1);
  expect(node.$).toBe($Node.DECLARATION);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
});

test('model a extends b', () => {
  const text = 'model A: B';
  const ast = parseSyntax(text);
  const node = ast.statements[0].item as DeclarationNode;

  expect(ast.statements.length).toBe(1);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
  expect(node.type?.value?.$).toBe($Node.ID);
});

test('model a with generics extends b', () => {
  const text = 'model A{T: Array = String, U}: B';
  const ast = parseSyntax(text);
  const node = ast.statements[0].item as DeclarationNode;

  expect(ast.statements.length).toBe(1);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
  expect(node.generics?.items.length).toBe(2);
  expect(node.generics?.items[0]?.id?.text).toBe('T');
  expect((node.generics?.items[0]?.type?.value as IdNode)?.text).toBe('Array');
  expect((node.generics?.items[0]?.assign?.value as IdNode)?.text).toBe('String');
  expect(node.type?.value?.$).toBe($Node.ID);
});

// test('model a with generics and parameters extends b', () => {
//   const text = 'model A{T: String = String, U}(a: Float): B';
//   const ast = parseSyntax(text);
//   const node = ast.statements[0].item as DeclarationNode;

//   expect(ast.statements.length).toBe(1);
//   expect(node.modifier?.text).toBe('model');
//   expect(node.id?.text).toBe('A');
//   expect(node.generics?.items.length).toBe(2);
//   expect(node.type?.value?.$).toBe($Node.ID);
// });
