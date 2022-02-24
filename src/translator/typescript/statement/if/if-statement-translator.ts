import { ArrayExpressionTree } from '../../../../tree/expression/array/array-expression-tree';
import { IfStatementTree } from '../../../../tree/statement/if/if-statement-tree';
import { StatementTranslator } from '../statement-translator';

export class IfStatementTranslator implements StatementTranslator {
  constructor(private tree: IfStatementTree) {}

  toString(): string {
    return this.tree.toString();
  }
}
