import {$GroupNode, analyzerPackageType, GroupNode} from '#analyzer';
import {Brand} from '#typing';

export type AngleGroupNode = GroupNode & Brand<'Analyzer.AngleGroupNode'>;

export const $AngleGroupNode = analyzerPackageType<AngleGroupNode>('AngleGroupNode', $GroupNode());
