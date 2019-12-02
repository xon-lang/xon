import { CharacterLiteralContext } from "../../grammar/.antlr/XonParser";
import { BaseParser } from "../base.parser";

export class CharacterLiteralParser extends BaseParser {

  value: string;

  constructor(public ctx: CharacterLiteralContext) {
    super();
    this.value = ctx.CharacterLiteral().text.slice(1, -1);
  }

  toPlain() {
    return {
      ...super.toPlain(),
      value: this.value }
  }
}
