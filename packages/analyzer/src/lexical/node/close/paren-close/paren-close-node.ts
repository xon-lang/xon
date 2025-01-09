import {$CloseNode, CloseNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type ParenCloseNode = CloseNode & Brand<'Analyzer.ParenCloseNode'>;

export const $ParenCloseNode = analyzerPackageType<ParenCloseNode>('ParenCloseNode', $CloseNode);
