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

  get link(): string {
    return `${this.sourceName}:${this.line}:${this.column}`;
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

  equals(other: SourceReference): boolean {
    return (
      this.sourceName === other.sourceName &&
      this.line === other.line &&
      this.column === other.column
    );
  }

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
    ref.stopIndex = stop?.stopIndex || start.startIndex;
    ref.line = start.line;
    ref.column = start.charPositionInLine + 1;
    ref.text = text;
    ref.inputText = start.inputStream.toString();
    return ref;
  }
}
