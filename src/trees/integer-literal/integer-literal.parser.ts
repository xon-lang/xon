import { IntegerLiteralContext } from "../../grammar/.antlr/XonParser";
import { BaseParser } from "../base.parser";

export class IntegerLiteralParser extends BaseParser {

  value: string;

  constructor(public ctx: IntegerLiteralContext) {
    super();
    this.value = ctx.DecimalLiteral().text.replace(/_/g, '');
  }

  toPlain() {
    return {
      ...super.toPlain(), value: this.value
    }
  }
}
