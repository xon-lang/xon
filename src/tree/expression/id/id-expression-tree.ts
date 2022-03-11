import { IdExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { getIdToken, IdToken } from '../../../util/id-token';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';

export class IdExpressionTree implements ExpressionTree {
  sourceRange: SourceRange;
  metadata: ExpressionMetadata;
  name: IdToken;

  constructor(ctx: IdExpressionContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdToken(ctx._name);
  }

  toString(): String {
    return this.name.toString();
  }
}
