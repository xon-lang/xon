import { GroupExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { ExpressionFormatter } from '../expression-formatter';
import { getExpressionFormatter } from '../expression-formatter-helper';

export class GroupExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: GroupExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const indent = this.config.indent(this.indentCount);
    const result = `${indent}(${getExpressionFormatter(this.ctx.expr(), this.config)})`;
    return result;
  }
}
