import { SingleBodyTree } from '../body/single/single-body-tree';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { InfixExpressionTree } from '../expression/infix/infix-expression-tree';
import { LiteralExpressionTree } from '../expression/literal/literal-expression-tree';
import { ExpressionStatementTree } from '../statement/expression/expression-statement-tree';
import { parseDeclaration } from '../../util/parse';
import { DeclarationTree, Modifier } from './declaration-tree';

test('type and value', () => {
  const code = 'a Integer: 1';
  const tree = parseDeclaration(code);
  expect(tree).toBeInstanceOf(DeclarationTree);

  expect(tree.modifier).toBe(null);
  expect(tree.id.name.text).toBe('a');
  expect((tree.type as IdExpressionTree).id.name.text).toBe('Integer');
  expect(
    (
      ((tree.body as SingleBodyTree).statement as ExpressionStatementTree)
        .expression as LiteralExpressionTree
    ).literal.value,
  ).toBe(1);
});

test('type', () => {
  const code = 'interface Integer is Number && AnotherOne<|T|>';
  const tree = parseDeclaration(code);
  expect(tree).toBeInstanceOf(DeclarationTree);

  expect(tree.modifier).toBe(Modifier.interface);
  expect(tree.id.name.text).toBe('Integer');
  expect(tree.type).toBe(null);
  const { left, right } = tree.base as InfixExpressionTree;
  expect((left as IdExpressionTree).id.name.text).toBe('Number');
  expect((right as IdExpressionTree).id.name.text).toBe('AnotherOne');
  expect((right as IdExpressionTree).id.generics[0].id.name.text).toBe('T');
  expect(tree.body).toBe(null);
});

test('value', () => {
  const code = 'a: 1';
  const tree = parseDeclaration(code);
  expect(tree).toBeInstanceOf(DeclarationTree);

  expect(tree.modifier).toBe(null);
  expect(tree.id.name.text).toBe('a');
  expect(tree.type).toBe(null);
  expect(
    (
      ((tree.body as SingleBodyTree).statement as ExpressionStatementTree)
        .expression as LiteralExpressionTree
    ).literal.value,
  ).toBe(1);
});
