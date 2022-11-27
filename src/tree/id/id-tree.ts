import { Token } from 'antlr4ts';
import { String2 } from '~/lib/core';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { Tree } from '~/tree/tree';
import { SourceSpan } from '~/util/source/source-span';

export class IdTree extends Tree {
  sourceRange: SourceSpan;
  metadata: DeclarationMetadata | null = null;
  text: String2;

  constructor(token: Token) {
    super();
    this.sourceRange = SourceSpan.fromToken(token);
    this.text = token.text ?? '';
  }

  toString(): String2 {
    return this.text;
  }
}
