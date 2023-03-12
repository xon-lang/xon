import { Node, NodeType } from '~/parser/lexer/node';
import { ArrayNode } from '~/tree/expression/array/array-expression-tree';

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
