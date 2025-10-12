import {$AnalyzerType, $GroupOpenNode, GroupOpenNode} from '#analyzer';
import {Brand} from '#typing';

export type AngleOpenNode = GroupOpenNode & Brand<'Analyzer.AngleOpenNode'>;

export const $AngleOpenNode = () => $AnalyzerType<AngleOpenNode>('AngleOpenNode', $GroupOpenNode());
