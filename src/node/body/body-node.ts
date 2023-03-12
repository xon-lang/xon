import { BodyExpressionContext } from '~/grammar/xon-parser';
import { Node, NodeType } from '~/node/node';
import { getNode } from '~/node/node-helper';
import { SourceNode } from '~/node/source/source-node';

export interface BodyNode extends Node {
  source: SourceNode;
}

export function bodyNode(ctx: BodyExpressionContext): BodyNode {
  const source = getNode(ctx.source()) as SourceNode;

  return {
    type: NodeType.BODY,
    startIndex: source.startIndex,
    stopIndex: source.stopIndex,
    text: source.text,
    source,
  };
}
