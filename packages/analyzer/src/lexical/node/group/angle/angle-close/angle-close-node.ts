import {$GroupCloseNode, GroupCloseNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type AngleCloseNode = GroupCloseNode & Brand<'Analyzer.AngleCloseNode'>;

export const $AngleCloseNode = analyzerPackageType<AngleCloseNode>('AngleCloseNode', $GroupCloseNode);
