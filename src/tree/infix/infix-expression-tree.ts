import { Node, NodeType } from '~/parser/lexer/node';

export class InfixNode implements Node {
  nodeType = NodeType.INFIX;
  startIndex: number;
  stopIndex: number;
  text: string;

  constructor(public operator: Node, public left: Node, public right: Node) {
    this.startIndex = left.startIndex;
    this.stopIndex = right.stopIndex;
    this.text = left.text + operator.text + right.text;
  }
}
