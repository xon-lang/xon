import {$OpenNode, OpenNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type BraceOpenNode = OpenNode & Brand<'Analyzer.BraceOpenNode'>;

export const $BraceOpenNode = analyzerPackageType<BraceOpenNode>('BraceOpenNode', $OpenNode);
