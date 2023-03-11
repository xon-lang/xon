import { Char, Integer, String2 } from '~/lib/core';
import { operatorsOrders } from '~/parser/parser-config';
import { Source } from '~/source/source';
import { SourcePosition } from '~/source/source-position';
import { SourceSpan } from '~/source/source-span';
import { TokenExpressionTree, TokenType } from '~/tree/expression/token/token-expression-tree';
import { TokenTree } from '~/tree/token';

export class Lexer {
  public startIndex: Integer;
  public stopIndex: Integer;

  public constructor(public source: Source, startIndex: Integer | null = null, stopIndex: Integer | null = null) {
    this.startIndex = startIndex ?? 0;
    this.stopIndex = stopIndex ?? source.text.length - 1;
  }

  public getTokens(): TokenExpressionTree[] {
    const expressions: TokenExpressionTree[] = [];

    for (let i = this.startIndex; i <= this.stopIndex; i++) {
      const char = this.source.text[i];

      let token = this.stringToken(i, char);
      if (token) {
        expressions.push(token);
        i = token.sourceSpan.stop.index;
        continue;
      }

      token = this.whitespaceToken(i, char);
      if (token) {
        expressions.push(token);
        i = token.sourceSpan.stop.index;
        continue;
      }

      token = this.operatorToken(i, char);
      if (token) {
        expressions.push(token);
        i = token.sourceSpan.stop.index;
        continue;
      }

      token = this.idToken(i, char);
      if (token) {
        expressions.push(token);
        i = token.sourceSpan.stop.index;
        continue;
      }

      token = this.integerToken(i, char);
      if (token) {
        expressions.push(token);
        i = token.sourceSpan.stop.index;
        continue;
      }

      const last = expressions[expressions.length - 1];

      if (last?.type === TokenType.UNEXPECTED) {
        const lastStartIndex = last.sourceSpan.start.index;
        const unexpected = this.createToken(lastStartIndex, i, TokenType.UNEXPECTED);
        expressions.splice(-1);
        expressions.push(unexpected);
      } else {
        const unexpected = this.createToken(i, i, TokenType.UNEXPECTED);
        expressions.push(unexpected);
      }
    }

    return expressions;
  }

  private stringToken(index: Integer, char: Char): TokenExpressionTree | null {
    const QUOTE = "'";
    if (char === QUOTE) {
      const nextQuoteIndex = this.source.text.indexOf(QUOTE, index + 1);
      if (nextQuoteIndex < 0 || nextQuoteIndex > this.stopIndex) {
        return this.createToken(index, this.stopIndex, TokenType.UNEXPECTED);
      }
      return this.createToken(index, nextQuoteIndex, TokenType.STRING);
    }
    return null;
  }

  private whitespaceToken(index: Integer, char: Char): TokenExpressionTree | null {
    if (char === SPACE || char === TAB) {
      let nextIndex = index;
      for (let i = index + 1; i <= this.stopIndex; i++) {
        const nextChar = this.source.text[i];
        if (nextChar !== SPACE && nextChar !== TAB) {
          break;
        }
        nextIndex = i;
      }
      return this.createToken(index, nextIndex, TokenType.WHITESPACE);
    }
    return null;
  }

  private operatorToken(index: Integer, char: Char): TokenExpressionTree | null {
    let operators = OPERATORS.filter((x) => x[0] === char);

    if (operators.length === 0) {
      return null;
    }

    const candidates: String2[] = [];

    for (let i = index; i <= this.stopIndex; i++) {
      operators = operators.filter((x) => x[i - index] === this.source.text[i]);
      const candidate = operators.find((x) => x.length === i - index + 1);
      if (candidate) {
        candidates.push(candidate);
      }
      if (operators.length === 0) {
        break;
      }
    }
    if (candidates.length === 0) {
      return null;
    }
    const candidate = candidates[candidates.length - 1];
    return this.createToken(index, index + candidate.length - 1, TokenType.OPERATOR);
  }

  private idToken(index: Integer, char: Char): TokenExpressionTree | null {
    if (LETTERS.includes(char)) {
      let nextIndex = index;
      for (let i = index + 1; i <= this.stopIndex; i++) {
        if (!DIGITS_LETTERS.includes(this.source.text[i])) {
          break;
        }
        nextIndex = i;
      }
      return this.createToken(index, nextIndex, TokenType.ID);
    }
    return null;
  }

  private integerToken(index: Integer, char: Char): TokenExpressionTree | null {
    if (DIGITS.includes(char)) {
      let nextIndex = index;
      for (let i = index + 1; i <= this.stopIndex; i++) {
        if (!DIGITS_LETTERS.includes(this.source.text[i])) {
          break;
        }
        nextIndex = i;
      }
      return this.createToken(index, nextIndex, TokenType.INTEGER);
    }
    return null;
  }

  private createToken(startIndex: Integer, stopIndex: Integer, type: TokenType): TokenExpressionTree {
    const start = SourcePosition.fromIndex(this.source, startIndex);
    const stop = SourcePosition.fromIndex(this.source, stopIndex);
    const sourceSpan = new SourceSpan(this.source, start, stop);
    const name = new TokenTree(sourceSpan);
    return new TokenExpressionTree(name, type);
  }
}

const SPACE = ' ';
const TAB = '\t';
const DIGITS = '0123456789';
const LETTERS = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS_LETTERS = DIGITS + LETTERS;

const OPERATORS = [
  ...new Set(
    operatorsOrders.flatMap((operatorsOrder) => operatorsOrder.operators).flatMap((operators) => operators.split(' ')),
  ),
];
