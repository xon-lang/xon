import { Nothing, String2 } from '../../lib/core';
import { SourceRange } from '../../source/source-range';
import { Type } from '../type/type';
import { $Node } from './node-type';

export interface Node {
  readonly $: $Node;
  readonly range: SourceRange;
}

export interface TokenNode extends Node {
  // todo remove it and get from range field to optimize memory
  readonly text: String2;
}

export interface SyntaxNode extends Node {
  readonly children: Node[];
}

export interface StatementNode extends SyntaxNode {
  parent: StatementNode | Nothing;
  modelDeclarationType: Type | null;
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
