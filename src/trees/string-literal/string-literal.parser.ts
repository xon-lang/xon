import { StringLiteralContext } from "../../grammar/.antlr/XonParser";
import { BaseParser } from "../base.parser";

export class StringLiteralParser extends BaseParser {

  value: string;

  constructor(public ctx: StringLiteralContext) {
    super();
    this.value = ctx.StringLiteral().text.slice(1, -1);
  }

  toPlain() {
    return {
      type: 'StringLiteral', value: this.value
    }
  }
}
