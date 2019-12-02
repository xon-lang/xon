import { FloatLiteralContext } from "../../grammar/.antlr/XonParser";
import { BaseParser } from "../base.parser";

export class FloatLiteralParser extends BaseParser {

  value: string;

  constructor(public ctx: FloatLiteralContext) {
    super();
    this.value = ctx.FloatLiteral().text.replace(/_/g, '');
  }
  
  toPlain() {
    return { 
      type: 'FloatLiteral',
      value: this.value }
  }
}