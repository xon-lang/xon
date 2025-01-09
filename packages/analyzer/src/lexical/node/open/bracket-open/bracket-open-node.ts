import {$OpenNode, OpenNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type BracketOpenNode = OpenNode & Brand<'Analyzer.BracketOpenNode'>;

export const $BracketOpenNode = analyzerPackageType<BracketOpenNode>('BracketOpenNode', $OpenNode);
