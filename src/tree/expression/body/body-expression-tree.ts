import { BodyExpressionContext } from '~/grammar/xon-parser';
import { Node, NodeType } from '~/parser/lexer/node';
import { SourceNode } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';

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
  const source = getSourceTree(ctx.source());
  return new BodyNode(source);
}
