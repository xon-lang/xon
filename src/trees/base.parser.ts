import { ParserRuleContext } from "antlr4ts";

export abstract class BaseParser {
  abstract ctx: ParserRuleContext;
  abstract toPlain(): Object;
}