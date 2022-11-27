import { ParserRuleContext, Token } from 'antlr4ts';
import { Boolean2, String2 } from '~/lib/core';
import { Source } from '~/source/source';
import { SourcePosition } from '~/source/source-position';

export class SourceSpan {
  constructor(public source: Source, public start: SourcePosition, public stop: SourcePosition) {}

  getText(): String2 {
    return this.source.text.slice(this.start.index, this.stop.index + 1);
  }

  equals(other: SourceSpan): Boolean2 {
    return this.source?.location === other.source?.location && this.start.index === other.start.index;
  }

  static fromContext(context: ParserRuleContext): SourceSpan {
    return SourceSpan.fromTwoTokens(context.start, context.stop ?? context.start);
  }

  static fromToken(token: Token): SourceSpan {
    return SourceSpan.fromTwoTokens(token, token);
  }

  static fromTwoTokens(start: Token, stop: Token): SourceSpan {
    const sourceName = start.inputStream?.sourceName;
    const location = (sourceName !== '<unknown>' && sourceName) || null;
    const source = Source.fromText(String(start.inputStream), location);
    const startPosition = new SourcePosition(source, start.line, start.charPositionInLine + 1, start.startIndex);
    const stopPosition = new SourcePosition(
      source,
      stop.line,
      stop.charPositionInLine + (stop.stopIndex - stop.startIndex) + 1,
      stop.stopIndex,
    );

    return new SourceSpan(source, startPosition, stopPosition);
  }

  static fromTwoRange(startSpan: SourceSpan, stopSpan: SourceSpan): SourceSpan {
    return new SourceSpan(startSpan.source, startSpan.start, stopSpan.stop);
  }
}
