import { Token } from 'antlr4ts';
import { SourceRange } from './source-range';

export class IdToken {
  sourceRange: SourceRange;
  text: string;

  constructor(token?: Token) {
    this.sourceRange = SourceRange.fromToken(token);
    this.text = token.text;
  }

  toString(): string {
    return this.text;
  }
}
