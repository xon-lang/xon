import {$Node, corePackageType, Node} from '#analyzer';
import {ArrayData} from '#common';

export type SyntaxNode = Node & {
  children: ArrayData<Node>;
};

export const $SyntaxNode = corePackageType<SyntaxNode>('SyntaxNode', $Node);
