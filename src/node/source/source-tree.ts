import { SourceContext } from '~/grammar/xon-parser';
import { getNode } from '~/node/expression-tree-helper';
import { Node, NodeType } from '~/node/node';

export class SourceNode implements Node {
  nodeType = NodeType.SOURCE;
  startIndex: number;
  stopIndex: number;
  text: string;
  expressions: Node[] = [];

  constructor(ctx: SourceContext | null) {
    this.expressions = ctx ? ctx.expression().map(getNode) : [];
    this.startIndex = this.expressions[0].startIndex;
    this.stopIndex = this.expressions[this.expressions.length - 1].stopIndex;
    this.text = this.expressions.map((x) => x.text).join('');
  }
}
