import { Token } from 'antlr4ts';
import { String2 } from '~/lib/core';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { SourceSpan } from '~/source/source-span';
import { Tree } from '~/tree/tree';

export class IdTree extends Tree {
  sourceSpan: SourceSpan;
  metadata: DeclarationMetadata | null = null;
  text: String2;

  constructor(token: Token) {
    super();
    this.sourceSpan = SourceSpan.fromToken(token);
    this.text = token.text ?? '';
  }

  toString(): String2 {
    return this.text;
  }
}
