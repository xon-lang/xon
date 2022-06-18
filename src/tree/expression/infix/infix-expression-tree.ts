// this code was generated

import { String } from '../../../lib/core';
import { ValueMetadata } from '../../../metadata/value/value-metadata';
import { IdTree } from '../../id/id-tree';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';

export class InfixExpressionTree extends ExpressionTree {
  metadata: ValueMetadata;
  name: IdTree;
  left: ExpressionTree;
  right: ExpressionTree;
  sourceRange: SourceRange;

  constructor(name: IdTree, left: ExpressionTree, right: ExpressionTree) {
    super();
    this.name = name;
    this.left = left;
    this.right = right;
    this.sourceRange = SourceRange.fromTwoRange(left.sourceRange, right.sourceRange);
  }

  toString(): String {
    if (this.name.text === '^') {
      return `${this.left}${this.name}${this.right}`;
    }
    return `${this.left} ${this.name} ${this.right}`;
  }
}

// this code was generated
