import {$GroupCloseNode, GroupCloseNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type ParenCloseNode = GroupCloseNode & Brand<'Analyzer.ParenCloseNode'>;

export const $ParenCloseNode = analyzerPackageType<ParenCloseNode>('ParenCloseNode', $GroupCloseNode);
