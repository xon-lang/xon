import {$GroupNode, corePackageType, GroupNode} from '#core';

export type ParenGroupNode = GroupNode;

export const $ParenGroupNode = corePackageType<ParenGroupNode>('ParenGroupNode', $GroupNode);
