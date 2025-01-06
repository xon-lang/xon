import {$Node, analyzerPackageType, Node} from '#analyzer';
import {ArrayData} from '#common';

export type SyntaxNode = Node & {
  children: ArrayData<Node>;
};

export const $SyntaxNode = analyzerPackageType<SyntaxNode>('SyntaxNode', $Node);
