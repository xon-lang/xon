import { ModuleContext } from "@parser";
import { BaseParser } from "../base.parser";

export class ModuleParser implements BaseParser {
  constructor(public ctx: ModuleContext) {
  }
}
