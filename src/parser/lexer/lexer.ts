import { Char, Integer, String2 } from '~/lib/core';
import { idNode } from '~/node/id/id-node';
import { integerNode } from '~/node/integer/integer-node';
import { scanJoiningToken } from '~/node/joining/joining-node';
import { Node, NodeType } from '~/node/node';
import { operatorNode } from '~/node/operator/operator-node';
import { stringNode } from '~/node/string/string-node';
import { unexpectedNode } from '~/node/unexpected/unexpected-node';
import { whitespaceNode } from '~/node/whitespace/whitespace-node';
import { operatorsOrders } from '~/parser/parser-config';
import { Source } from '~/parser/source/source';

export class Lexer {
  public startIndex: Integer;
  public stopIndex: Integer;

  public constructor(public source: Source, startIndex: Integer | null = null, stopIndex: Integer | null = null) {
    this.startIndex = startIndex ?? 0;
    this.stopIndex = stopIndex ?? source.text.length - 1;
  }

  public getTokens(): Node[] {
    const tokens: Node[] = [];

    for (let i = this.startIndex; i <= this.stopIndex; i++) {
      const char = this.source.text[i];

      let token = this.stringToken(i, char);
      if (token) {
        tokens.push(token);
        i = token.stopIndex;
        continue;
      }

      token = scanJoiningToken(this.source, i, this.stopIndex);
      if (token) {
        tokens.push(token);
        i = token.stopIndex;
        continue;
      }

      token = this.whitespaceToken(i, char);
      if (token) {
        tokens.push(token);
        i = token.stopIndex;
        continue;
      }

      token = this.operatorToken(i, char);
      if (token) {
        tokens.push(token);
        i = token.stopIndex;
        continue;
      }

      token = this.idToken(i, char);
      if (token) {
        tokens.push(token);
        i = token.stopIndex;
        continue;
      }

      token = this.integerToken(i, char);
      if (token) {
        tokens.push(token);
        i = token.stopIndex;
        continue;
      }

      const last = tokens[tokens.length - 1];

      if (last?.type === NodeType.UNEXPECTED) {
        const lastStartIndex = last.startIndex;
        const unexpected = unexpectedNode(lastStartIndex, i);
        tokens.splice(-1);
        tokens.push(unexpected);
      } else {
        const unexpected = unexpectedNode(i, i);
        tokens.push(unexpected);
      }
    }

    return tokens;
  }

  private stringToken(index: Integer, char: Char): Node | null {
    if (char === QUOTE) {
      const nextQuoteIndex = this.source.text.indexOf(QUOTE, index + 1);
      if (nextQuoteIndex < 0 || nextQuoteIndex > this.stopIndex) {
        return unexpectedNode(index, this.stopIndex);
      }
      return stringNode(index, nextQuoteIndex);
    }
    return null;
  }

  private whitespaceToken(index: Integer, char: Char): Node | null {
    if (char === SPACE || char === TAB) {
      let nextIndex = index;
      for (let i = index + 1; i <= this.stopIndex; i++) {
        const nextChar = this.source.text[i];
        if (nextChar !== SPACE && nextChar !== TAB) {
          break;
        }
        nextIndex = i;
      }
      return whitespaceNode(index, nextIndex);
    }
    return null;
  }

  private operatorToken(index: Integer, char: Char): Node | null {
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
    const operatorString = candidates[candidates.length - 1];
    const idCandidate = this.idToken(index, char);
    const operatorCandidate = operatorNode(index, index + operatorString.length - 1);
    if (idCandidate && idCandidate.stopIndex > operatorCandidate.stopIndex) {
      return idCandidate;
    }
    return operatorCandidate;
  }

  private idToken(index: Integer, char: Char): Node | null {
    if (LETTERS.includes(char)) {
      let nextIndex = index;
      for (let i = index + 1; i <= this.stopIndex; i++) {
        if (!DIGITS_LETTERS.includes(this.source.text[i])) {
          break;
        }
        nextIndex = i;
      }
      return idNode(index, nextIndex);
    }
    return null;
  }

  private integerToken(index: Integer, char: Char): Node | null {
    if (DIGITS.includes(char)) {
      let nextIndex = index;
      for (let i = index + 1; i <= this.stopIndex; i++) {
        if (!DIGITS_LETTERS.includes(this.source.text[i])) {
          break;
        }
        nextIndex = i;
      }
      return integerNode(index, nextIndex);
    }
    return null;
  }
}

const QUOTE = "'";
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
