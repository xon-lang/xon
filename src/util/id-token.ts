import { Token } from 'antlr4ts';
import { none, String } from '../lib/core';
import { SourceRange } from './source-range';

export class IdToken {
  sourceRange: SourceRange;
  text: String;

  constructor(token: Token) {
    this.sourceRange = SourceRange.fromToken(token);
    this.text = token.text;
  }

  toString(): String {
    return this.text;
  }
}

export function getIdToken(token?: Token): IdToken {
  return (token && new IdToken(token)) || none;
}
