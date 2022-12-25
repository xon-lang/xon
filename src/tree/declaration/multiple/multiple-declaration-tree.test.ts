import { MultipleDeclarationTree } from '~/tree/declaration/multiple/multiple-declaration-tree';
import { parseDeclaration } from '~/util/parse';

test('bracket parameter with type', () => {
  const code = 'const [a]: Integer[] = [1, 2 ,3]';
  const tree = parseDeclaration(code) as MultipleDeclarationTree;

  expect(tree).toBeInstanceOf(MultipleDeclarationTree);
  expect(tree.parameters.length).toBe(1);
});

test('bracket parameter without type', () => {
  const code = 'const [a] = [1, 2 ,3]';
  const tree = parseDeclaration(code) as MultipleDeclarationTree;

  expect(tree).toBeInstanceOf(MultipleDeclarationTree);
  expect(tree.parameters.length).toBe(1);
});

test('paren parameters', () => {
  const code = 'const (a, b, c) = [1, 2 ,3]';
  const tree = parseDeclaration(code) as MultipleDeclarationTree;

  expect(tree).toBeInstanceOf(MultipleDeclarationTree);
  expect(tree.parameters.length).toBe(3);
});

test('brace parameters', () => {
  const code = 'const {a, b, c} = import (lib.abc)';
  const tree = parseDeclaration(code) as MultipleDeclarationTree;

  expect(tree).toBeInstanceOf(MultipleDeclarationTree);
  expect(tree.parameters.length).toBe(3);
});
