import { parseSyntax } from '../../syntax';
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
