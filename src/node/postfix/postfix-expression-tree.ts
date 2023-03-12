import { Node, NodeType } from '~/parser/lexer/node';

export class PostfixNode implements Node {
  nodeType = NodeType.POSTFIX;
  startIndex: number;
  stopIndex: number;
  text: string;

  constructor(public operator: Node, public expression: Node) {
    this.startIndex = expression.startIndex;
    this.stopIndex = operator.stopIndex;
    this.text = expression.text + operator.text;
  }
}
