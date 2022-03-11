import { evaluate } from '../../../util/evaluate';
import { parseStatement } from '../../../util/parse';
import { MultipleBodyTree } from '../../body/multiple/multiple-body-tree';
import { IdExpressionTree } from '../../expression/id/id-expression-tree';
import { ExpressionStatementTree } from '../expression/expression-statement-tree';
import { WhileStatementTree } from './while-statement-tree';

test('has boolean value', () => {
  const code = 'while true\n    12+(45/5)';
  const tree = parseStatement(code) as WhileStatementTree;
  expect(tree).toBeInstanceOf(WhileStatementTree);

  expect(tree.expression).toBeInstanceOf(IdExpressionTree);
  expect((tree.expression as IdExpressionTree).id.text).toBe('true');

  const statement = (tree.body as MultipleBodyTree).statements[0] as ExpressionStatementTree;
  expect(evaluate(statement.expression)).toBe(12 + 45 / 5);
});
