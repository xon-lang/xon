import {TextPosition, TextRange, newTextPosition, newTextRange} from '#common';
import {ParserRuleContext, Token} from 'antlr4';

export function antrlPositionToXonPosition(token: Token): TextPosition {
  return newTextPosition(token.start, token.line - 1, token.column);
}

export function antrlRangeToXonRange(ruleContext: ParserRuleContext): TextRange {
  const start = antrlPositionToXonPosition(ruleContext.start);
  const stop = ruleContext.stop ? antrlPositionToXonPosition(ruleContext.stop) : start.clone();

  return newTextRange(start, stop);
}
