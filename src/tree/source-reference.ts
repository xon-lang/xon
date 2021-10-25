import { ParserRuleContext, Token } from 'antlr4ts';
import * as fs from 'fs';

export class SourceReference {
  path: string;
  startIndex: number;
  stopIndex: number;
  line: number;
  column: number;

  get length() {
    if (this.stopIndex > this.startIndex) {
      return this.stopIndex - this.startIndex + 1;
    }
    return 0;
  }

  get text() {
    return fs.readFileSync(this.path);
  }

  clone() {
    const ref = new SourceReference();
    ref.path = this.path;
    ref.startIndex = this.startIndex;
    ref.stopIndex = this.stopIndex;
    ref.line = this.line;
    ref.column = this.column;
    return ref;
  }

  static fromContext(context: ParserRuleContext) {
    return SourceReference.fromTwoTokens(context.start, context.stop);
  }

  static fromToken(token: Token) {
    return SourceReference.fromTwoTokens(token, token);
  }

  static fromTwoTokens(start: Token, stop: Token) {
    const ref = new SourceReference();
    ref.path = start.inputStream.sourceName;
    ref.startIndex = start.startIndex;
    ref.stopIndex = stop.stopIndex;
    ref.line = start.line;
    ref.column = start.charPositionInLine + 1;
    return ref;
  }
}
