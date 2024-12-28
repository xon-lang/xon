import {$GroupNode, corePackageType, GroupNode} from '#core';

export type ParenGroupNode = GroupNode & {__branding?: null};

export const $ParenGroupNode = corePackageType<ParenGroupNode>('ParenGroupNode', $GroupNode);
