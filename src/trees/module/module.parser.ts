import { ModuleContext } from "../../grammar/.antlr/XonParser";
import { BaseParser } from "../base.parser";

export class ModuleParser extends BaseParser {
  constructor(public ctx: ModuleContext) {
    super();
  }

  toPlain() {
    return {
      ...super.toPlain()
    }
  }
}