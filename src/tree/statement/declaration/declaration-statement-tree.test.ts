import { none } from '../../../lib/core';
import { parseStatement } from '../../../util/parse';
import { LiteralExpressionTree } from '../../expression/literal/literal-expression-tree';
import { ParameterTree } from '../../parameter/parameter-tree';
import { DeclarationStatementTree } from './declaration-statement-tree';

test('variable assignment colon', () => {
  const code = 'a : 1';
  const tree = parseStatement(code) as DeclarationStatementTree;

  expect(tree).toBeInstanceOf(DeclarationStatementTree);
  const parameter = tree.declaration as ParameterTree;
  expect(parameter).toBeInstanceOf(ParameterTree);
  expect(parameter.name.text).toBe('a');
  expect(parameter.type).toBeInstanceOf(LiteralExpressionTree);
  expect((parameter.type as LiteralExpressionTree).literal.value).toBe(1);
  expect(parameter.value).toBe(none);
  expect(parameter.body).toBe(none);
});

test('variable assignment equals', () => {
  const code = 'a  =  1';
  const tree = parseStatement(code) as DeclarationStatementTree;

  expect(tree).toBeInstanceOf(DeclarationStatementTree);
  const parameter = tree.declaration as ParameterTree;
  expect(parameter).toBeInstanceOf(ParameterTree);
  expect(parameter.name.text).toBe('a');
  expect(parameter.type).toBe(none);
  expect(parameter.value).toBeInstanceOf(LiteralExpressionTree);
  expect((parameter.value as LiteralExpressionTree).literal.value).toBe(1);
  expect(parameter.body).toBe(none);
});
