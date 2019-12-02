import { BooleanLiteralContext } from "../../grammar/.antlr/XonParser";
import { BaseParser } from "../base.parser";

export class BooleanLiteralParser extends BaseParser {

  value: string;

  constructor(public ctx: BooleanLiteralContext) {
    super();
    this.value = ctx.BooleanLiteral().text;
  }

  toPlain() {
    return {
      ...super.toPlain(),
      value: this.value
    }
  }
}
