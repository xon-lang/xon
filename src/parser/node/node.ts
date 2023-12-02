import { SourceRange } from '../../source/source-range';
import { NodeType } from './node-type';

export interface Node {
  $: NodeType;
  range: SourceRange;
  parent?: Node | null;
  // todo mb should be in the statement node
  declarations?: Node[] | null;
}

export function addNodeParent(parent: Node, ...children: (Node | null)[]): void {
  for (const node of children) {
    if (!node) {
      continue;
    }

    node.parent = parent;
  }
}
