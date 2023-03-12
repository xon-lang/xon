import { BodyNode } from '~/node/body/body-expression-tree';
import { Node, NodeType } from '~/parser/lexer/node';

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
