import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Integer, Nothing, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node, findNode, is} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {ArrayNode} from '../array/array-node';
import {Group, GroupNode} from '../group/group-node';
import {ObjectNode} from '../object/object-node';
import {SyntaxNode, SyntaxParseFn, syntaxNode} from '../syntax-node';

export interface InvokeNode extends SyntaxNode {
  $: $Node.INVOKE;
  instance: Node;
  group: Group;
}

export function invokeNode(context: SyntaxContext, instance: Node, group: Group): InvokeNode {
  const node = syntaxNode($Node.INVOKE, {instance, group});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: InvokeNode): Nothing {
  formatBetweenHiddenNodes(context, node.instance, false);
}

export function invokeSyntaxParse(operators: String[]): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer = 0) => {
    const found =
      findNode(context.nodes, startIndex, true, (x): x is GroupNode => is<GroupNode>(x, $Node.GROUP)) ??
      findNode(context.nodes, startIndex, true, (x): x is ArrayNode => is<ArrayNode>(x, $Node.ARRAY)) ??
      findNode(context.nodes, startIndex, true, (x): x is ObjectNode => is<ObjectNode>(x, $Node.OBJECT));

    if (!found) {
      return;
    }

    const instance = context.nodes[found.index - 1];

    if (found.index > 0 && instance && !is<OperatorNode>(instance, $Node.OPERATOR)) {
      const node = invokeNode(context, instance, found.node);

      return {node, spliceIndex: found.index - 1};
    }

    return nothing;
  };
}
