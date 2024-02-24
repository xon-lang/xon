import { Node } from '../node';

export interface SyntaxNode extends Node {
  readonly children: Node[];
}
