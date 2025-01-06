import {$GroupNode, analyzerPackageType, GroupNode} from '#analyzer';
import {Brand} from '#typing';

export type AngleGroupNode = GroupNode & Brand<'Core.AngleGroupNode'>;

export const $AngleGroupNode = analyzerPackageType<AngleGroupNode>('AngleGroupNode', $GroupNode());
