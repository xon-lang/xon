import { BodyExpressionContext } from '~/grammar/xon-parser';
import { Node, NodeType } from '~/parser/lexer/node';
import { getNode } from '~/tree/expression/expression-tree-helper';
import { SourceNode } from '~/tree/expression/source/source-tree';

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
