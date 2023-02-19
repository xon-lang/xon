import { KeywordStatementTree } from '~/tree/statement/keyword/keyword-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseStatement } from '~/util/parse';

test('only expression', () => {
  const code = 'if -1';
  const tree = parseStatement(code) as KeywordStatementTree;

  expect(tree).toBeInstanceOf(KeywordStatementTree);
  expect(evaluate(tree.expression)).toBe(-1);
});

test('if statement', () => {
  const code = `if b is c
  return #{new SingleBodyTree(ctx)}`;
  const tree = parseStatement(code) as KeywordStatementTree;

  expect(tree).toBeInstanceOf(KeywordStatementTree);
});
