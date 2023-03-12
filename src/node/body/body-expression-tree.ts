import { BodyExpressionContext } from '~/grammar/xon-parser';
import { getNode } from '~/node/expression-tree-helper';
import { Node, NodeType } from '~/node/node';
import { SourceNode } from '~/node/source/source-tree';

export class BodyNode implements Node {
  nodeType = NodeType.BODY;
  startIndex: number;
  stopIndex: number;
  text: string;

  constructor(public source: SourceNode) {
    this.startIndex = source.startIndex;
    this.stopIndex = source.stopIndex;
    this.text = source.text;
  }
}

export function getBodyNode(ctx: BodyExpressionContext) {
  const source = getNode(ctx.source()) as SourceNode;
  return new BodyNode(source);
}
