import {$GroupNode, corePackageType, GroupNode} from '#core';

export type BraceGroupNode = GroupNode;

export const $BraceGroupNode = corePackageType<BraceGroupNode>('BraceGroupNode', $GroupNode);
