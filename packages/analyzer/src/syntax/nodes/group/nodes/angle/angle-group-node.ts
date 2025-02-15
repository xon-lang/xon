import {$AnalyzerType, $GroupNode, GroupNode} from '#analyzer';
import {Brand} from '#typing';

export type AngleGroupNode = GroupNode & Brand<'Analyzer.AngleGroupNode'>;

export const $AngleGroupNode = () => $AnalyzerType<AngleGroupNode>('AngleGroupNode', $GroupNode());
