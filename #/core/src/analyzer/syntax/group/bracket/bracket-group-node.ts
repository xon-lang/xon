import {$GroupNode, corePackageType, GroupNode} from '#core';

export type BracketGroupNode = GroupNode & {__branding?: null};

export const $BracketGroupNode = corePackageType<BracketGroupNode>('BracketGroupNode', $GroupNode);
