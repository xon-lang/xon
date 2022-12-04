import { ParameterDeclarationTree } from '~/tree/declaration/parameter/parameter-declaration-tree';
import { LiteralExpressionTree } from '~/tree/expression/literal/literal-expression-tree';
import { DeclarationStatementTree } from '~/tree/statement/declaration/declaration-statement-tree';
import { parseStatement } from '~/util/parse';

test('variable assignment colon', () => {
  const code = 'a : 1';
  const tree = parseStatement(code) as DeclarationStatementTree;

  expect(tree).toBeInstanceOf(DeclarationStatementTree);
  const parameter = tree.declaration as ParameterDeclarationTree;
  expect(parameter).toBeInstanceOf(ParameterDeclarationTree);
  expect(parameter.name?.text).toBe('a');
  expect(parameter.type).toBeInstanceOf(LiteralExpressionTree);
  expect((parameter.type as LiteralExpressionTree).literal.value).toBe(1);
  expect(parameter.value).toBe(null);
});

test('variable assignment equals', () => {
  const code = 'a  =  1';
  const tree = parseStatement(code) as DeclarationStatementTree;

  expect(tree).toBeInstanceOf(DeclarationStatementTree);
  const parameter = tree.declaration as ParameterDeclarationTree;
  expect(parameter).toBeInstanceOf(ParameterDeclarationTree);
  expect(parameter.name?.text).toBe('a');
  expect(parameter.type).toBe(null);
  expect(parameter.value).toBeInstanceOf(LiteralExpressionTree);
  expect((parameter.value as LiteralExpressionTree).literal.value).toBe(1);
});
