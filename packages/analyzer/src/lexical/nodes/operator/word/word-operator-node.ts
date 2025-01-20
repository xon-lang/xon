import {$OperatorNode, analyzerPackageType, OperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type WordOperatorNode = OperatorNode & Brand<'Analyzer.WordOperatorNode'>;

export const $WordOperatorNode = analyzerPackageType<WordOperatorNode>('WordOperatorNode', $OperatorNode);
