import {$Node, analyzerPackageType, CloseNode, ItemNode, OpenNode, SyntaxNode} from '#analyzer';
import {ArrayData, Nothing} from '#common';

export type GroupNode = SyntaxNode & {
  open: OpenNode;
  items: ArrayData<ItemNode>;
  close: CloseNode | Nothing;
};

// todo remove 'lambda' and use as simple object
export const $GroupNode = () =>
  analyzerPackageType<GroupNode>('GroupNode', analyzerPackageType<SyntaxNode>('SyntaxNode', $Node));
