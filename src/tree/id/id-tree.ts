import { Token } from 'antlr4ts';
import { String2 } from '~/lib';
import { DeclarationMetadata } from '~/metadata';
import { Tree } from '~/tree';
import { SourceRange } from '~/util';

export class IdTree extends Tree {
  sourceRange: SourceRange;
  metadata: DeclarationMetadata;
  text: String2;

  constructor(token: Token) {
    super();
    this.sourceRange = SourceRange.fromToken(token);
    this.text = token.text;
  }

  toString(): String2 {
    return this.text;
  }
}
