import {$Node, analyzerPackageType, GroupCloseNode, GroupOpenNode, ItemNode, SyntaxNode} from '#analyzer';
import {ArrayData, Nothing} from '#common';

export type GroupNode = SyntaxNode & {
  open: GroupOpenNode;
  items: ArrayData<ItemNode>;
  close: GroupCloseNode | Nothing;
};

// todo remove 'lambda' and use as simple object
export const $GroupNode = () =>
  analyzerPackageType<GroupNode>('GroupNode', analyzerPackageType<SyntaxNode>('SyntaxNode', $Node));
