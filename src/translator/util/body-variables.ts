import { MultipleBodyTree } from '../../tree/body/multiple/multiple-body-tree';
import { IdExpressionTree } from '../../tree/expression/id/id-expression-tree';
import { AssignmentStatementTree } from '../../tree/statement/assignment/assignment-statement-tree';
import { ForStatementTree } from '../../tree/statement/for/for-statement-tree';
import { IfStatementTree } from '../../tree/statement/if/if-statement-tree';
import { StatementTree } from '../../tree/statement/statement-tree';

// todo remove and fix with using metadata
export const getVariables = (statements: StatementTree[], vars: String[] = []): String[] => {
  const getIfStatements = (statement: IfStatementTree) => {
    const statements = [];
    if (statement.thenBody instanceof MultipleBodyTree) {
      statements.push(...statement.thenBody.statements);
    }
    if (statement.elseBody && statement.elseBody instanceof MultipleBodyTree) {
      statements.push(...statement.elseBody.statements);
    }
    return statements;
  };

  const getForStatements = (statement: ForStatementTree) => {
    if (statement.body instanceof MultipleBodyTree) {
      return statement.body.statements;
    }
    return [];
  };

  for (const statement of statements) {
    if (
      statement instanceof AssignmentStatementTree &&
      statement.variable instanceof IdExpressionTree
    ) {
      vars.push(statement.variable.name.text);
    }

    if (statement instanceof IfStatementTree) {
      getVariables(getIfStatements(statement), vars);
    }

    if (statement instanceof ForStatementTree) {
      getVariables(getForStatements(statement), vars);
    }
  }
  return [...new Set(vars)];
};
