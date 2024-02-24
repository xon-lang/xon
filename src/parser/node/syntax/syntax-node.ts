import { Nothing } from '../../../lib/core';
import { rangeFromNodes } from '../../../source/source-range';
import { Node } from '../node';

export interface SyntaxNode extends Node {
  readonly children: Node[];
}

export function getRangeAndChildren(...nodes: (Node | Nothing)[]): Pick<SyntaxNode, 'range' | 'children'> {
  const children = nodes.filter((x): x is Node => !!x);
  const range = rangeFromNodes(children.first(), children.last());

  return { range, children };
}
