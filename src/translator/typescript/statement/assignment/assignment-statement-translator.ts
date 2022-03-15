import { String } from '../../../../lib/core';
import { SingleBodyTree } from '../../../../tree/body/single/single-body-tree';
import { AssignmentStatementTree } from '../../../../tree/statement/assignment/assignment-statement-tree';
import { ExpressionStatementTree } from '../../../../tree/statement/expression/expression-statement-tree';
import { getBodyTranslator } from '../../body/body-translator-helper';
import { getExpressionTranslator } from '../../expression/expression-translator-helper';
import { StatementTranslator } from '../statement-translator';

export class AssignmentStatementTranslator implements StatementTranslator {
  constructor(private tree: AssignmentStatementTree) {}

  toString(): String {
    const variable = getExpressionTranslator(this.tree.variable, false);
    const body = getBodyTranslator(this.tree.body);
    // if (variable instanceof IdExpressionTranslator) {
    //   return `const ${variable} = ${value}`;
    // }

    if (body instanceof SingleBodyTree) {
      if (body.statement instanceof ExpressionStatementTree) {
        return `${variable} = ${body}`;
      }

      throw new Error('Not Implemented');
    }

    return `${variable} = ${body}`;
  }
}

// a = if a: 1 else: 2
// if() {}
