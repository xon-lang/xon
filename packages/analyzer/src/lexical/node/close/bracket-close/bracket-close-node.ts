import {$CloseNode, CloseNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type BracketCloseNode = CloseNode & Brand<'Analyzer.BracketCloseNode'>;

export const $BracketCloseNode = analyzerPackageType<BracketCloseNode>('BracketCloseNode', $CloseNode);
