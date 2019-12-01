import { StringLiteralContext } from "@parser";
import { BaseParser } from "../base.parser";

export class StringLiteralParser implements BaseParser {

  value: string;

  constructor(public ctx: StringLiteralContext) {
    this.value = ctx.StringLiteral().text.slice(1,-1);
  }
  
  toPlain() {
    return { value: this.value }
  }
}
