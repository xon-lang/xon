import {
  $SyntaxNode2,
  analyzerPackageType,
  GroupCloseNode,
  GroupItemNode,
  GroupOpenNode,
  SyntaxNode2,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type GroupNode = SyntaxNode2 &
  Brand<'Analyzer.GroupNode'> & {
    open: GroupOpenNode;
    items: ArrayData<GroupItemNode>;
    close: GroupCloseNode | Nothing;
  };

// todo remove 'lambda' and use as simple object
export const $GroupNode = analyzerPackageType<GroupNode>('GroupNode', $SyntaxNode2);


