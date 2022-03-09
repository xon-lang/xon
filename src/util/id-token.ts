import { Token } from 'antlr4ts';
import { SourceRange } from './source-range';

export class IdToken {
  sourceReference: SourceRange;
  text: string;

  constructor(token?: Token) {
    this.sourceReference = SourceRange.fromToken(token);
    this.text = token.text;
  }

  toString(): string {
    return this.text;
  }
}
