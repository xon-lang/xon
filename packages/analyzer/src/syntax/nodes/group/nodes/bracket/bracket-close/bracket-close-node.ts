import {$GroupCloseNode, GroupCloseNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type BracketCloseNode = GroupCloseNode & Brand<'Analyzer.BracketCloseNode'>;

export const $BracketCloseNode = analyzerPackageType<BracketCloseNode>('BracketCloseNode', $GroupCloseNode);
