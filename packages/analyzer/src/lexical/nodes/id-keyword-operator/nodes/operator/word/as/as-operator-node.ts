import {$WordOperatorNode, analyzerPackageType, WordOperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type AsOperatorNode = WordOperatorNode & Brand<'Analyzer.AsOperatorNode'>;

export const $AsOperatorNode = analyzerPackageType<AsOperatorNode>('AsOperatorNode', $WordOperatorNode);
