import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { MultipleBodyTree } from '../../../tree/body/multiple/multiple-body-tree';
import { SingleBodyTree } from '../../../tree/body/single/single-body-tree';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { AssignmentStatementTree } from '../../../tree/statement/assignment/assignment-statement-tree';
import { ForStatementTree } from '../../../tree/statement/for/for-statement-tree';
import { IfStatementTree } from '../../../tree/statement/if/if-statement-tree';
import { StatementTree } from '../../../tree/statement/statement-tree';
import { Translator } from '../../translator';
import { getBodyTranslator } from '../body/body-translator-helper';
import { getExpressionTranslator } from '../expression/expression-translator-helper';
import { getIdTranslator } from '../id/id-translator-helper';
import { getParameterTranslators } from '../parameter/parameter-translator-helper';

export class AttributeTranslator implements Translator {
  constructor(private tree: AttributeTree) {}

  toString(): string {
    const id = getIdTranslator(this.tree.id, true);
    let parameters =
      (this.tree.isMethod && `(${getParameterTranslators(this.tree.parameters).join(', ')})`) || '';
    const type = (this.tree.type && ': ' + getExpressionTranslator(this.tree.type, true)) || '';
    let body = '';
    if (this.tree.body) {
      body = getBodyTranslator(this.tree.body).toString();

      if (this.tree.body instanceof SingleBodyTree) {
        if (parameters) {
          body = ` {\n  return ${body}\n}`;
        } else {
          body = ` = ${body}`;
        }
      }
      if (this.tree.body instanceof MultipleBodyTree) {
        const vars = this.getVariables(this.tree.body.statements);
        const declarations = vars.length ? `  let ${vars.join(', ')}\n` : '';
        body = (body && ` {\n${declarations}${body.replace(/^(.+)/gm, '  $1')}\n}`) || ' {}';
      }
    } else if (this.tree.isMethod) {
      body = ` {\n  throw new Error('Not implemented')\n}`;
    }

    return `${id}${parameters}${type}${body}`;
  }

  // todo remove and fix with using metadata
  getVariables(statements: StatementTree[], vars: string[] = []): string[] {
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
        vars.push(statement.variable.id.name.text);
      }

      if (statement instanceof IfStatementTree) {
        this.getVariables(getIfStatements(statement), vars);
      }

      if (statement instanceof ForStatementTree) {
        this.getVariables(getForStatements(statement), vars);
      }
    }
    return [...new Set(vars)];
  }
}
