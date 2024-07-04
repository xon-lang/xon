import {$Node} from '../../../../$';
import {Nothing} from '../../../../../lib/types';
import {ExpressionNode} from '../../../node';
import {Group} from '../../group/group-node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {AssignNode} from '../assign/assign-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';
import {TypeNode} from '../type/type-node';

export type LambdaNode = SyntaxNode<$Node.LambdaNode> &
  ExpressionNode & {
    generics: Group | Nothing;
    parameters: Group;
    type: TypeNode | Nothing;
    assign: AssignNode | Nothing;
  };

export function lambdaNode(
  analyzer: SyntaxAnalyzer,
  generics: Group | Nothing,
  parameters: Group,
  type: TypeNode | Nothing,
  assign: AssignNode | Nothing,
): LambdaNode {
  const node = syntaxNode($Node.LambdaNode, {
    generics,
    parameters,
    type,
    assign,
  });

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: LambdaNode): void {
  if (node.type) {
    analyzer.formatterManager.formatChildNode(node.type, false);
  }

  if (node.assign) {
    analyzer.formatterManager.formatChildNode(node.assign, true);
  }
}
