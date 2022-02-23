import { ExprContext } from '../../../grammar/xon-parser';
import { Issue } from '../../../issue-service/issue';
import { IdToken } from '../../../util/id-token';
import { SourceReference } from '../../../util/source-reference';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { IdExpressionTree } from '../../expression/id/id-expression-tree';
import { InfixExpressionTree } from '../../expression/infix/infix-expression-tree';
import { Tree } from '../../tree';

export class ImportMemberTree implements Tree {
  sourceReference: SourceReference;
  id: IdToken;
  alias?: IdToken;

  constructor(ctx: ExprContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    const tree = getExpressionTree(ctx);
    if (tree instanceof IdExpressionTree) {
      this.id = tree.id.name;
      this.alias = null;
    } else if (tree instanceof InfixExpressionTree) {
      if (tree.id.text !== 'as') Issue.errorFromContext(ctx, "Must be 'as' operator");
      if (!(tree.left instanceof IdExpressionTree)) Issue.errorFromContext(ctx, 'Must be id');
      if (!(tree.right instanceof IdExpressionTree)) Issue.errorFromContext(ctx, 'Must be id');

      this.id = tree.left.id.name;
      this.alias = tree.right.id.name;
    } else {
      Issue.errorFromContext(ctx, 'Wrong expression type');
    }
  }

  toString(): string {
    if (this.alias) {
      return `${this.id.text} as ${this.alias.text}`;
    }
    return `${this.id.text}`;
  }
}
