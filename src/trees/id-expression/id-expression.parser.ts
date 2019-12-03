import { IdExpressionContext } from "../../grammar/.antlr/XonParser";
import { BaseParser as BaseParser } from "../base.parser";

export class IdExpressionParser extends BaseParser {

  id: string;

  constructor(public ctx: IdExpressionContext) {
    super();
    this.id = ctx.ID().text;
  }

  toPlain() {
    return {
      ... super.toPlain(),
      id: this.id
    }
  }
}
