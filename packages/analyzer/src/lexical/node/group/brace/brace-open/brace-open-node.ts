import {$GroupOpenNode, GroupOpenNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type BraceOpenNode = GroupOpenNode & Brand<'Analyzer.BraceOpenNode'>;

export const $BraceOpenNode = analyzerPackageType<BraceOpenNode>('BraceOpenNode', $GroupOpenNode);
