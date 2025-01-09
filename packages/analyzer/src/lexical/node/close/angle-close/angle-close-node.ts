import {$CloseNode, CloseNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type AngleCloseNode = CloseNode & Brand<'Analyzer.AngleCloseNode'>;

export const $AngleCloseNode = analyzerPackageType<AngleCloseNode>('AngleCloseNode', $CloseNode);
