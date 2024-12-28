import {$GroupNode, corePackageType, GroupNode} from '#core';

export type AngleGroupNode = GroupNode & {__branding?: null};

export const $AngleGroupNode = corePackageType<AngleGroupNode>('AngleGroupNode', $GroupNode);
