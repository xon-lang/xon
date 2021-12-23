import { SingleBodyNode } from '../../body/single/single-body-node';
import { evalExpression } from '../../eval';
import { parseStatement } from '../../parse';
import { ExpressionStatementNode } from '../expression/expression-statement-node';
import { ParameterStatementNode } from './parameter-statement-node';

test('variable assignment', () => {
  const code = 'a: 1';
  const node = parseStatement<ParameterStatementNode>(code);
  expect(node).toBeInstanceOf(ParameterStatementNode);

  expect(
    evalExpression(
      ((node.parameter.body as SingleBodyNode).statement as ExpressionStatementNode).expression,
    ),
  ).toBe(1);
});
