// this code was generated

import { Token } from 'antlr4ts';
import { String } from '../../lib/core';
import { DeclarationMetadata } from '../../metadata/declaration/declaration-metadata';
import { SourceRange } from '../../util/source-range';
import { Tree } from '../tree';

export class IdTree extends Tree {
  sourceRange: SourceRange;
  metadata: DeclarationMetadata;
  text: String;

  constructor(token: Token) {
    super();
    this.sourceRange = SourceRange.fromToken(token);
    this.text = token.text;
  }

  toString(): String {
    return this.text;
  }
}

// this code was generated
