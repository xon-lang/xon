import { UnaryExpressionContext } from "../../grammar/.antlr/XonParser";
import { BaseParser as BaseParser } from "../base.parser";
import { ExpressionParser } from "../expression/expression.parser";

export class UnaryExpressionParser extends BaseParser {

  value: ExpressionParser;

  constructor(public ctx: UnaryExpressionContext) {
    super();
    this.value = new ExpressionParser(ctx.expression());
  }

  toPlain() {
    return {
      ...super.toPlain(),
      value: this.value.toPlain(),
    }
  }
}
