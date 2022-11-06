import { evaluate } from '../../../util/evaluate';
import { parseStatement } from '../../../util/parse';
import { IdExpressionTree } from '../../expression/id/id-expression-tree';
import { ExpressionStatementTree } from '../expression/expression-statement-tree';
import { WhileStatementTree } from './while-statement-tree';

test('has boolean value', () => {
  const code = 'while true\n    12+(45/5)';
  const tree = parseStatement({ code }) as WhileStatementTree;

  expect(tree).toBeInstanceOf(WhileStatementTree);
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);
  expect((tree.expression as IdExpressionTree).name.text).toBe('true');

  const statement = tree.body.statements[0] as ExpressionStatementTree;
  expect(evaluate(statement.expression)).toBe(12 + 45 / 5);
});
