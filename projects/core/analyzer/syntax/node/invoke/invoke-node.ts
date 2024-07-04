import {$Node} from '../../../../$';
import {ExpressionNode} from '../../../node';
import {Group} from '../../group/group-node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type InvokeNode = SyntaxNode<$Node.InvokeNode> &
  ExpressionNode & {
    instance: ExpressionNode;
    group: Group;
  };

export function invokeNode(analyzer: SyntaxAnalyzer, instance: ExpressionNode, group: Group): InvokeNode {
  const node = syntaxNode($Node.InvokeNode, {instance, group});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: InvokeNode): void {
  analyzer.formatterManager.formatChildNode(node.group, false);
}
