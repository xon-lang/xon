import { KeywordStatementTree } from '~/tree/statement/common/keyword-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseStatement } from '~/util/parse';

test('only expression', () => {
  const code = 'if -1';
  const tree = parseStatement(code) as KeywordStatementTree;

  expect(tree).toBeInstanceOf(KeywordStatementTree);
  expect(evaluate(tree.expression)).toBe(-1);
});
