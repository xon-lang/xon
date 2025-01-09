import {$CloseNode, CloseNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type BraceCloseNode = CloseNode & Brand<'Analyzer.BraceCloseNode'>;

export const $BraceCloseNode = analyzerPackageType<BraceCloseNode>('BraceCloseNode', $CloseNode);
