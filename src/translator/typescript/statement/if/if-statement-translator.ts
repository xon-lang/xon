import { IfStatementTree } from '../../../../tree/statement/if/if-statement-tree';
import { getBodyTranslator } from '../../body/body-translator-helper';
import { getExpressionTranslator } from '../../expression/expression-translator-helper';
import { StatementTranslator } from '../statement-translator';

export class IfStatementTranslator implements StatementTranslator {
  constructor(private tree: IfStatementTree) {}

  toString(): string {
    const condition = getExpressionTranslator(this.tree.condition, false);
    const thenBody = getBodyTranslator(this.tree.thenBody).toString();
    const elseBody = (this.tree.elseBody && getBodyTranslator(this.tree.elseBody).toString()) || '';
    let result = `if (${condition}) {\n${thenBody.replace(/^(.+)/gm, '  $1')}\n}`;
    if (elseBody) {
      result += ` else {\n${elseBody.replace(/^(.+)/gm, '  $1')}\n}`;
    }
    return result;
  }
}
