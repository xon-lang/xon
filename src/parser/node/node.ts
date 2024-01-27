import { String2 } from '../../lib/core';
import { SourceRange } from '../../source/source-range';
import { NodeType } from './node-type';

export interface Node {
  readonly $: NodeType;
  readonly range: SourceRange;
}

export interface TokenNode extends Node {
  // todo remove it and get from range field
  readonly text: String2;
}

export interface SyntaxNode extends Node {
  readonly children: Node[];
}

export function addNodeParent(parent: SyntaxNode, ...children: (Node | null)[]): void {
  for (const node of children) {
    if (!node) {
      continue;
    }

    parent.children.push(node);
  }
}

export function isSyntaxNode(node: Node): node is SyntaxNode {
  // eslint-disable-next-line no-restricted-syntax
  return 'children' in node;
}
