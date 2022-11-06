import {
  ExpressionFormatter,
  FormatterConfig,
  getArgumentsFormatter,
  getExpressionFormatter,
  MemberExpressionFormatter,
} from '~/formatter';
import { InvokeExpressionContext } from '~/grammar';
import { String2 } from '~/lib';

export class InvokeExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: InvokeExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    const expression = getExpressionFormatter(this.ctx.expression(), this.config).indent(
      this.indentCount,
    );

    const args = getArgumentsFormatter(this.ctx.arguments(), this.config).indent(this.indentCount);

    if (this.broken && expression instanceof MemberExpressionFormatter) {
      expression.break(true);
      args.indent(this.indentCount + 1);
    }

    const endLineLength = this.config.endLineLength(expression.toString());
    const startLineLength = this.config.endLineLength(args.toString());

    if (endLineLength + startLineLength > this.config.printWidth) {
      this.broken = true;
      args.break(true);
    }

    return expression + args.toString();
  }
}
