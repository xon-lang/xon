import { Node, NodeType } from '~/parser/lexer/node';
import { BodyNode } from '~/tree/body/body-expression-tree';

export class BodyableNode implements Node {
  nodeType = NodeType.BODYABLE;
  startIndex: number;
  stopIndex: number;
  text: string;

  constructor(public expression: Node, public body: BodyNode) {
    this.startIndex = expression.startIndex;
    this.stopIndex = body.stopIndex;
    this.text = expression.text + body.text;
  }
}
