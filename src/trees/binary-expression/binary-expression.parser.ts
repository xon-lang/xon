import { BinaryExpressionContext } from "../../grammar/.antlr/XonParser";
import { BaseParser as BaseParser } from "../base.parser";
import { ExpressionParser } from "../expression/expression.parser";

export class BinaryExpressionParser extends BaseParser {

  left: ExpressionParser;
  right: ExpressionParser;

  constructor(public ctx: BinaryExpressionContext) {
    super();
    this.left = new ExpressionParser(ctx._left);
    this.right = new ExpressionParser(ctx._right);
  }

  toPlain() {
    return {
      ...super.toPlain(),
      left: this.left.toPlain(),
      right: this.right.toPlain(),
    }
  }
}
