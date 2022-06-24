import { none } from '../../../lib/core';
import { parseStatement } from '../../../util/parse';
import { LiteralExpressionTree } from '../../expression/literal/literal-expression-tree';
import { ParameterStatementTree } from './parameter-statement-tree';

test('variable assignment colon', () => {
  const code = 'a : 1';
  const tree = parseStatement(code) as ParameterStatementTree;

  expect(tree).toBeInstanceOf(ParameterStatementTree);
  expect(tree.parameter.name.text).toBe('a');
  expect(tree.parameter.type).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.parameter.type as LiteralExpressionTree).literal.value).toBe(1);
  expect(tree.parameter.body).toBe(none);
});

test('variable assignment equals', () => {
  const code = 'a  =  1';
  const tree = parseStatement(code) as ParameterStatementTree;

  expect(tree).toBeInstanceOf(ParameterStatementTree);
  expect(tree.parameter.name.text).toBe('a');
  expect(tree.parameter.type).toBe(none);
  expect(tree.parameter.body).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.parameter.body as LiteralExpressionTree).literal.value).toBe(1);
});
