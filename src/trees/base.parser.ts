import { ParserRuleContext } from "antlr4ts";

export abstract class BaseParser {

  ctx: ParserRuleContext;

  get type() {
    return this.ctx.constructor.name.replace(/Context$/,'');
  }

  toPlain() {
    return {
      type: this.type
    }
  }
}