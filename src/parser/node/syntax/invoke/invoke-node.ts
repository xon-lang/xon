import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {Group} from '../group/group-node';
import {SyntaxNode, getRangeAndChildren} from '../syntax-node';

export interface InvokeNode extends SyntaxNode {
  $: $Node.INVOKE;
  instance: Node;
  group: Group;
}

export function invokeNode(context: SyntaxContext, instance: Node, group: Group): InvokeNode {
  const node: InvokeNode = {
    $: $Node.INVOKE,
    ...getRangeAndChildren(instance, group),
    instance,
    group,
  };

  checkFormatting(context, node);

  return node;
}

function checkFormatting(context: SyntaxContext, node: InvokeNode): void {
  node.hiddenNodes = node.group.hiddenNodes;
  formatBetweenHiddenNodes(context, node.instance, false);
}
