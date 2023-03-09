import { ParserRuleContext, Token as AntlrToken } from 'antlr4ts';
import { Boolean2, String2 } from '~/lib/core';
import { Source } from '~/source/source';
import { SourcePosition } from '~/source/source-position';
import { Tree } from '~/tree/tree';

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

  static fromToken(token: AntlrToken): SourceSpan {
    return SourceSpan.fromTwoTokens(token, token);
  }

  static fromTwoTokens(start: AntlrToken, stop: AntlrToken): SourceSpan {
    const sourceName = start.inputStream?.sourceName;
    const location = (sourceName !== '<unknown>' && sourceName) || null;
    const source = Source.fromText(String(start.inputStream), location);
    const startPosition = new SourcePosition(source, start.startIndex, start.line - 1, start.charPositionInLine);
    const stopPosition = new SourcePosition(
      source,
      stop.charPositionInLine + (stop.stopIndex - stop.startIndex),
      stop.line - 1,
      stop.stopIndex,
    );

    return new SourceSpan(source, startPosition, stopPosition);
  }

  static fromTwoSourceSpans(startSourceSpan: SourceSpan, stopSourceSpan: SourceSpan): SourceSpan {
    return new SourceSpan(startSourceSpan.source, startSourceSpan.start, stopSourceSpan.stop);
  }

  static fromTwoTrees(startTree: Tree, stopTree: Tree): SourceSpan {
    return SourceSpan.fromTwoSourceSpans(startTree.sourceSpan, stopTree.sourceSpan);
  }
}
