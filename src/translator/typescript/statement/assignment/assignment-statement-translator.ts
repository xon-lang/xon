import { String } from '../../../../lib/core';
import { ParameterStatementTree } from '../../../../tree/statement/parameter/parameter-statement-tree';
import { getParameterTranslator } from '../../parameter/parameter-translator-helper';
import { StatementTranslator } from '../statement-translator';

export class AssignmentStatementTranslator implements StatementTranslator {
  constructor(private tree: ParameterStatementTree) {}

  toString(): String {
    const parameter = getParameterTranslator(this.tree.parameter, false);
    return parameter.toString();
  }
}
