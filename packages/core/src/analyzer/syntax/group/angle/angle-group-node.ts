import {$GroupNode, corePackageType, GroupNode} from '#core';
import {Brand} from '#typing';

export type AngleGroupNode = GroupNode & Brand<'Core.AngleGroupNode'>;

export const $AngleGroupNode = corePackageType<AngleGroupNode>('AngleGroupNode', $GroupNode());
