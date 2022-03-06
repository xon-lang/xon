import { AssignmentStatementTree } from '../../../../tree/statement/assignment/assignment-statement-tree';
import { getExpressionTranslator } from '../../expression/expression-translator-helper';
import { IdExpressionTranslator } from '../../expression/id/id-expression-translator';
import { StatementTranslator } from '../statement-translator';

export class AssignmentStatementTranslator implements StatementTranslator {
  constructor(private tree: AssignmentStatementTree) {}

  toString(): string {
    const variable = getExpressionTranslator(this.tree.variable, false);
    const value = getExpressionTranslator(this.tree.value, false);
    // if (variable instanceof IdExpressionTranslator) {
    //   return `const ${variable} = ${value}`;
    // }
    return `${variable} = ${value}`;
  }
}
