import {$GroupNode, corePackageType, GroupNode} from '#core';

export type BraceGroupNode = GroupNode & {__branding?: null};

export const $BraceGroupNode = corePackageType<BraceGroupNode>('BraceGroupNode', $GroupNode);
