import { Integer, String2 } from '~/lib/core';
import { operatorsOrders } from '~/parser/parser-config';
import { Source } from '~/source/source';
import { SourcePosition } from '~/source/source-position';
import { SourceSpan } from '~/source/source-span';
import { TokenExpressionTree, TokenType } from '~/tree/expression/token/token-expression-tree';
import { TokenTree } from '~/tree/token';

export class Lexer {
  constructor(public source: Source) {}

  public getTokens(): TokenExpressionTree[] {
    const expressions: TokenExpressionTree[] = [];
    for (let i = 0; i < this.source.text.length; i++) {
      const char = this.source.text[i];

      let token = stringToken(this.source, i, char);
      if (token) {
        expressions.push(token);
        i = token.sourceSpan.stop.index;
        continue;
      }

      token = whitespaceToken(this.source, i, char);
      if (token) {
        expressions.push(token);
        i = token.sourceSpan.stop.index;
        continue;
      }

      token = operatorToken(this.source, i, char);
      if (token) {
        expressions.push(token);
        i = token.sourceSpan.stop.index;
        continue;
      }

      token = idToken(this.source, i, char);
      if (token) {
        expressions.push(token);
        i = token.sourceSpan.stop.index;
        continue;
      }

      token = integerToken(this.source, i, char);
      if (token) {
        expressions.push(token);
        i = token.sourceSpan.stop.index;
        continue;
      }
    }

    return expressions;
  }
}

const WHITESPACE = ' \t';
const DIGITS = '0123456789';
const LETTERS = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS_LETTERS = DIGITS + LETTERS;

const OPERATORS = operatorsOrders
  .flatMap((operatorsOrder) => operatorsOrder.operators)
  .flatMap((operators) => operators.split(' '));

function stringToken(source: Source, index: Integer, char: String2): TokenExpressionTree | null {
  const QUOTE = "'";
  if (char === QUOTE) {
    const nextQuoteIndex = source.text.indexOf(QUOTE, index + 1);
    if (nextQuoteIndex < 0) {
      return createToken(source, index, source.text.length - 1, TokenType.UNEXPECTED);
    }
    return createToken(source, index, nextQuoteIndex, TokenType.STRING);
  }
  return null;
}

function whitespaceToken(source: Source, index: Integer, char: String2): TokenExpressionTree | null {
  if (WHITESPACE.includes(char)) {
    let nextIndex = index;
    for (let i = index + 1; i < source.text.length; i++) {
      if (!WHITESPACE.includes(source.text[i])) {
        nextIndex = i - 1;
        break;
      }
    }
    return createToken(source, index, nextIndex, TokenType.WHITESPACE);
  }
  return null;
}

function operatorToken(source: Source, index: Integer, char: String2): TokenExpressionTree | null {
  let operators = OPERATORS.filter((x) => x.startsWith(char));
  if (operators.length) {
    // use/add next method instead of cycles
    for (let i = index + 1; i < source.text.length; i++) {
      operators = operators.filter((x) => x[i - index] === source.text[i]);
      if (!operators.length) {
        return null;
      }
      if (operators.length === 1) {
        return createToken(source, index, i, TokenType.OPERATOR);
      }
    }
  }
  return null;
}

function idToken(source: Source, index: Integer, char: String2): TokenExpressionTree | null {
  if (LETTERS.includes(char)) {
    let nextIndex = 0;
    for (let i = index + 1; i < source.text.length; i++) {
      if (!DIGITS_LETTERS.includes(source.text[i])) {
        break;
      }
      nextIndex = i;
    }
    return createToken(source, index, nextIndex, TokenType.ID);
  }
  return null;
}

function integerToken(source: Source, index: Integer, char: String2): TokenExpressionTree | null {
  if (DIGITS.includes(char)) {
    let nextIndex = 0;
    for (let i = index + 1; i < source.text.length; i++) {
      if (!DIGITS_LETTERS.includes(source.text[i])) {
        break;
      }
      nextIndex = i;
    }
    return createToken(source, index, nextIndex, TokenType.INTEGER);
  }
  return null;
}

function createToken(source: Source, startIndex: Integer, stopIndex: Integer, type: TokenType): TokenExpressionTree {
  const start = SourcePosition.fromIndex(source, startIndex);
  const stop = SourcePosition.fromIndex(source, stopIndex);
  const sourceSpan = new SourceSpan(source, start, stop);
  const name = new TokenTree(sourceSpan);
  return new TokenExpressionTree(name, type);
}
