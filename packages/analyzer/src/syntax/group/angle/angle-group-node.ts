import {$GroupNode, corePackageType, GroupNode} from '#analyzer';
import {Brand} from '#typing';

export type AngleGroupNode = GroupNode & Brand<'Core.AngleGroupNode'>;

export const $AngleGroupNode = corePackageType<AngleGroupNode>('AngleGroupNode', $GroupNode());
