import { ParserRuleContext, Token } from 'antlr4ts';

export class LinePosition {
  constructor(public line: number, public column: number, public index: number) {}
}

export class SourceRange {
  sourceName: string;
  rangeText: string;
  sourceText: string;
  start: LinePosition;
  stop: LinePosition;

  get length() {
    if (this.stop.index > this.start.index) {
      return this.stop.index - this.start.index + 1;
    }
    return 0;
  }

  get link(): string {
    return `${this.sourceName}:${this.start.line}:${this.start.column}`;
  }

  equals(other: SourceRange): boolean {
    return this.sourceName === other.sourceName && this.start.index === other.start.index;
  }

  static fromContext(context: ParserRuleContext) {
    return SourceRange.fromTwoTokens(context.start, context.stop);
  }

  static fromToken(token: Token) {
    return SourceRange.fromTwoTokens(token, token);
  }

  static fromTwoTokens(start: Token, stop: Token) {
    const ref = new SourceRange();
    ref.sourceName = start.inputStream.sourceName;
    ref.start = new LinePosition(start.line, start.charPositionInLine + 1, start.startIndex);
    ref.stop = new LinePosition(
      stop.line,
      stop.charPositionInLine + (stop.stopIndex - stop.startIndex) + 1,
      stop.stopIndex,
    );
    ref.sourceText = start.inputStream.toString();
    ref.rangeText = ref.sourceText.slice(ref.start.index, ref.stop.index + 1);
    return ref;
  }

  static fromTwoRange(start: SourceRange, stop: SourceRange) {
    const ref = new SourceRange();
    ref.sourceName = start.sourceName;
    ref.start = new LinePosition(start.start.line, start.start.column, start.start.index);
    ref.stop = new LinePosition(stop.stop.line, stop.stop.column, stop.stop.index);
    ref.sourceText = start.sourceText;
    ref.rangeText = ref.sourceText.slice(ref.start.index, ref.stop.index + 1);
    return ref;
  }
}
