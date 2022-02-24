import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { MemberExpressionMetadata } from '../../../metadata/expression/member/member-expression-metadata';
import { MemberExpressionTree } from '../../../tree/expression/member/member-expression-tree';
import { ExpressionNode } from '../expression-node';

export class MemberExpressionNode extends ExpressionNode {
  context: MemberExpressionContext;
  tree: MemberExpressionTree;
  metadata: MemberExpressionMetadata;
}
