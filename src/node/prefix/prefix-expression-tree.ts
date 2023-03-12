import { Node, NodeType } from '~/node/node';

export class PrefixNode implements Node {
  nodeType = NodeType.PREFIX;
  startIndex: number;
  stopIndex: number;
  text: string;

  constructor(public operator: Node, public expression: Node) {
    this.startIndex = operator.startIndex;
    this.stopIndex = expression.stopIndex;
    this.text = operator.text + expression.text;
  }
}
