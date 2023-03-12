import { BodyExpressionContext } from '~/grammar/xon-parser';
import { Node, NodeType } from '~/node/node';
import { getNode } from '~/node/node-helper';
import { SourceNode } from '~/node/source/source-node';
import { Source } from '~/parser/source/source';

export interface BodyNode extends Node {
  source: SourceNode;
}

export function bodyNode(source: Source, ctx: BodyExpressionContext): BodyNode {
  const sourceNode = getNode(source, ctx.source()) as SourceNode;

  return {
    type: NodeType.BODY,
    startIndex: sourceNode.startIndex,
    stopIndex: sourceNode.stopIndex,
    source: sourceNode,
  };
}
