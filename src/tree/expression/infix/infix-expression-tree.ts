import { String } from '../../../lib/core';
import { InfixExpressionMetadata } from '../../../metadata/expression/infix/infix-expression-metadata';
import { IdToken } from '../../../util/id-token';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';

export class InfixExpressionTree implements ExpressionTree {
  sourceRange: SourceRange;
  metadata: InfixExpressionMetadata;

  constructor(public name: IdToken, public left: ExpressionTree, public right: ExpressionTree) {
    this.sourceRange = SourceRange.fromTwoRange(left.sourceRange, right.sourceRange);
  }

  toString(): String {
    if (this.name.text === '^') {
      return `${this.left}${this.name}${this.right}`;
    }
    return `${this.left} ${this.name} ${this.right}`;
  }
}
