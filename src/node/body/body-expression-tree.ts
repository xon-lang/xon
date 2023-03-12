import { BodyExpressionContext } from '~/grammar/xon-parser';
import { getNode } from '~/node/expression-tree-helper';
import { Node, NodeType } from '~/node/node';
import { SourceNode } from '~/node/source/source-tree';

export interface BodyNode extends Node {
  source: SourceNode;
}

export function bodyNode(ctx: BodyExpressionContext): BodyNode {
  const source = getNode(ctx.source()) as SourceNode;

  return {
    nodeType: NodeType.BODY,
    startIndex: source.startIndex,
    stopIndex: source.stopIndex,
    text: source.text,
    source,
  };
}
