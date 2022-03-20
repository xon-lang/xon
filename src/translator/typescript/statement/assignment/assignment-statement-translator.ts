import { String } from '../../../../lib/core';
import { AssignmentStatementTree } from '../../../../tree/statement/assignment/assignment-statement-tree';
import { getParameterTranslator } from '../../parameter/parameter-translator-helper';
import { StatementTranslator } from '../statement-translator';

export class AssignmentStatementTranslator implements StatementTranslator {
  constructor(private tree: AssignmentStatementTree) {}

  toString(): String {
    const parameter = getParameterTranslator(this.tree.parameter, false);
    return parameter.toString();
  }
}
