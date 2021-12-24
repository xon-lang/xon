import { SingleBodyNode } from '../body/single/single-body-node';
import { IdExpressionNode } from '../expression/id/id-expression-node';
import { LiteralExpressionNode } from '../expression/literal/literal-expression-node';
import { ExpressionStatementNode } from '../statement/expression/expression-statement-node';
import { parseDeclaration } from '../util/parse';
import { DeclarationNode, Modifier } from './declaration-node';

test('type and value', () => {
  const code = 'a Integer: 1';
  const node = parseDeclaration(code);
  expect(node).toBeInstanceOf(DeclarationNode);

  expect(node.modifier).toBe(null);
  expect(node.id.name.text).toBe('a');
  expect((node.type as IdExpressionNode).id.name.text).toBe('Integer');
  expect(
    (
      ((node.body as SingleBodyNode).statement as ExpressionStatementNode)
        .expression as LiteralExpressionNode
    ).literal.value,
  ).toBe(1);
});

test('type', () => {
  const code = 'interface Integer is Number, AnotherOne<|T|>';
  const node = parseDeclaration(code);
  expect(node).toBeInstanceOf(DeclarationNode);

  expect(node.modifier).toBe(Modifier.interface);
  expect(node.id.name.text).toBe('Integer');
  expect(node.type).toBe(null);
  expect(node.ancestors.length).toBe(2);
  expect((node.ancestors[0] as IdExpressionNode).id.name.text).toBe('Number');
  expect((node.ancestors[1] as IdExpressionNode).id.name.text).toBe('AnotherOne');
  expect(
    ((node.ancestors[1] as IdExpressionNode).id.generics[0] as IdExpressionNode).id.name.text,
  ).toBe('T');
  expect(node.body).toBe(null);
});

test('value', () => {
  const code = 'a: 1';
  const node = parseDeclaration(code);
  expect(node).toBeInstanceOf(DeclarationNode);

  expect(node.modifier).toBe(null);
  expect(node.id.name.text).toBe('a');
  expect(node.type).toBe(null);
  expect(
    (
      ((node.body as SingleBodyNode).statement as ExpressionStatementNode)
        .expression as LiteralExpressionNode
    ).literal.value,
  ).toBe(1);
});