import { CharacterLiteralContext } from "@parser";
import { BaseParser } from "../base.parser";

export class CharacterLiteralParser implements BaseParser {

  value: string;

  constructor(public ctx: CharacterLiteralContext) {
    this.value = ctx.CharacterLiteral().text.slice(1, -1);
  }

  toPlain() {
    return { value: this.value }
  }
}
