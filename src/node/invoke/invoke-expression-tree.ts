import { ArrayNode } from '~/node/array/array-expression-tree';
import { Node, NodeType } from '~/parser/lexer/node';

export class InvokeNode implements Node {
  nodeType = NodeType.INVOKE;
  startIndex: number;
  stopIndex: number;
  text: string;

  constructor(public instance: Node, public array: ArrayNode) {
    this.startIndex = instance.startIndex;
    this.stopIndex = array.stopIndex;
    this.text = instance.text;
  }
}
