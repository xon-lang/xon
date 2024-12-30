import {$Node, corePackageType, Node} from '#core';

export type SyntaxNode = Node & {
  children: Node[];
};

export const $SyntaxNode = corePackageType<SyntaxNode>('SyntaxNode', $Node);
