import { String } from '../../../../lib/core';
import { PreprocessorStatementTree } from '../../../../tree/statement/preprocessor/preprocessor-statement-tree';
import { StatementTranslator } from '../statement-translator';

export class PreprocessorStatementTranslator implements StatementTranslator {
  constructor(private tree: PreprocessorStatementTree) {}

  toString(): String {
    return this.tree.value;
  }
}
