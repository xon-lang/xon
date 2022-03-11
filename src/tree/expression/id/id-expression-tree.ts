import { IdExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { IdToken } from '../../../util/id-token';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';

export class IdExpressionTree implements ExpressionTree {
  sourceRange: SourceRange;
  metadata: ExpressionMetadata;
  name: IdToken;

  constructor(ctx: IdExpressionContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = new IdToken(ctx._name);
  }

  toString(): string {
    return this.name.toString();
  }
}
