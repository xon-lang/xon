import {Nothing} from '../../../../../lib/types';
import {formatChildNode} from '../../../../formatter/formatter';
import {SyntaxContext} from '../../../syntax-context';
import {Group} from '../../group/group-node';
import {$Node, ExpressionNode} from '../../node';
import {AssignNode} from '../assign/assign-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';
import {TypeNode} from '../type/type-node';

export type LambdaNode = SyntaxNode<$Node.LAMBDA> &
  ExpressionNode & {
    generics: Group | Nothing;
    parameters: Group;
    type: TypeNode | Nothing;
    assign: AssignNode | Nothing;
  };

export function lambdaNode(
  context: SyntaxContext,
  generics: Group | Nothing,
  parameters: Group,
  type: TypeNode | Nothing,
  assign: AssignNode | Nothing,
): LambdaNode {
  const node = syntaxNode($Node.LAMBDA, {
    generics,
    parameters,
    type,
    assign,
  });

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: LambdaNode): void {
  if (node.type) {
    formatChildNode(context, node.type, false);
  }

  if (node.assign) {
    formatChildNode(context, node.assign, true);
  }
}
