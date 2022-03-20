import { parseStatement } from '../../../util/parse';
import { ParameterStatementTree } from './parameter-statement-tree';

test('variable assignment colon', () => {
  const code = 'a : 1';
  const tree = parseStatement(code) as ParameterStatementTree;

  expect(tree).toBeInstanceOf(ParameterStatementTree);
  expect(tree.parameter.toString()).toBe('a: 1');
});

test('variable assignment equals', () => {
  const code = 'a  =  1';
  const tree = parseStatement(code) as ParameterStatementTree;

  expect(tree).toBeInstanceOf(ParameterStatementTree);
  expect(tree.parameter.toString()).toBe('a = 1');
});
