import { BracedExpressionContext } from "../../grammar/.antlr/XonParser";
import { BaseParser as BaseParser } from "../base.parser";
import { ExpressionParser } from "../expression/expression.parser";

export class BracedExpressionParser extends BaseParser {

  value: ExpressionParser;

  constructor(public ctx: BracedExpressionContext) {
    super();
    this.value = new ExpressionParser(ctx.expression());
  }

  toPlain() {
    return this.value.toPlain()
  }
}
