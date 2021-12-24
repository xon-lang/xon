import { ParserRuleContext, Token } from 'antlr4ts';

export class SourceReference {
  sourceName: string;
  startIndex: number;
  stopIndex: number;
  line: number;
  column: number;
  text: string;
  inputText: string;

  get length() {
    if (this.stopIndex > this.startIndex) {
      return this.stopIndex - this.startIndex + 1;
    }
    return 0;
  }

  // clone() {
  //   const ref = new SourceReference();
  //   ref.filePath = this.filePath;
  //   ref.startIndex = this.startIndex;
  //   ref.stopIndex = this.stopIndex;
  //   ref.line = this.line;
  //   ref.column = this.column;
  //   return ref;
  // }

  static fromContext(context: ParserRuleContext) {
    return SourceReference.fromTwoTokens(context.text, context.start, context.stop);
  }

  static fromToken(token: Token) {
    return SourceReference.fromTwoTokens(token.text, token, token);
  }

  private static fromTwoTokens(text: string, start: Token, stop: Token) {
    const ref = new SourceReference();
    ref.sourceName = start.inputStream.sourceName;
    ref.startIndex = start.startIndex;
    ref.stopIndex = stop.stopIndex;
    ref.line = start.line;
    ref.column = start.charPositionInLine + 1;
    ref.text = text;
    ref.inputText = start.inputStream.toString();
    return ref;
  }
}
