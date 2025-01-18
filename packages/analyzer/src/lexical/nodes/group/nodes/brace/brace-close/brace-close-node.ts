import {$GroupCloseNode, GroupCloseNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type BraceCloseNode = GroupCloseNode & Brand<'Analyzer.BraceCloseNode'>;

export const $BraceCloseNode = analyzerPackageType<BraceCloseNode>('BraceCloseNode', $GroupCloseNode);
