import { IntegerLiteralContext } from "@parser";
import { BaseParser } from "../base.parser";

export class IntegerLiteralParser implements BaseParser {

  value: string;

  constructor(public ctx: IntegerLiteralContext) {
    this.value = ctx.DecimalLiteral().text.replace(/_/g, '');
  }
}
