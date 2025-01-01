import {ArrayData} from '#common';
import {$Node, corePackageType, Node} from '#core';

export type SyntaxNode = Node & {
  children: ArrayData<Node>;
};

export const $SyntaxNode = corePackageType<SyntaxNode>('SyntaxNode', $Node);
