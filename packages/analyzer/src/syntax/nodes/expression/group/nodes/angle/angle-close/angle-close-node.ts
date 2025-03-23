import {$AnalyzerType, $GroupCloseNode, GroupCloseNode} from '#analyzer';
import {Brand} from '#typing';

export type AngleCloseNode = GroupCloseNode & Brand<'Analyzer.AngleCloseNode'>;

export const $AngleCloseNode = () => $AnalyzerType<AngleCloseNode>('AngleCloseNode', $GroupCloseNode());
