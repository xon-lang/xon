import {$GroupOpenNode, GroupOpenNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type BracketOpenNode = GroupOpenNode & Brand<'Analyzer.BracketOpenNode'>;

export const $BracketOpenNode = analyzerPackageType<BracketOpenNode>('BracketOpenNode', $GroupOpenNode);
