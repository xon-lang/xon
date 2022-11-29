import { DestructureDeclarationTree } from '~/tree/declaration/destructure/destructure-declaration-tree';
import { parseDeclaration } from '~/util/parse';

test('bracket parameter with type', () => {
  const code = '[a]: Integer[] = [1, 2 ,3]';
  const tree = parseDeclaration(code) as DestructureDeclarationTree;

  expect(tree).toBeInstanceOf(DestructureDeclarationTree);
  expect(tree.parameters.length).toBe(1);
});

test('bracket parameter without type', () => {
  const code = '[a] = [1, 2 ,3]';
  const tree = parseDeclaration(code) as DestructureDeclarationTree;

  expect(tree).toBeInstanceOf(DestructureDeclarationTree);
  expect(tree.parameters.length).toBe(1);
});

test('paren parameters', () => {
  const code = '(a, b, c) = [1, 2 ,3]';
  const tree = parseDeclaration(code) as DestructureDeclarationTree;

  expect(tree).toBeInstanceOf(DestructureDeclarationTree);
  expect(tree.parameters.length).toBe(3);
});

test('brace parameters', () => {
  const code = '{a, b, c} = import lib.abc';
  const tree = parseDeclaration(code) as DestructureDeclarationTree;

  expect(tree).toBeInstanceOf(DestructureDeclarationTree);
  expect(tree.parameters.length).toBe(3);
});
