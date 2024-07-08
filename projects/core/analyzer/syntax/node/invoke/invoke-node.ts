import {$} from '../../../../$';
import {ExpressionNode} from '../../../node';
import {GroupNode} from '../../group/group-node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type InvokeNode = SyntaxNode<$.InvokeNode> &
  ExpressionNode & {
    instance: ExpressionNode;
    group: GroupNode;
  };

export function invokeNode(analyzer: SyntaxAnalyzer, instance: ExpressionNode, group: GroupNode): InvokeNode {
  const node = syntaxNode($.InvokeNode, {instance, group});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: InvokeNode): void {
  analyzer.formatterManager.formatChildNode(node.group, false);
}
