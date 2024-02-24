import { Nothing } from '../../../lib/core';
import { SourceRange, rangeFromNodes } from '../../../source/source-range';
import { Node } from '../node';

export interface SyntaxNode extends Node {
  readonly children: Node[];
}

export function getRangeAndChildren(...nodes: (Node | Nothing)[]): { range: SourceRange; children: Node[] } {
  const children = nodes.filter((x): x is Node => !!x);
  const range = rangeFromNodes(children.first(), children.last());

  return { range, children };
}
